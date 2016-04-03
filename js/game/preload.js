var game = require('./../game.js');

module.exports = function(){
    game.ref.stage.backgroundColor = '#85b5e1';
    game.ref.load.image('player', 'assets/person.png');
    game.ref.load.image('platform', 'assets/platform.png');
}
