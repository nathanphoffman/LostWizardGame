var keyboard = require('./../input/keyboard.js');
var game = require('./../game.js');
var player = require('./../player.js');
var world = require('./../world.js');

module.exports = function(){
  player.initialize();
  world.initialize();
  keyboard.initialize();
};
