var game = require('./../game.js');

module.exports = {

  map: null,

  preload: function(){
    map.layers.forEach(function(layer){
      layer.name + '.png';
      game.ref.load.image(layer.name, 'assets/tilesets/' +
        layer.name + 'png');
    });
  },

  create: function(){
    console.log(this.map);
    game.ref.world.setBounds(0, 0,
      this.map.width*this.map.tilewidth,
      this.map.height*this.map.tileheight);

    var platforms = game.ref.add.physicsGroup();
    var mapArray = getMapArray();
    var trackIndex = 0;

    mapArray.forEach(function(row,rowIndex){
      row.forEach(function(cell,colIndex){
        processCell(cell,rowIndex,colIndex);
      });
    });

    function processCell(cell,rowIndex,colIndex){
      if(cell !== 0 && equalsNextCell(rowIndex,colIndex))
      {
        trackIndex++;
      }
      else if (cell !==0)
      {

      }
      else trackIndex = 0;
    }

    function equalsNextCell(rowIndex,colIndex)
    {
      if()
    }

      /*
      if(layer.name == 'platforms')
      {
        layer.data.forEach(function(tile){
          platforms.create(500, 150, 'platforms',tile);
        });
      }
      */


    platforms.setAll('body.immovable', true);

  },

  getMapArray: function(){

    var index = 0;
    var mapArray = [];

    this.map.layers.forEach(function(layer){
      while(index < layer.height)
      {
        index++;
        mapArray.push(layer.data.slice(index*layer.width,layer.width));
      }
    });

    return mapArray;
  }


};
