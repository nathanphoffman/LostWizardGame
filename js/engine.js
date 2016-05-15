
// game is the phaser object
module.exports = function(game) {

  var base = {

    loadSpriteSheet: function(img,width,height){
      game.load.spritesheet('spritesheet', img, width, height);
    },
    
    // wrapper for phaser physics group
    group: function(){
       this.members = [];
       this.phaser = null;
       this.add = function(member){
           this.members.push(member);
       }
       
       // this enables physics on the group level
       // there are inefficiencies with phaser unless we allow this
       this.enablePhysics = function(){
           this.phaser = game.add.physicsGroup();
           
           this.members.forEach(function(member){
               this.phaser.add(member.phaser);
           }.bind(this));
       }
       
       // get sprite members of the group by an image frame
       this.getSpriteMembers = function(frame)
       {
           var results = [];
           this.members.forEach(function(member){
               if(member.frame == frame) results.push(member);
           });
           
           return results;
       }
       
       this.makeImmovable = function(){
           this.phaser.setAll('body.immovable', true);
       }
    },

    // wrapper for phaser sprite
    sprite: function(x,y,frame){
      this.frame = frame;
      this.x = x;
      this.y = y;
      this.phaser = game.add.sprite(x, y, 'spritesheet', frame);

      this.hide = function(){
        this.phaser.kill();
      }

      this.reset = function(){
          this.phaser.reset(this.phaser.x,this.phaser.y);
      }

      this.remove = function(){
        this.phaser.destroy();
      }

      this.physics = new(function(_this){
          
        this.sprite = _this.phaser;

        this.enable = function(config){
          game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
          if(config && config.isPlayer)
          {
            game.camera.follow(this.sprite);
            this.sprite.body.collideWorldBounds = true;
            this.setGravity(500);
          }
        }

        this.enableCollision = function(){
          this.sprite.body.immovable = true;
        }

        this.setGravity = function(force){
          this.sprite.body.gravity.y = force;
        }

        this.collideWithSprite = function(spriteObj){
          game.physics.arcade.collide(this.sprite,spriteObj.phaser);
        }
        
         this.collideWithGroup = function(groupObj){
          game.physics.arcade.collide(this.sprite,groupObj.phaser);
        }
        
        this.isTouching = function(spriteObj){
            return game.physics.arcade.intersects(this.sprite.body, spriteObj.phaser.body)
        }

        this.setVelocity = function(x,y)
        {
          if(x !== undefined && x !== null) this.sprite.body.velocity.x = x;
          if(y !== undefined && y !== null) this.sprite.body.velocity.y = y;
        }

      })(this);

    }



  };

  return base;

};
