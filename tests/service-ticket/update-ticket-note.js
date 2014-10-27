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
exports.setup = temp.setupTicket.bind('update_ticket_note test');

var newTicketNote = null;

exports.add_ticket_note = function (test) {
	var options = {
 		// CompanyId: null,		// the text-based company id
 		SrServiceRecid: temp.ticket.Id,	// the ticket number (the numeric id for the service ticket)

 		Note: {
 			Id: 0, 	// set to 0 (or do not include) for a new note, otherwise the id of an existing note to update
 			NoteText: 'some notes...',	// You must provide a non-empty value
 			
			// At least one of these must be true
 			IsPartOfDetailDescription: true,
 			IsPartOfInternalAnalysis: false,
 			IsPartOfResolution: false

 			// = Optional =
 			// MemberRecID: 0,
 			// ContactRecID: 0,
 			// DateCreated: '',
 			// CreatedBy: '',
 			// MemberFullName: ''
 		}
	};

	api.action('UpdateTicketNoteAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
			newTicketNote = result.UpdateTicketNoteAction.Note;
		    console.dir(result);
		}
		test.done();
	});
};

exports.update_ticket_note = function (test) {
	newTicketNote.NoteText = 'updated notes...';
	var options = {
 		// CompanyId: null,		// the text-based company id
 		SrServiceRecid: temp.ticket.Id,	// the ticket number (the numeric id for the service ticket)
 		Note: newTicketNote
	};

	api.action('UpdateTicketNoteAction', options, function (error, result) {
		if (error) { console.error(error); }
		test.ok(!error);
		test.ok(result);
		if (result) {
			test.strictEqual(result.UpdateTicketNoteAction.Note.NoteText, 'updated notes...');
		    console.dir(result);
		}
		test.done();
	});
};

exports.cleanup = temp.cleanup;