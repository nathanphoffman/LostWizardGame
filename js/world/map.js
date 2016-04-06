var game = require('./../game.js');
var arrays = require('./../helper/arrays.js');

module.exports = {

  map: null,
  platforms: null,

  preload: function(){
    this.map.layers.forEach(function(layer){
      layer.name + '.png';
      console.log(layer.name);
      game.ref.load.spritesheet(layer.name, 'assets/tilesets/' +
        layer.name + '.png',32,32);
    });

    game.ref.load.image('platform', 'assets/tilesets/platform.png');

  },

  create: function(){

    game.ref.world.setBounds(0, 0,
      this.map.width*this.map.tilewidth,
      this.map.height*this.map.tileheight);

    this.renderPlatforms();
  },

  renderPlatforms: function(){
    var platforms = game.ref.add.physicsGroup();
    var mapArray = this.getMapLayer('platforms');

    arrays.useArrayPattern(mapArray,function(pattern){

      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){

        platforms.create(
          32*(i+pattern.start),
          32*pattern.row,
          'platforms',pattern.num-1);

      }
    });

    platforms.setAll('body.immovable', true);
    this.platforms = platforms;
  },

  getMapLayer: function(layerName){
    var index = 0;
    var mapArray = [];
    this.map.layers.forEach(function(layer){
      while(index < layer.height)
      {
        if(layer.name == layerName) mapArray.push(layer.data.slice(index*layer.width,++index*layer.width));
      }
    });
    return mapArray;
  }


};
