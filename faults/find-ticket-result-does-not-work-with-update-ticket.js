/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

// Service Ticket #4378455 - API / FindPartnerTicketsAction result does not work with UpdateTicketAction, tickets missing Id

'use strict';

var config = require('../test-config');

var api = require('../index').configure(
	config.PSA_SERVER_HOST,
	config.INTEGRATION_COMPANY_NAME,
	config.INTEGRATION_LOGIN_ID,
	config.INTEGRATION_PASSWORD
);

var temp = require('../test-temp')(api);
exports.setup = temp.setupTicket.bind('find-ticket-result-does-not-work-with-update-ticket test');

var foundTicket = null;
exports.find_existing_ticket = function (test) {
	var options = {
		Conditions: 'SRServiceRecID = ' + temp.ticket.Id
	};

	api.action('FindPartnerTicketsAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    foundTicket = result.FindPartnerTicketsAction.Tickets.Ticket;
		    console.dir(foundTicket);
		}
		test.done();
	});	
};

exports.update_found_ticket = function (test) {
	api.action('UpdateTicketAction', { Ticket: foundTicket }, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		test.strictEqual(result.UpdateTicketAction.Ticket.Summary, 'Updated summary.');
		test.done();
	});
};

exports.cleanup = temp.cleanupTicket;