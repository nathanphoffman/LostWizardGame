module.exports = {
  ref: null,

  // we load the map first, then begin initializing the game
  initialize: function(){
    var $ = require('jquery');
    var map = require('./world/map.js');

    $.ajax({ url: "/assets/map.json"})
    .done(function( data ) {
      console.log(data);
      map.map = data;
      this.initializePhaser();
    }.bind(this));
  },

  initializePhaser: function(){
    var input = require('./input.js');
    var player = require('./player.js');
    var world = require('./world.js');

    this.ref = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', {
      preload: function(){
        // we load the data in world, since preload runs before create we store it in the world object
        world.preload();
        player.preload();
      },
      create: function(){
        world.create();
        player.create();
        input.create();

      },
      update: function(){
        world.update();
        player.update();
        input.update();
      }
    });
  }
};
