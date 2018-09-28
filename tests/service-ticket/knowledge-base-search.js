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

/**
 * http://developer.connectwise.com/index.php?option=com_k2&view=item&id=1485&Itemid=101
 */
exports.knowledge_base_search = function (test) {
	var options = {
 		SearchType: 'All',	// Any or All or Exact

 		SearchTerms: 'knowledge',	// Specific text for search
        SearchStart: new Date().toISOString(),	// only search tickets since this date
 		// CompanyRecID: 0,	// only search tickets for this company
 		Limit: 10,
 		Skip: 0
	};

	api.action('KnowledgeBaseSearchAction', options, function (error, result) {
		test.ok(!error, error);
		test.ok(result);
		if (result) {
		    console.dir(api.normalizeCollection(result.KnowledgeBaseSearchAction.SearchResults));
		}
		test.done();
	});
};
