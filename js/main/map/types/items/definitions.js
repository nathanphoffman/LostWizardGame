/*
  Items are definitions for sprites 17-40:

  respawn - in milliseconds, time it takes for the item to respawn
  onPickup - function to execute when the item is picked up
  onRespawn - function to run when the item respawns

*/


module.exports = {

    // speed, track suit
    19: {
        respawn: 10000,
        onPickup: function(main) {
            main.state.player.movement.speed =
                main.state.player.movement.defaults.speedFast;
        },
        onRespawn: function(main) {
            main.state.player.movement.speed =
                main.state.player.movement.defaults.speed;
        }
    },

    // lil hoppy, - jump
    20: {
        respawn: 10000,
        onPickup: function(main) {
            main.state.player.movement.jump =
                main.state.player.movement.defaults.jumpFast;
        },
        onRespawn: function(main) {
            main.state.player.movement.jump =
                main.state.player.movement.defaults.jump;
        }
    },

    // blue key
    37: {
        doors: null,
        respawn: 10000,
        onPickup: function(main) {
            this.doors = main.refs.map.platforms.getSpriteMembers(4);
            this.doors.forEach(function(door) {
                door.hide();
            });
        },
        onRespawn: function(main) {
            this.doors.forEach(function(door) {
                door.reset();
            });
        }
    }

};
