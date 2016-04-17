module.exports = {
  begin: function(){

  },
  render: function(pattern, events){

    events.create(function(main){
      var loops = (pattern.end - pattern.start) + 1;

      for(var i = 0; i < loops; i++){

        main.game.add.sprite(
          32*(i+pattern.start),
          32*pattern.row,
          'spritesheet',pattern.num-1);
      }
    }.bind(this));
  },
  complete: function(){

  }
};
