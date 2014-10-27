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

var newTicket = null;

exports.make_new_ticket = function (test) {
	var options = {
		Ticket: {
 			// you can updated tickets via managedId or CompanyId
 			
			// The managed id in the company management screen for which the
			// service ticket should be entered against. If this is filled in,
			// the company id must be left empty. The ManagedId field is
			// located on the management tab of the company screen in the
			// application. You must be licensed for the MSP Add-on to have
			// access to this field. If you do not have the MSP Add-on, you
			// should use the CompanyID. The Value passed in ManagedId (aka
			// Group Id) should be retrieved from CompanyMgmt report
			// (Reporting API) - Please Note: Company API does not return the
			// Managed Id.
 			ManagedId: null,

 			// The company id in the PSA database. If this is filled in, the
 			// managed id must be left blank. If this cannot match up against
 			// anything company in the PSA system, then an exception will be
 			// thrown.
 			CompanyId: config.TEST_PSA_COMPANY_ID,

 			// Required
			Summary: 'This is a test...'

			// Optional

			// Board: null,
			// City: null,	
			// Country: null,
			// StateId: null,
			// AddressLine1: null,
			// AddressLine2: null,
			// DateReq: null,
			// NewTicketContactEmailLookup: null,
			// ProblemDescription: null,
			// Resolution: null,
			// SiteName: null,
			// StatusName: null,
			// Zip: null,

			// // If provided, the Configurations node should contain one or more TicketConfiguration child nodes.
 			// Configurations: [
 			// 	{ TicketConfiguration: {
 			// 		Id: '',
 			// 		DeviceId: ''
	 		// 	}}
	 		// // additional TicketConfiguration nodes here
 			// ]

		}
	};

	api.action('UpdateTicketAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    newTicket = result.UpdateTicketAction.Ticket;
		   	console.dir(result);
		}
		test.done();
	});    
};

exports.update_existing_ticket = function (test) {
	if (!newTicket) {
		test.done();
		return;
	}

	newTicket.Summary = 'Updated summary.';

	api.action('UpdateTicketAction', { Ticket: newTicket }, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		test.strictEqual(result.UpdateTicketAction.Ticket.Summary, 'Updated summary.');
		test.done();
	});
};

exports.delete_new_ticket = function (test) {
	if (!newTicket) {
		test.done();
		return;
	}

	api.action('DeleteTicketAction', {SrServiceRecid: newTicket.Id}, function (error, result) {
		error && console.error(error);
		test.done();
	});
};