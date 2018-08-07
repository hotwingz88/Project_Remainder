var mongoose = require ('mongoose');
var NoteSchema = require('./note.schema.server.js')
var NoteModel = mongoose.model('NoteModel', NoteSchema);

NoteModel.findNotesForUser = findNotesForUser;

function findNotesForUser(uid){
	return NoteModel.find({developerId: uid});
}

module.exports = NoteModel;