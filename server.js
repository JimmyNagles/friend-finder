const express = require("express");
const path = require("path");

const PORT =  3000;
const app = express();

require("./app/routing/htmlRoutes.js")(app);




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port `,PORT);
});
