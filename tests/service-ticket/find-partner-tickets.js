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


exports.find_tickets = function (test) {
	var options = {
		// === For ConnectWise 2010.4 and later ===
		 
		//  Search conditions (see "ConnectWise APIs Find by Conditions Syntax" for more information) 
		//  Available fields are:
		//  - AddressLine1 (text)
		//  - AddressLine2 (text)
		//  - Board (text)
		//  - BoardName (text)
		//  - City (text)
		//  - ClosedFlag (boolean)
		//  - CompanyName (text)
		//  - ContactName (text)
		//  - Country (text)
		//  - DetailDescription (text)
		//  - InternalNotes (text)
		//  - Location (text)
		//  - Priority (text)
		//  - RecordType (P = Project, S = Service)
		//  - Resolution (text)
		//  - ServiceType (text)
		//  - Source (text)
		//  - SRServiceRecID (number)
		//  - State (text)
		//  - Status (text)
		//  - StatusName (text)
		//  - Summary (text)
		//  - Type (text)
		//  - Zip (text)

		Conditions: '',	// ie: ClosedFlag = true and Sumamry like "%Andrew%"

		// == Optional ==
 		// OrderBy: '',	// sort
 		// Skip: 0,		// number of records to skip before returning results
 		Limit: 2		// limit on the number of results returned
	};

	api.action('FindPartnerTicketsAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    console.dir(result.FindPartnerTicketsAction.Tickets);
		}
		test.done();
	});
};
