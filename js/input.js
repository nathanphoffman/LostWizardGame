var game = require('./game.js');
var player = require('./player.js');
var keyboard = require('./input/devices/keyboard.js');

module.exports = {

  events: {
    isRightDown: null,
    isLeftDown: null,
    isJumpDown: null
  },

  create: function(){
    // if we are using a desktop, I also want to add: controller + touch at some point
    this.events = keyboard.initialize(this.events);
  },

  // although not used yet, we will eventually check the state of inputs here:
  update: function(){
    //console.log(events.jump.pressed);

    if(this.events.isRightDown()) player.ref.body.velocity.x = 300;
    else if(this.events.isLeftDown()) player.ref.body.velocity.x = -300;

    if(this.events.isJumpDown() && (player.ref.body.onFloor() || player.ref.body.touching.down))
      player.ref.body.velocity.y = -300;

  }

};
