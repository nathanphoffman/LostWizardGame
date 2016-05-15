module.exports = function(item,events,spriteNumber){

  var state = require('state');
  var itemDefinition = require('./definitions.js')[spriteNumber];

    var guid = events.update(function(main){
      if(item.physics.isTouching(main.refs.player)) itemPickup(main);
    });

  function itemPickup(main){
    item.hide();
    events.disable('update',guid); // no reason to run any intersect logic since we are killing the sprite

    state.player.addItem(spriteNumber);
    itemDefinition.onPickup && itemDefinition.onPickup(main);

    setTimeout(function(){
      itemRespawn(main);
    },itemDefinition.respawn || 5000);
  }

  function itemRespawn(main){
    state.player.removeItem(spriteNumber);
    itemDefinition.onRespawn && itemDefinition.onRespawn(main);
    item.reset();
    events.enable('update',guid);
  }

};
