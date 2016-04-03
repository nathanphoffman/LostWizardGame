// All we need to do is require game, it will load the rest for us
global.PIXI = require('pixi');
global.p2 = require('p2');
global.Phaser = require('phaser');

var game = require('./js/game.js');
game.initialize();
