/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var _ = require('lodash');
var config = require('./test-config');

var api = require('./index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

function sortAvailableReports(normalizedReports) {
    var sortMap = function (map) {
        return _(map).keys().sort().reduce(function (sortedMap, key) {
            sortedMap[key] = map[key];
            return sortedMap;
        }, {});
    };

    return sortMap(_.transform(normalizedReports, function (reports, report, reportName) {
        reports[reportName] = sortMap(report);
    }));
}

function markdownAvailableReports(normalizedReports) {
    return _.reduce(normalizedReports, function (markdown, fields, reportName) {
        markdown += '####' + reportName + '\r\n';
        markdown += '|             |             |     |\r\n' +
                    '|-------------|-------------|-----|\r\n';
        markdown += _.reduce(fields, function (markdown, attributes, fieldName) {
            markdown += '| `' + fieldName + '` | ' + attributes.Type + ' | ' + (attributes.IsNullable.toLowerCase() === 'true' ? 'nullable' : '') + ' |\r\n';
            return markdown;
        }, '') + '\r\n';
        return markdown;
    }, '');
}

api.action('GetConnectWiseVersionAction', {}, function (error, result) {
	error && console.error(error);
	if (!result) { return; }
	
	console.log('###Available Reports for ConnectWise ' + result.GetConnectWiseVersionAction.CwVersionInfo.Version);
	console.log('---');

	api.action('GetAvailableReportsAction', { IncludeFields: true }, function (error, response) {
		error && console.error(error);
		if (response) {
			var reports = api.normalizeGetAvailableReportsActionResponse(response);
			reports = sortAvailableReports(reports);
		    console.log(markdownAvailableReports(reports));
		}
	});
});