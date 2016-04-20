/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, esversion: 6, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

// New 2.0 endpoint: /v4_6_release/apis/2.0/integration_io.asmx

'use strict';

const _ = require('lodash');
const concat = require('concat-stream');
const events = require('events');
const hq = require('hyperquest');
const js2xmlparser = require('js2xmlparser');
const parseString = require('xml2js').Parser({ explicitArray: false }).parseString;
const qs = require('querystring');
const request = require('request');
const sax = require('./sax-1.2.1.patched');
const saxpath = require('saxpath');

const api = {
    makeActionXml (actionName, actionData) {
        actionData = _.merge(actionData, {$: { 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema' }});
        return js2xmlparser(actionName, actionData, {declaration: {encoding: 'utf-16'}, attributeString: '$'});
    },

    // Send action request to server and stream back XML response.
    actionXmlStream (psaServerHostName, actionXml) {
        var uri = `https://${psaServerHostName}/v4_6_release/services/system_io/integration_io/processclientaction.rails`;

        var req = hq.post(uri);
        req.setHeader('content-type', 'application/x-www-form-urlencoded');
        req.end(qs.stringify({ actionString : actionXml }));

        return req;
    },

    // Filter action results with xPath and stream results using event emitter
    // api.
    actionStream (psaServerHostName, actionXml, actionName, xPath) {
        xPath = xPath || '//' + actionName;

        var strict = true;
        var saxParser = sax.createStream(strict, {entities: false});
        var streamer = new saxpath.SaXPath(saxParser, xPath);
        var objectEmitter = new events.EventEmitter();

        streamer.on('match', xml => {
            parseString(xml, (error, match) => {
                error && objectEmitter.emit('error', error);
                match && objectEmitter.emit('match', match);
            });
        });

        var xmlStream = api.actionXmlStream(psaServerHostName, actionXml)
            .on('response', response => {
                if (response.statusCode !== 200) {
                    xmlStream.pipe(concat({encoding: 'string'}, body => {
                        objectEmitter.emit('error', `http response status code ${response.statusCode}\n\n${body}`);
                    }));                    
                    return;
                }
                xmlStream.pipe(saxParser);
            })
            .on('error', error => {
                objectEmitter.emit('error', error);
            })
            .on('end', function () {
                objectEmitter.emit('end');
            });

        return objectEmitter;
    },

    // Buffer action results and return with callback api. 
    action (psaServerHostName, actionXml, actionName, returnErrorAndResult) {
        var xmlStream = api.actionXmlStream(psaServerHostName, actionXml)
            .on('response', function (response) {
                xmlStream.pipe(concat({encoding: 'string'}, body => {
                    if (response.statusCode !== 200) {
                        returnErrorAndResult(`http response status code ${response.statusCode}\n\n${body}`);
                        return;
                    }
                    parseString(body, returnErrorAndResult);
                }));
            })
            .on('error', error => returnErrorAndResult(error));
    },    

    uploadDocumentToTicket (psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword, sRServiceRecID, fileName, fileBufferOrString, returnErrorAndResult) {
        var mime = require('mime');

        var uri = `https://${psaServerHostName}/v4_6_release/services/system_io/integration_io/uploaddocumenttoticket.aspx`;

        var requestOptions = {
            method: 'POST',
            uri: uri,
            strictSSL: false,
            headers: {
                'content-type' : 'multipart/form-data'
            },
            multipart: [
                {'Content-Disposition' : 'form-data; name="PsaCompanyName"', body: psaCompanyName },
                {'Content-Disposition' : 'form-data; name="IntegrationLoginId"', body: integrationLoginId },
                {'Content-Disposition' : 'form-data; name="IntegrationPassword"', body: integrationPassword },
                {'Content-Disposition' : 'form-data; name="SRServiceRecID"', body: sRServiceRecID },
                {'Content-Disposition' : 'form-data; name="file"; filename="' + fileName + '"', 'Content-Type' : mime.lookup(fileName), body: fileBufferOrString}
            ]
        };

        request(requestOptions, (error, response, body) => {
            if (error) {
                returnErrorAndResult(error);
                return;
            }
        
            if (response.statusCode !== 200) {
                returnErrorAndResult(`response status code ${response.statusCode}\r\n${body}`);
                return;
            }

            returnErrorAndResult(null, body);
        });
    },


    // Collections can be parsed as various different data types depending on
    // if they containe 0, 1 or many results. This function normalizes a
    // collection into an array.
    normalizeCollection (collection) {
        if (_.isString(collection)) {
            return [];
        }

        var values = _.values(collection);
        if (values.length === 0) {
            return [];
        }
        
        var firstValue = values[0];
        if (!_.isArray(firstValue)) {
            return [firstValue];
        }

        return firstValue;
    },

    // Necessary because FindPartnerTicketsAction does not return Id key.
    // Apparently this is fixed in API's 2.0
    normalizeTicketsFromFindPartnerTicketsAction (tickets) {
        return _.map(tickets, ticket => {
            ticket.Id = ticket.Id || ticket.SRServiceRecID;
            return ticket;
        });
    },

    normalizeRunReportQueryActionResult (result) {
        return result.reduce((previous, metaValue) => {
            previous[metaValue.$.Name] = (value => { switch (metaValue.$.Type) {
                case 'DateTime': return api.parsePsaDate(value);
                case 'Numeric': return Number(value);
                case 'Boolean': return value && value.toLowerCase() === 'true';
                default: return value;
            }})(metaValue._);
            return previous;
        }, {});
    },    

    normalizeRunReportQueryAction (metaData) {
        return api.normalizeCollection(metaData.RunReportQueryAction.Results).map(metaData => {
            return api.normalizeRunReportQueryActionResult(metaData.Value);
        });
    },

    normalizeGetAvailableReportsActionResponse (response) {
        var normalizedReports = api.normalizeCollection(response.GetAvailableReportsAction.AvailableReports);
        var reduced = normalizedReports.reduce((reports, report) => {
            reports[report.$.Name] = report.Field && report.Field.reduce((fields, field) => {
                fields[field.$.Name] = _.omit(field.$, 'Name');
                return fields;
            }, {});
            return reports;
        }, {});

        return reduced;
    },

    // dateTime can be
    //  'MM/DD/YYYY HH:MM:SS AM'
    //  'YYYY-MM-DDTHH:MM:SS'
    //
    // optionalTimeZone examples
    //  '-0400'
    //  'GMT'
    //  'EST'
    parsePsaDate (dateTime, optionalTimeZone) {
        if (typeof dateTime === 'undefined') {
            return dateTime;
        }

        var parts = dateTime.split('T');
        optionalTimeZone && parts.push(optionalTimeZone);
        return new Date(parts.join(' '));
    },

    // Make a service ticket URL.
    connectWiseUrl (psaServerHostName) {
        return 'https://' + psaServerHostName;
    },

    // Make a service ticket URL.
    ticketUrl (psaServerHostName, psaCompanyName, ticketId) {
        return `https://${psaServerHostName}/v4_6_release/services/system_io/Service/fv_sr100_request.rails?companyName=${psaCompanyName}&service_recid=${ticketId}`;
    },

    // Hacky but at least gets you a page with some data.
    activityUrl (psaServerHostName, activityId) {
        return `https://${psaServerHostName}/v4_6_release/contact/activity/default.rails?action=viewSOActivity&screenid=tm100&ac_flag=false&recordid=${activityId}`;
    },

    configure (psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword) {
        var configured = _.clone(api);

        configured.action = (actionName, actionData, returnErrorAndResult) => {
            var defaultActionData = {
                CompanyName: psaCompanyName,
                IntegrationLoginId: integrationLoginId,
                IntegrationPassword: integrationPassword
            };
            var actionXml = api.makeActionXml(actionName, _.merge(actionData, defaultActionData));
            api.action(psaServerHostName, actionXml, actionName, returnErrorAndResult);
        };

        configured.actionStream = (actionName, xPath, actionData) => {
            var defaultActionData = {
                CompanyName: psaCompanyName,
                IntegrationLoginId: integrationLoginId,
                IntegrationPassword: integrationPassword
            };
            var actionXml = api.makeActionXml(actionName, _.merge(actionData, defaultActionData));
            return api.actionStream(psaServerHostName, actionXml, actionName, xPath);
        };

        configured.uploadDocumentToTicket = _.partial(api.uploadDocumentToTicket, psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword);
        configured.connectWiseUrl = _.partial(api.connectWiseUrl, psaServerHostName);
        configured.ticketUrl = _.partial(api.ticketUrl, psaServerHostName, psaCompanyName);
        configured.activityUrl = _.partial(api.activityUrl, psaServerHostName);

        return configured;
    }
};

module.exports = api;