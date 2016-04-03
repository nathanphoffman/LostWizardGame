var game = require('./../game.js');

module.exports = {
  initialize: function(events){

    //w, space, up-arrow
    var jumpKeys = getKeys([87,32,38]);
    events.isJumpDown = function() { return ifKeyDown(jumpKeys); }

    // d and right-arrow
    var rightKeys = getKeys([68,39]);
    events.isRightDown = function() { return ifKeyDown(rightKeys); }
    //a and left arrow

    var leftKeys = getKeys([65,37]);
    events.isLeftDown = function() { return ifKeyDown(leftKeys); }

    return events;

    function getKeys(keyCodes){
      var arr = [];
      keyCodes.forEach(function(keyCode){
        arr.push(game.ref.input.keyboard.addKey(keyCode));
      });
      return arr;
    }

    function ifKeyDown(keys)
    {
      var pressed = false;
      keys.forEach(function(key){
        if(key.isDown) pressed = true;
      });

      return pressed;
    }
  }
};
