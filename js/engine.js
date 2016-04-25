
// game is the phaser object
module.exports = function(game) {

  var base = {

    loadSpriteSheet: function(img,width,height){
      game.load.spritesheet('spritesheet', img, width, height);
    },

    sprite: function(x,y,frame){

      this.phaser = game.add.sprite(x, y, 'spritesheet', frame);

      this.hide = function(){
        this.phaser.kill();
      }

      this.remove = function(){
        this.phaser.destroy();
      }

      this.physics = {

        enableCollision: function(){
          game.physics.enable(base.phaser.body);
          base.phaser.body.immovable = true;
        },

        collideWithWorldBounds: function(){
          base.phaser.body.collideWorldBounds = true;
        }

        setGravity: function(force){
          base.phaser.body.gravity.y = force;
        }

        setCollisionWith: function(body){
          game.physics.arcade.collide(base.phaser.body,
            body.phaser.body);
        }
      };

    },



  };

  return base;

};
