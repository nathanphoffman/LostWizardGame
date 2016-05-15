
var platformHandler = require('./platforms/platformHandler.js');

module.exports = {

  platforms: null,

  begin: function(events){
    
    events.preload(function(main){
      this.platforms = new main.engine.group();
    }.bind(this));
   
  },

  render: function(pattern,events){
    events.create(function(main){
       
      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){


        var platform = new main.engine.sprite(
          32*(i+pattern.start),
          32*pattern.row,
          pattern.num-1);
          
        this.platforms.add(platform);
        
      }
    }.bind(this));
  },

  complete: function(events){
        
    events.create(function(main){
      this.platforms.enablePhysics();
      this.platforms.makeImmovable();
      main.refs.map.platforms = this.platforms;
    }.bind(this));
    
  }
};
