var mongoose = require ('mongoose');

var NoteSchema = mongoose.Schema({
    developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'note'},
	description: String,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'note'})

module.exports = NoteSchema;