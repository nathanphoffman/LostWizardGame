var game = require('./game.js');
var map = require('./world/map.js');

module.exports = {

  preload: function(){
    map.preload();
    //load sounds here

  },

  create: function(){
    game.ref.stage.backgroundColor = '#85b5e1';
    map.create();
    //play spounds here

  },

  update: function(){

  }
}
