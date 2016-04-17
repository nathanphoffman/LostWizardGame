

module.exports = function(events){

  var map = require('./map/load.js')();
  events.create(createWorld);

  // This renders all of the sprites and determines what type of logic/physics for each one
  require('./map/generate.js')(map,events);

   function createWorld(main){

     var game = main.game;

     // This makes it so our player can't venture off infinitely beyond our map size
     game.world.setBounds(0, 0,
     map.width*map.tilewidth,
     map.height*map.tileheight);


  }
};
