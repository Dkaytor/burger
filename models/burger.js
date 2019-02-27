//links to retrieve information from other files
var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  insertOne: function (burger_name) {
    orm.insertOne("burgers", ["burger_name","devour"], [burger_name, false], function (res) {
    
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