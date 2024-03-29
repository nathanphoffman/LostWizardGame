module.exports = function(map,events){

 (function(){

      // This figures out how to render the sprites
      var renderer = require('./renderer.js');

      // Now for every layer type we execute our render function
      var layers = getMapLayers();
      renderer.begin(events);

      Object.keys(layers).forEach(function(key){
          useArrayPattern(layers[key],function(pattern){
            // the key here is passed for the spritesheet name
            renderer.render(pattern,events);
          });
      });

      renderer.complete(events);
  })();

      // This turns a single long array into sliced rows based on the map width
    function getMapLayers(){

      var mapArray = [];

      map.layers.forEach(function(layer){
        var index = 0;
        mapArray[layer.name] = [];
        while(index < layer.height)
        {
          mapArray[layer.name].push(layer.data.slice(index*layer.width,++index*layer.width));
        }
      });

      return mapArray;
    }

    // this takes in a multidimensional array and returns an array of objects...
    // ...that describe the occurences of the elements within the array grouped into blocks
    // ...this is used by our map to draw collision boundries and trigger other events
    function useArrayPattern(jaggedArray,fn){
      // We will put all non 0 values into an array of objects with their values and locations
      jaggedArray.forEach(function(innerArray,outerIndex){
        //if(result !== undefined) result.num = 0;
        innerArray.reduce((result,num,index,arr)=>{
          var notLast = index !== innerArray.length-1;
          if(result.num === num && notLast)
          {
            return result;
          }
          else
          {
            if(result.num !== 0)
            {
              fn({
                row: outerIndex,
                num: result.num,
                start: result.start,
                end: notLast ? index-1 : index
              });
            }
            return{ num: num, start: index };
          }
        },{num: 0, start: 0 });
      });
    }
};
