module.exports = function(app) {
	var NoteModel = require('../models/note.model.server.js')

	app.put( '/api/edit', editNote);
	app.get('/api/notes/:uid', findNotesForUser);
	app.post('/api/note', createNote);
	app.delete('/api/note/:noteId', deleteNote);
 
	function findNotesForUser(req, res) {
		// getting the uid from request parameters
		var uid = req.params["uid"];
		
		NoteModel.findNotesForUser(uid).then(
			function(data) {
				res.json(data);
			}
		)

	}

	function createNote(req, res) {
		const note = req.body;
		NoteModel.createNote(note).then(
			function(data) {
				res.json(data);
			}
		)
	}

	function editNote(req, res) {
		const note = req.body;
		NoteModel.editNote(note).then(
			function(data) {
				res.json(data);
			}
		)
	}

	function deleteNote(req, res) {
		// getting the noteId/deleteNote from request parameters
		const noteId = req.params["noteId"];
		NoteModel.deleteNote(noteId).then(
			function(data) {
				res.json(data);
			}
		)
	}	
}



