//setting up dependencies for express
var express = require("express");

//setting up port to use
var PORT = process.env.PORT || 3000;

//setting app to use as express
var app = express();

//Telling the program where the static files are
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