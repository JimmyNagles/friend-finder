const express = require("express");
const path = require("path");

const PORT =  3000;
const app = express();




app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port `,PORT);
});
