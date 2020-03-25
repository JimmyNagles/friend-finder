const path = require("path");
const express = require('express');
const app = express();
const PORT = 3000;




app.use(express.static('public'));



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routing/apiRoutes')(app);
require("./routing/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log('App listening on port', PORT);
})
