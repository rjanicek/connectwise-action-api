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

exports.find_schedule_entries = function (test) {
	var options = {
		//  Search conditions (see "ConnectWise APIs Find by Conditions Syntax" for more information) 
		//  Available fields are:
		//  * MemberId (integer)
		//  * TicketId (integer)
		//  * ScheduleLocationId (integer)
		//  * DateStart (date time)
		//  * DateEnd (date time)
		//  * ReminderTimeId (integer, minutes)
		//  * ScheduleStatusId (integer)
		//  * ScheduleTypeId (integer)
		//  * SpanId (integer)
		//  * UpdatedBy (string)
		//  * LastUpdated (date time)
		//  * ClosedDate (date time)
		//  * Done (boolean)
		//  * Acknowledged (boolean)

		Conditions: '',	// ie: MemberId = 111 AND DateStart > [2014-10-24T12:00:00-05:00]

		// == Optional ==
 		// OrderBy: '',	// sort
 		// Skip: 0,		// number of records to skip before returning results
 		Limit: 2		// limit on the number of results returned
	};

	api.action('FindScheduleEntryAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
		    console.log(util.inspect(api.normalizeCollection(result.FindScheduleEntryAction.ScheduleEntries), {depth: null, colors: true}));
		}
		test.done();
	});
};
