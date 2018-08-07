module.exports = function(app) {
  var bcrypt = require("bcrypt-nodejs");
  var userModel = require('../models/user.model.server.js')

  var passport = require('passport');
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);

  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy(localStrategy));

  function localStrategy(username, password, done) {
      userModel.findUserByUsername(username).then(
        (user) => {
          if(user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      )
  }      

  //     userModel.findUserByCredentials(username, password).then(
  //         (user) => {
  //             if(user && bcrypt.compareSync(password, user.password)) {
  //                 return done(null, user);
  //             } else {
  //                 return done(null, false);

  //             }
  //         }
  //     )
  // }

      
    
   

  //     var users = [
  //   {_id:"123",username: "Mr.Wang", password: "Wang", firstName: "Shiyu", lastName: "Wang"},
  //   {_id:"234",username: "Mr.Rose", password: "Rose", firstName: "Chris", lastName: "Rose"},
  //   {_id:"567",username: "Ms.Alice", password: "Wonder", firstName: "Alice", lastName: "Wonder"},
  //   {_id:"891",username: "Mr.Bob", password: "Marley", firstName: "Bob", lastName: "Marley"},
  //   {_id:"112", username: "Mr.Dillan", password: "Dillan", firstName: "Dillan", lastName: "Pickle"},
  //   {_id:"113", username: "Mr.Bill", password: "Strange", firstName: "Bill", lastName: "Cipher"},
  //   {_id:"114", username: "Rodney", password: "Rod", firstName: "Rodney", lastName: "Hotrod"},
  //   {_id:"245", username: "Mr.Clinton", password: "Bill", firstName: "Bill", lastName: "Clinton"},
  //   {_id:"356", username: "Mr.Carrot", password: "Top", firstName: "Carrot", lastName: "Top"},
  //   {_id:"465", username: "Mr.Rabbit", password: "Peter", firstName: "Peter", lastName: "Rabbit"}
  // ];  

  app.get('/api/user', findUser);
  app.get('/api/user/:uid', findUserById);
  app.post("/api/user", createUser);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/:uid', deleteUser);
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedin);


  function loggedin(req, res) {
    console.log('loggedin');
          if(req.isAuthenticated()) {
            res.send(req.user);
        } else {
            res.send("0");
        }
  }

 
 function logout(req, res) {
          req.logOut();
          res.sendStatus(200);
      }


  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
      
      userModel.findUserById(user._id).then(
              function(user){
                  done(null, user);
              },
              function(err){
                  done(err, null);
              }
      );
  }

  function login(req, res) {
          var user = req.user;
          res.json(user);
  }
  
  function register (req, res) {
          var user = req.body;
          user.password = bcrypt.hashSync(user.password);

          userModel.createUser(user).then(
                function(user){
                    req.login(user, function(err) {
                       res.json(user);
                    });
                }
          );
  }

  // find user by given id
  function findUserById(req, res){
      var uid = req.params["uid"];
      userModel.findUserById(uid).then(
        data => {
            res.json(data);
        }
      )
  }


  function findUser(req, res){
      const username = req.query['username'];
      const password = req.query['password'];
      
      // find user by credentials
    if(username && password) {
        userModel.findUserByCreadentials(username, password).then(
              data => {
                   res.json(data);
              }
        );
        return;
        }
        // find user by username
        if(username) {
          userModel.findUserByUsername(username).then(
            data => {
              res.json(data);
            }
          );
          return;
        }
        res.json(null);  
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
      userModel.updateUser(uid, user).then(
          data => {
            res.json(data);
          }
      );
    }

    function deleteUser(req, res) {
    var uid = req.params["uid"];
    userModel.deleteUser(uid).then(
        data => {
          res.json(data);
        }
    );
  }
}