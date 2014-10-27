/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, expr: true, evil: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
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

function findTestCompanyTickets(returnTickets) {
	var options = {
		Conditions: 'RecordType="s" and ClosedFlag=false and CompanyName="' + config.TEST_PSA_COMPANY_NAME + '"'
	};

	api.action('FindPartnerTicketsAction', options, function (error, result) {
		if (error) { console.error(error); }
		if (result) {
			var tickets = api.normalizeCollection(result.FindPartnerTicketsAction.Tickets);
			tickets = api.normalizeTicketsFromFindPartnerTicketsAction(tickets);
			returnTickets(tickets);
		}
	});
}

function deleteTickets(tickets) {
	console.log('deleting tickets');
	console.log(_.map(tickets, function (t) {return [t.Id, t.Summary]; }));

	_.forEach(tickets, function (ticket) {
		var options = {
			SrServiceRecid: ticket.Id
		};

		api.action('DeleteTicketAction', options, function (error, result) {
			if (error) {
				console.error(error);
			} else {
				console.log('deleted', ticket.Id, ticket.Summary);
			}
		});
	});
}

// ----------------------------------------------------------------------------
// Main

findTestCompanyTickets(deleteTickets);