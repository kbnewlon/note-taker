//Dependencies
//==============================
const express = require("express")

//Routes
//==============================
const htmlRoute = require("./routes/htmlRoutes.js");
const apiRoute = require("./routes/apiRoutes.js");


// Sets up the Express App
// =============================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up the Express App to allow access to public folder
//=============================
app.use(express.static("public"));
 
//Starts the server to begin listening 
//==============================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
