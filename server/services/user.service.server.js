module.exports = function(app) {
	// var users = [
	// 	{_id:"123",username: "Mr.Wang", password: "Wang", firstName: "Shiyu", lastName: "Wang"},
	// 	{_id:"234",username: "Mr.Rose", password: "Rose", firstName: "Chris", lastName: "Rose"}
	// ];

	app.get('/api/user', findUser);
	app.get('/api/user/:uid', findUserById);
	app.post("/api/user", createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);


	function findUser(req, res){
			const username = req.query['username'];
			const password = req.query['password'];
			
			// find user by credentials
			if(username && password) {
				var user;
				for (let x = 0; x < users.length; x++)  {
	      			if (users[x].username === username && users[x].password === password) {  
	        			user = users[x]
	        			
	      		}	}
	      		res.json(user);
	      		return;
	      	}
	      	// find user by username
	      	if(username) {
	      		var user = users.find(function(user){
	      			return user.username === username;
	      		})
	      		res.json(user);
	      		return;
	      	}
	      	res.json(users);
			
		}
	
}
			// find user by given id
			function findUserById(req, res){
				var uid = req.params["uid"];
				var user = selectUserbyId(uid);
				res.json(user);
				for (let x = 0; x < users.length; x++) {
					if (users[x]._id === uid) {
						res.json(users[x]);
						return;
					}
				}
			}

			function createUser(req, res) {
				var user = req.body;
				userModel.createUser(user).then(
					(data) => {
						res.json(data);
					}
				)
			}

			function updateUser(req, res) {
				var uid = req.params['uid'];
				var user = req.body;
				var oldUser = selectUserbyId(uid);
				var index = users.indexOf(oldUser);
				users[index].username = user.username;
				users[index].password = user.password;
			}


			function deleteUser(req, res) {
				var uid = req.params["uid"];
				userModel.deleteUser(uid).then(
					data => {
						res.json(data);
					}

				);
			}