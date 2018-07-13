module.exports = function(app) {
var note = [
	{_id:"789", User_id:"Mr.Stein", message:"go MIT on Monday"},
	{_id:"121", User_id:"Mr.Eidison", message:"Job rebuild on Thursday"}
];

app.get('/api/user/:uid', findUserById);


function findUserById(res){
	// var uid = res.params['uid'];
	// var user = selectUserByid(uid);
	// res.
}
}