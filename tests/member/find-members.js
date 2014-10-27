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

exports.find_members = function (test) {
	var options = {

		// Search conditions (see "ConnectWise APIs Find by Conditions Syntax" for more information) 
		// Available fields are:
		// - MemberID (text)
		// - EmailAddress (text)
		// - FirstName (text)
		// - LastName (text)

		Conditions: '',	// ie: MemberID like "zadmin" and EmailAddress like "test@connectwise.com"

		// == Optional ==
 		// OrderBy: '',	// sort
 		// Skip: 0,		// number of records to skip before returning results
 		Limit: 2		// limit on the number of results returned
	};

	api.action('FindMembersAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
			console.dir(api.normalizeCollection(result.FindMembersAction.Results));
		}
		test.done();
	});
};
