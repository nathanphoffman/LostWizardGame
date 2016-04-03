var game = require('./game.js');

module.exports = {

  platforms: null,

  create: function(){
    var platforms = game.ref.add.physicsGroup();
    platforms.create(500, 150, 'platform');
    platforms.create(-200, 300, 'platform');
    platforms.create(400, 450, 'platform');
    platforms.setAll('body.immovable', true);
    this.platforms = platforms;

    game.ref.world.setBounds(0, 0, 1920, 1920);

  },

  preload: function(){
    game.ref.stage.backgroundColor = '#85b5e1';
    game.ref.load.image('platform', 'assets/platform.png');
  },

  update: function(){

  }
}
