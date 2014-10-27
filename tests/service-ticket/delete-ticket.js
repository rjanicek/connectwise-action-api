/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var config = require('../../test-config');

var api = require('../../index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

var newTicketId = null;

exports.make_new_ticket = function (test) {
	api.action('UpdateTicketAction', { Ticket: { CompanyId: config.TEST_PSA_COMPANY_ID, Summary: 'delete_ticket test' } }, function (error, result) {
		test.ok(!error, error);
		if (result) {
		    newTicketId = result.UpdateTicketAction.Ticket.Id;
		}
		test.done();
	});
};

exports.delete_ticket = function (test) {
	var options = {
		SrServiceRecid: newTicketId		// numeric id of the service ticket you want to delete
	};

	api.action('DeleteTicketAction', options, function (error, result) {
		test.ok(!error, error);
		test.ok(result);
		if (result) {
		    console.dir(result);
		}
		test.done();
	});
};