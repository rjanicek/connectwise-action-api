/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

// New 2.0 endpoint: /v4_6_release/apis/2.0/integration_io.asmx

'use strict';

var _ = require('lodash');
var js2xmlparser = require('js2xmlparser');
var parseString = require('xml2js').Parser({ explicitArray: false }).parseString;
var request = require('request');

var api = {
    makeActionXml: function (actionName, actionData) {
        actionData = _.merge(actionData, {$: { 'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance', 'xmlns:xsd': 'http://www.w3.org/2001/XMLSchema' }});
        return js2xmlparser(actionName, actionData, {declaration: {encoding: 'utf-16'}, attributeString: '$'});
    },

    action: function (psaServerHostName, actionXml, returnErrorAndResult) {
        var uri = 'https://' + psaServerHostName + '/v4_6_release/services/system_io/integration_io/processclientaction.rails';

        var requestOptions = {
            method: 'POST',
            uri: uri,
            strictSSL: false,
            form: { actionString : actionXml }
        };

        request(requestOptions, function (error, response, body) {
            if (error) {
                returnErrorAndResult(error);
                return;
            }
        
            if (response.statusCode !== 200) {
                returnErrorAndResult('response status code ' + response.statusCode + '\r\n' + body);
                return;
            }
            parseString(body, returnErrorAndResult);
        });
    },

    uploadDocumentToTicket: function (psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword, sRServiceRecID, fileName, fileBufferOrString, returnErrorAndResult) {
        var mime = require('mime');

        var uri = 'https://' + psaServerHostName + '/v4_6_release/services/system_io/integration_io/uploaddocumenttoticket.aspx';

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

        request(requestOptions, function (error, response, body) {
            if (error) {
                returnErrorAndResult(error);
                return;
            }
        
            if (response.statusCode !== 200) {
                returnErrorAndResult('response status code ' + response.statusCode + '\r\n' + body);
                return;
            }

            returnErrorAndResult(null, body);
        });
    },


    // Collections can be parsed as various different data types depending on
    // if they containe 0, 1 or many results. This function normalizes a
    // collection into an array.
    normalizeCollection: function (collection) {
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
    normalizeTicketsFromFindPartnerTicketsAction: function (tickets) {
        return _.map(tickets, function (ticket) {
            ticket.Id = ticket.Id || ticket.SRServiceRecID;
            return ticket;
        });
    },

    // RunReportQueryAction returns data like a can of silly string. This
    // function turns it into a nice array of JavaScript objects.
    normalizeRunReportQueryActionResponse: function (response) {
        return api.normalizeCollection(response.RunReportQueryAction.Results).map(function (structuredData) {
            return structuredData.Value.reduce(function (previous, value) {
                var convertedValue = value._;
                switch(value.$.Type) {
                    case 'DateTime': 
                        convertedValue = api.parsePsaDate(convertedValue);
                        break;
                    case 'Numeric': convertedValue = Number(convertedValue);
                        break;
                    case 'Boolean': convertedValue = convertedValue.toLowerCase() === 'true';
                        break;
                }
                previous[value.$.Name] = convertedValue;
                return previous;
            }, {});
        });
    },

    // dateTime can be
    //  'MM/DD/YYYY HH:MM:SS AM'
    //  'YYYY-MM-DDTHH:MM:SS'
    //
    // optionalTimeZone examples
    //  '-0400'
    //  'GMT'
    //  'EST'
    parsePsaDate: function (dateTime, optionalTimeZone) {
        if (typeof dateTime === 'undefined') {
            return dateTime;
        }

        var parts = dateTime.split('T');
        optionalTimeZone && parts.push(optionalTimeZone);
        return new Date(parts.join(' '));
    },

    // Make a service ticket URL.
    ticketUrl: function (psaServerHostName, psaCompanyName, ticketId) {
        return 'https://' + psaServerHostName + '/v4_6_release/services/system_io/Service/fv_sr100_request.rails?companyName=' + psaCompanyName + '&service_recid=' + ticketId;
    },

    configure: function (psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword) {
        var configured = _.clone(api);

        configured.action = function (actionName, actionData, returnErrorAndResult) {
            var defaultActionData = {
                CompanyName: psaCompanyName,
                IntegrationLoginId: integrationLoginId,
                IntegrationPassword: integrationPassword
            };
            var actionXml = api.makeActionXml(actionName, _.merge(actionData, defaultActionData));
            api.action(psaServerHostName, actionXml, returnErrorAndResult);
        };

        configured.uploadDocumentToTicket = _.partial(api.uploadDocumentToTicket, psaServerHostName, psaCompanyName, integrationLoginId, integrationPassword);

        configured.ticketUrl = _.partial(api.ticketUrl, psaServerHostName, psaCompanyName);

        return configured;
    }
};

module.exports = api;