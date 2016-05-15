module.exports = {

  items: null,

  begin: function(events){
    
    events.preload(function(main){
      this.items = new main.engine.group();
    }.bind(this));
   
  },

  render: function(pattern,events){
    events.create(function(main){
      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){
        var item = new main.engine.sprite(
          32*(i+pattern.start),
          32*pattern.row,
          pattern.num-1);

          item.physics.enable();
          item.physics.enableCollision();

          this.items.add(item);
          // setup item logic for this item
          require('./items/itemHandler.js')(item,events,pattern.num);
      }

    }.bind(this));
  },
  
  complete: function(events){
    events.create(function(main){
      main.refs.map.items = this.items;
    }.bind(this));
  }
  
};
