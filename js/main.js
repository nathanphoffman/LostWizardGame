module.exports = {

  _initialize: function(mapData){

    var main = { game: null, state: require('./state.js'),
      refs: {
        map: {},
        player: {}
      }
    };

    var events = require('./events.js');
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', {
      preload: function(){
        main.game = game;
        // this is the only spritesheet we use for the entire game:
        game.load.spritesheet('spritesheet', 'assets/tilesets/spritesheet.png',32,32);

        require('./main/map.js')(events);
        require('./main/player.js')(events);

        events.runEvent('preload',main);
      },
      create: function(){
        game.stage.backgroundColor = '#85b5e1';
        events.runEvent('create',main);
      },
      update: function(){
        events.runEvent('update',main);
      }
    });


  }
};
