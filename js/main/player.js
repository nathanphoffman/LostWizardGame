
module.exports = function(events){


  events.preload(preload);
  events.create(create);
  events.update(update);

  function preload(main){
    var game = main.game;
  }

  function create(main){

    var input = require('./player/input.js');
    input.create(main.game);

    var game = main.game;
    //var player = game.add.sprite(100, 200, 'spritesheet',48);
    var player = new main.engine.sprite(100,200,48);
    player.physics.enable({isPlayer: true});
    // this is all of our camera logic to follow the player around
    main.refs.player = player;
  }

  function update(main){
    var player = main.refs.player;
    
    // Collision detection must occur first in the update chain
    // otherwise it can cause some very weird bugs 
    // such as stuck collision inside of tiles
    player.physics.collideWithGroup(main.refs.map.platforms);

    player.physics.setVelocity(0);

    var input = require('./player/input.js');
    input.update(main,player);

  }
};
