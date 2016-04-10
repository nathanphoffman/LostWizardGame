module.exports = function(){

  var map = null;

  var $ = require('jquery');
  $.ajax({ url: "/assets/map.json", async: false})
    .done(function( data ) {
      map = data;
    }.bind(this));

  return map;

};
