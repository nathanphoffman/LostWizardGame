var path = require('path');

var phaserModule = path.join(__dirname, '/node_modules/phaser/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

var state = path.join(__dirname, './js/state.js');

module.exports = {
  devtool: 'source-map',
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "./app/js/bundle.js"
    },
   resolve: {
       alias: {
           'phaser': phaser,
           'pixi': pixi,
           'p2': p2,
           'state': state // used for game state
       }
  }
};
