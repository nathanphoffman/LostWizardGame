var world = require('./world.js');
var game = require('./game.js');

module.exports = {

  ref: null,

  preload: function(){
    game.ref.load.image('player', 'assets/tilesets/person.png');
  },

  update: function(){
    this.ref.body.velocity.x = 0;
    game.ref.physics.arcade.collide(this.ref, world.platforms);
  },

  create: function(){
    var game = require('./game.js');
    var player = game.ref.add.sprite(100, 200, 'player');

    // Physics on player:
    game.ref.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    // this is all of our camera logic to follow the player around
    game.ref.camera.follow(player);

    this.ref = player;
  }
};
