//setting up dependencies for express
var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes to be used
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use(routes);


//set up port to listen

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });