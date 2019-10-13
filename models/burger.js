var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        //selects the table... DUH 
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
}

module.exports = burger;

//check cats.js under 10.8 class catsapp
