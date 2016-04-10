

module.exports = function(events){

  var map = require('./map/load.js')();

  events.preload(preload);
  events.create(create);

  // We load all of the tilesets by name in the tiled export
  function preload(main){
    var game = main.game;
    map.layers.forEach(function(layer){
      layer.name + '.png';
      game.load.spritesheet(layer.name, 'assets/tilesets/' +
        layer.name + '.png',32,32);
    });
  }

   function create(main){
     var game = main.game;

     // This makes it so our player can't venture off infinitely beyond our map size
     game.world.setBounds(0, 0,
     map.width*map.tilewidth,
     map.height*map.tileheight);

     // This renders all of the sprites and determines what type of logic/physics for each one
      require('./map/generate.js')(main,map);
  }
};
