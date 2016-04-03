base = {

  ref: null,

  initialize: function(){
      var input = require('./input.js');
      var player = require('./player.js');
      var world = require('./world.js');

      this.ref = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', {
        preload: function(){
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
module.exports = base;
