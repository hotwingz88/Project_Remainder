var User = require('user');

var UserSchema = user.UserSchema({
	username: String,
	password: String,
	email: String,
	gender: String,

}, {collection: 'user'})




module.exports = UserSchema;