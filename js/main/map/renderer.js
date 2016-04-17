module.exports = {
  layerTypes: [
    {
      typeObj: require('./types/platforms.js'),
      start: 1,
      end: 16,
      type: 'platforms'
    },
    {
      typeObj: require('./types/items.js'),
      start: 17,
      end: 40,
      type: 'items'
    },
    {
      typeObj: require('./types/characters.js'),
      start: 41,
      end: 48,
      type: 'characters'
    }
  ],

  begin: function(events){
    this.layerTypes.forEach(function(layerType){
      layerType.typeObj.begin && layerType.typeObj.begin(events);
    });
  },

  render: function(pattern,events){
    this.layerTypes.some(function(layerType){
      if(pattern.num >= layerType.start && pattern.num <= layerType.end)
      {
        layerType.typeObj.render && layerType.typeObj.render(pattern,events);
        return true;
      }
    });
  },

  complete: function(events){
    this.layerTypes.forEach(function(layerType){
      layerType.typeObj.complete && layerType.typeObj.complete(events);
    });
  }

};
