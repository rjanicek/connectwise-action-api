/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var config = require('../../test-config-private');
var util = require('util');

var api = require('../../index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

var options = {

	ReportName: 'Member',
	Conditions: '',

	// OrderBy: '',
	// QueryTimeoutInSeconds: 100,
	// Skip: 0,
	Limit: 2
};

exports.run_report_query_action_buffered = function (test) {

	api.action('RunReportQueryAction', options, function (error, result) {
		test.ok(!error, error);
		test.ok(result);
		if (result) {
			result = api.normalizeRunReportQueryAction(result);
		    console.log(util.inspect(result, {depth: null, colors: true}));
		}
		test.done();
	});

};

exports.run_report_query_action_streaming = function (test) {

	api.actionStream('RunReportQueryAction', '//Result', options)
		.on('match', function (match) {
			match = api.normalizeRunReportQueryActionResult(match.Result.Value);
			console.log(util.inspect(match, {depth: null, colors: true}));
		})
		.on('error', function (error) {
			test.ok(!error, error);
		})
		.on('end', function () {
			test.done();
		});

};