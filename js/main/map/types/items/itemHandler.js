module.exports = function(item,events,spriteNumber){

  var state = require('state');
  var itemDefinition = require('./definitions.js')[spriteNumber];

    var guid = events.update(function(main){
      var intersects = main.game.physics.arcade.intersects(item, main.refs.player);
      if(intersects) itemPickup(main);
    });

  function itemPickup(main){
    item.kill();
    events.disable('update',guid); // no reason to run any intersect logic since we are killing the sprite

    state.player.addItem(spriteNumber);
    itemDefinition.onPickup && itemDefinition.onPickup();

    setTimeout(function(){
      itemRespawn();
    },itemDefinition.respawn || 5000);
  }

  function itemRespawn(){
    state.player.removeItem(spriteNumber);
    itemDefinition.onRespawn && itemDefinition.onRespawn();
    item.reset(item.x,item.y);
    events.enable('update',guid);
  }

};
