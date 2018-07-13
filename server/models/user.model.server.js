var mongoose = require('mongoose');
var UserSchema = require('./user/user.schema.server.js');
var UserModel = user.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCreadentials = findUserByCreadentials;
Usermodel.updateUser = updateUser;
Usermodel.deleteUser = deleteUser;

function createUser(user){
	return UserModel.create(user);
}

function findUserById(uid){
	return UserModel.findById(uid);
}

function findUserByUsername(username){
	return UserModel.findOne({username});
}

function findUserByCreadentials(username, password) {
	return UserModel.findOne({username, password});
}


function updateUser(uid, user) {
	return UserModel.update(uid, user);
}


function deleteUser(uid) {
	return UserModel.update(uid);
}