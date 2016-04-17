module.exports = function() {
    var music = [
      {audio: new Audio('./assets/music/battletheme.mp3'), length: 70},
      {audio: new Audio('./assets/music/maintheme1.mp3'), length: 92},
      {audio: new Audio('./assets/music/maintheme2.mp3'), length: 192}
    ];

    (function(){
      var randomPick = Math.ceil(Math.random()*3)-1;
      play(music[randomPick]);
    })();

    function play(song)
    {
      if(song.audio.currentTime) song.audio.currentTime = 0;
      song.audio.play();

      // Randomly begin cutting off between 5+1 and 5+10 seconds:
      var cutOff = song.length - 6;
      setTimeout(function(){
        dimAudio(song);
      },cutOff*1000)
    }

  function dimAudio(song){
    setTimeout(function(){
      song.audio.volume = song.audio.volume - .1;
      if(song.audio.volume > 0.2) dimAudio(song);
      else {
        song.audio.pause();
        beginMusic();
       }
    },500);
  }
};
