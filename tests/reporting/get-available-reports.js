/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var config = require('../../test-config');
var util = require('util');

var api = require('../../index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

exports.get_available_reports = function (test) {
	var options = {

		 // true/false
		 IncludeFields: true
	};

	api.action('GetAvailableReportsAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    console.log(util.inspect(result, {depth: null, colors: true}));
		}
		test.done();
	});
};
