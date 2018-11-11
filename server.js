// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port.

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(express.static("public"));


// Routes
require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
