module.exports = function(item,events,spriteNumber){

    var guid = events.update(function(main){
      var intersects = main.game.physics.arcade.intersects(item, main.refs.player);
      if(intersects) itemPickup(main);
    });

  function itemPickup(main){
    console.log('touched item!');
    item.kill();
    events.disable('update',guid);

    setTimeout(function(){
      itemRespawn();
    },10000);
  }

  function itemExpiration(){

  }

  function itemRespawn(){
    item.reset(item.x,item.y);
    events.enable('update',guid);
  }

};
