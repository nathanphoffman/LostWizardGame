var game = require('./../game.js');
var player = require('./../player.js');
var world = require('./../world.js');

module.exports = function(){
  game.ref.physics.arcade.collide(player.ref, world.platforms);
  //game.ref.
}
