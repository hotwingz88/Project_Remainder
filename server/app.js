module.exports = function(app) {
    require("./services/user.service.server.js")(app);
    require("./services/note.service.server.js")(app);
}