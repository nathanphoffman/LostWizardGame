/*
  Items are definitions for sprites 17-40:

  respawn - in milliseconds, time it takes for the item to respawn
  onPickup - function to execute when the item is picked up
  onRespawn - function to run when the item respawns

*/


module.exports = {

  // speed, track suit
  19: {

  },

  // lil hoppy, - jump
  20: {

  },

  // blue key
  37: {
    respawn: 10000,
    onPickup: function(){

    },
    onRespawn: function(){
      console.log('respawn');
    }
  }

};
