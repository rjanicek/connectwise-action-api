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
var retry = require('async').retry;

var temp = require('../../test-temp')(api);

exports.setup = temp.setupTicket.bind('delete_document_from_partner_ticket test');

exports.upload_document_to_ticket = function (test) {
	api.uploadDocumentToTicket(
		temp.ticket.Id,
		'document.txt',
		'boop!',
		function (error, result) {
			test.ok(!error, error);
			test.done();
		});
};

var documentId = null;

exports.ticket_should_have_one_document = function (test) {
	var options = {
		SrServicerecID: temp.ticket.Id		// id of ticket (sr_service_recid)
	};

	api.action('GetTicketDocumentsAction', options, function (error, result) {
		test.ok(!error, error);
		test.ok(result);
		var docs = api.normalizeCollection(result.GetTicketDocumentsAction.Documents);
	    test.strictEqual(docs.length, 1);
	    documentId = docs[0].Id;

		test.done();
	});
};

exports.delete_document_from_partner_ticket = function (test) {
	api.action('DeleteDocumentFromPartnerTicketAction', {
		Id: documentId,  // id value of document (recid)
		SrServiceRecid: temp.ticket.Id
	}, function (error, result) {
		test.ok(!error, error);
	});
	test.done();
};

exports.ticket_should_have_no_documents = function (test) {
	retry(function (done) {
		var options = {
			SrServicerecID: temp.ticket.Id		// id of ticket (sr_service_recid)
		};

		api.action('GetTicketDocumentsAction', options, function (error, result) {
			if (error) { 
				done(error);
				return;
			}
			var docs = api.normalizeCollection(result.GetTicketDocumentsAction.Documents);
		    if (docs.length === 0) {
		    	done();
		    	return;
		    }
		    done('documents not deleted yet');			
		});
	}, function (error, result) {
		test.ok(!error, error);
		test.done();
	});
};

exports.cleanup = temp.cleanup;