
var events = require('./events.js');

// these are initial values for state
module.exports = {
  player: {

    inventory: [],

    addItem: function(number){
      this.inventory.push({ number: number, time: Date.now() });

      events.runEvent('state',{
        message: 'player.inventory.add',
        inventory: this.inventory,
        number: number });
    },

    removeItem: function(number){
      this.inventory.forEach(function(item, index){
        if(item.number == number) this.inventory.splice(index,1);
      }.bind(this));

      events.runEvent('state',{
        message: 'player.inventory.remove',
        inventory: this.inventory,
        number: number });
    },

    stats: {
      health: 100,
      armor: 0,
      attack: 0
    },

    movement: {
      speed: 100,
      jump: 100
    }

  },

  level: 1

};
