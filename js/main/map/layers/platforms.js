module.exports = {

  platforms: null,

  begin: function(main){
    this.platforms = main.game.add.physicsGroup();
  },

  render: function(pattern){
    var loops = (pattern.end - pattern.start) + 1;

    for(var i = 0; i < loops; i++){
      this.platforms.create(
        32*(i+pattern.start),
        32*pattern.row,
        'platforms',pattern.num-1);
    }
  },

  complete: function(main){
    this.platforms.setAll('body.immovable', true);
    main.refs.map.platforms = this.platforms;
  }
};
