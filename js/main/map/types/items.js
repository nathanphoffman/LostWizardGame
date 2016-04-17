module.exports = {

  items: null,

  begin: function(events){
    events.create(function(main){
      this.items = main.game.add.physicsGroup();
    }.bind(this));
  },

  render: function(pattern,events){
    events.create(function(main){
      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){
        var item = this.items.create(
          32*(i+pattern.start),
          32*pattern.row,
          'spritesheet',pattern.num-1);

          // setup item logic for this item
          require('./items/itemHandler.js')(item,events,pattern.num);
      }

    }.bind(this));
  },

  complete: function(events){
    events.create(function(main){
      this.items.setAll('body.immovable', true);
    }.bind(this));
  }
};
