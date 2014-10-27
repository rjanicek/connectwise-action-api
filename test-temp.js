/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var config = require('./test-config');

module.exports = function (cwApi) {
	var api = {
		ticket: null,
		setupTicket: function (test, summary) {
			summary = summary || 'temporary test';
			cwApi.action('UpdateTicketAction', { Ticket: { CompanyId: config.TEST_PSA_COMPANY_ID, Summary: summary } }, function (error, result) {
				if (error) { console.error(error); }
				if (result) {
					api.ticket = result.UpdateTicketAction.Ticket;
				}
				test.done();
			});
		},

		cleanup: function (test) {
			if (api.ticket) {
				cwApi.action('DeleteTicketAction', { SrServiceRecid: api.ticket.Id }, function (error, result) {
					error && console.error(error);
					test.done();
				});
			}
		}
	};

	return api;
};