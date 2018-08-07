module.exports = function(app) {
	var NoteModel = require('../models/note.model.server.js')

	app.get('/api/notes/:uid', findNotesForUser);

	function findNotesForUser(req, res) {
		// getting the uid from request parameters
		var uid = req.params["uid"];
		
		NoteModel.findNotesForUser(uid).then(
			function(data) {
				res.json(data);
			}
		)

	}
}