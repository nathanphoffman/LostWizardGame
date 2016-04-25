// All we need to do is require game, it will load the rest for us
"use strict";
global.PIXI = require('pixi');
global.p2 = require('p2');
global.Phaser = require('phaser');

// this starts the background music:
//require('./js/music.js')();

var game = require('./js/main.js');
game._initialize();
