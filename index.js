$("body").keypress( function(event){
  playAudio(event.key);
  $(".key"+event.key).addClass("playing");
  setTimeout(function(){
    $(".key"+event.key).removeClass("playing");
  }, 100);
});

function playAudio(key) {
  switch (key) {
    case "a":
      var a = new Audio("sounds/clap.wav");
      a.play();
    break;
    case "s":
      var s = new Audio("sounds/hihat.wav");
      s.play();
    break;
    case "d":
      var d = new Audio("sounds/kick.wav");
      d.play();
    break;
    case "f":
      var f = new Audio("sounds/openhat.wav");
      f.play();
    break;
    case "g":
      var g = new Audio("sounds/boom.wav");
      g.play();
    break;
    case "h":
      var h = new Audio("sounds/ride.wav");
      h.play();
    break;
    case "j":
      var j = new Audio("sounds/snare.wav");
      j.play();
    break;
    case "k":
      var k = new Audio("sounds/tom.wav");
      k.play();
    break;
    case "l":
      var l = new Audio("sounds/tink.wav");
      l.play();
    break;
  }
}
