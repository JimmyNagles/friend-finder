
var path = require("path");




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"));
  });
  

 
};