//links to retrieve information from other files
var orm = require("../config/orm.js");

//Set up of functions to work with SQL database
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (burger_name, cb) {
    orm.insertOne("burgers", ["burger_name","devour"], [burger_name, false], function (res) {
    cb(res);
    });
  },

  updateOne: function (id, cb) {
    var condition = "id=" + id;
    orm.updateOne("burgers", {devour: true}, condition, function (res) {
      cb(res);
      console.log(res);
    });
  }

};

// Making this function accessible to other files
module.exports = burger;