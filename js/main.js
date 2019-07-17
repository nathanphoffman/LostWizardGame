module.exports = {

  _initialize: function(mapData){

    var main = { game: null, state: require('./state.js'),
      refs: {
        map: {},
        items: {},
        player: {}
      },
      engine: null
    };

    var events = require('./events.js');
    var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser', {
      preload: function(){

        main.engine = require('./engine.js')(game);
        main.game = game;
        // this is the only spritesheet we use for the entire game:
        main.engine.loadSpriteSheet('./assets/tilesets/spritesheet.png',32,32);

        require('./main/player.js')(events);
        require('./main/map.js')(events);

        events.runEvent('preload',main);
      },
      create: function(){

        var engine = require('./engine.js')(game);
        game.stage.backgroundColor = '#85b5e1';
        events.runEvent('create',main);
      },
      update: function(){
        events.runEvent('update',main);
      }
    });


  }
};
