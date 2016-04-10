
module.exports = {

  events: {
    isRightDown: null,
    isLeftDown: null,
    isJumpDown: null
  },

  create: function(game){
    var keyboard = require('./input/keyboard.js');
    // if we are using a desktop, I also want to add: controller + touch at some point
    this.events = keyboard.initialize(this.events,game);
  },

  // although not used yet, we will eventually check the state of inputs here:
  update: function(game,player){
    //console.log(events.jump.pressed);

    if(this.events.isRightDown()) player.body.velocity.x = 300;
    else if(this.events.isLeftDown()) player.body.velocity.x = -300;

    if(this.events.isJumpDown() && (player.body.onFloor() || player.body.touching.down))
      player.body.velocity.y = -300;
  }
};
