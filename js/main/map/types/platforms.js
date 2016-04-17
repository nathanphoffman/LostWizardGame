module.exports = {

  platforms: null,

  begin: function(events){
    events.create(function(main){
      this.platforms = main.game.add.physicsGroup();
    }.bind(this));
  },

  render: function(pattern,events){
    events.create(function(main){
      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){
        this.platforms.create(
          32*(i+pattern.start),
          32*pattern.row,
          'spritesheet',pattern.num-1);
      }
    }.bind(this));
  },

  complete: function(events){
    events.create(function(main){
      this.platforms.setAll('body.immovable', true);
      main.refs.map.platforms = this.platforms;
    }.bind(this));
  }
};
