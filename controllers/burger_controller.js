//setting up dependencies for express
var express = require("express");

var router = express.Router();

//Import the model to use its database set up
var burger = require("../models/burger.js");

// Create all required routes and set up logic
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devour"
  ], [
    req.body.name, req.body.devour
  ], function(result) {
    res.json({ id: result.insertId});
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition ", condition);

  burger.updateOne({
    devour: req.body.devour
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Making this function accessible to other files
module.exports = router;
    