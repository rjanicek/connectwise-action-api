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

var temp = require('../../test-temp')(api);
exports.setup = temp.setupTicket.bind('get_ticket test');

exports.get_ticket = function (test) {

	var options = {
		SrServiceRecid: temp.ticket.Id		// numeric id of the service ticket you want to get
	};

	api.action('GetTicketAction', options, function (error, result) {
		test.ok(!error, error);
		test.ok(result);
		if (result) {
		    console.dir(result.GetTicketAction.Ticket);
		}
		test.done();
	});


};

exports.cleanup = temp.cleanup;