
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
    var player = game.add.sprite(100, 200, 'spritesheet',48);

    // Physics on player:
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    // this is all of our camera logic to follow the player around
    game.camera.follow(player);
    main.refs.player = player;
  }

  function update(main){
    var player = main.refs.player;
    var platforms = main.refs.map.platforms;

    player.body.velocity.x = 0;
    main.game.physics.arcade.collide(player, platforms);

    var input = require('./player/input.js');
    input.update(main.game,player);

  }
};
