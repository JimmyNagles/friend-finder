
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/appointments", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.hmlt"));
  });

 
};