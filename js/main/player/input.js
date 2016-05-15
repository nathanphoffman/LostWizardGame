
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
  update: function(main,player){
    //console.log(events.jump.pressed);

    if(this.events.isRightDown()) player.physics.setVelocity(main.state.player.movement.speed);
    else if(this.events.isLeftDown()) player.physics.setVelocity(-1*main.state.player.movement.speed);
    
    if(this.events.isJumpDown() && player.phaser.body.touching.down)
      {
        player.physics.setVelocity(null,-1*main.state.player.movement.jump);
      }
  }
};
