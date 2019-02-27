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
  console.log(req.body);
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ],
    function(result) {
    res.json({ id: result.insertId});
    console.log(result);
  });
});

router.put("/api/burgers/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition ", condition);

  // burger.updateOne({
  //   devour: req.body.devour
  // }, condition, function(result) {
  //   console.log("controller check");
  //   if (result.changedRows == 0) {
  //     return res.status(404).end();
  //   } else {
  //     res.status(200).end();
  //   }
  // });

  burger.updateOne(req.params.id, function(result) {
    console.log(result)

    res.sendStatus(200);
  })
});

// Making this function accessible to other files
module.exports = router;
    