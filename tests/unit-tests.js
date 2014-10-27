/* jshint 
browser: true, jquery: true, node: true,
bitwise: true, camelcase: false, curly: true, eqeqeq: true, es3: true, evil: true, expr: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

'use strict';

var api = require('../index');


exports.normalize_collections_should_return_array_for_empty_string = function (test) {
	test.deepEqual(api.normalizeCollection(''), []);
	test.done();
};

exports.normalize_collections_should_return_array_of_object_for_collection_with_single_object = function (test) {
	test.deepEqual(api.normalizeCollection({ticket:{}}), [{}]);
	test.done();
};

exports.normalize_collections_should_return_array_of_object_for_collection_with_many_objects = function (test) {
	test.deepEqual(api.normalizeCollection({ticket:[{}]}), [{}]);
	test.deepEqual(api.normalizeCollection({ticket:[{},{}]}), [{},{}]);
	test.done();
};