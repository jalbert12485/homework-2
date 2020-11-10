// Server.js - This file is the initial starting point for the Node/Express server.

// Dependencies
// =============================================================
const express = require("express");
const path=require("path");
const fs=require("fs");

// Sets up the Express App
// =============================================================
var app = express();
// Static directory to be served
app.use(express.static("public"));
var PORT = process.env.PORT || 8080;




// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================
require("./routes/html-routes.js")(app);


// Here we introduce HTML routing to serve different HTML files
// require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });
  