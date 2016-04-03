var game = require('./game.js');
var player = require('./player.js');
var keyboard = require('./input/keyboard.js');

var base = {

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

    if(base.events.isRightDown()) player.ref.body.velocity.x = 300;
    else if(base.events.isLeftDown()) player.ref.body.velocity.x = -300;

    if(base.events.isJumpDown() && (player.ref.body.onFloor() || player.ref.body.touching.down))
      player.ref.body.velocity.y = -300;

  }

};
module.exports = base;
