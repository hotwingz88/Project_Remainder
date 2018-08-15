var mongoose = require ('mongoose');
var NoteSchema = require('./note.schema.server.js')
var NoteModel = mongoose.model('NoteModel', NoteSchema);

NoteModel.findNotesForUser = findNotesForUser;
NoteModel.createNote = createNote;
NoteModel.deleteNote = deleteNote;
NoteModel.editNote = editNote;

function findNotesForUser(uid){
	return NoteModel.find({developerId: uid});
}

function createNote(note) {
	return NoteModel.create(note);
}

function deleteNote(noteId) {
	return NoteModel.remove({_id:noteId});
}

function editNote(edit) {
	return NoteModel.edit(edit);
}
module.exports = NoteModel;