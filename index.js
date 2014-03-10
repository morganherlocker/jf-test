var five = require("johnny-five"),
board, myServo;
board = new five.Board();
board.on("ready", function() {
  s1 = new five.Servo({
    pin: 8,
    range: [20, 160],
    startAt: 90, // if you would like the servo to immediately move to a degree
    center: false 
  });

  s2 = new five.Servo({
    pin: 4,
    range: [20, 160],
    startAt: 90, // if you would like the servo to immediately move to a degree
    center: false 
  });

  board.repl.inject({
    s1: s1,
    s2: s2
  });


  console.log('active')

  var left = function(){
    s1.min()
    s2.min()
    setTimeout(function(){
      s1.center()
      s2.center()
    },500)
  }
  var right = function(){
    s1.max()
    s2.max()
    setTimeout(function(){
      s1.center()
      s2.center()
    },500)
  }

  board.repl.inject({
    r: right,
    l: left
  });

  var k = 0
  for(var i = 0; i < 180; i++){
    this.wait(6 * i, function(){
      console.log(k)
      s1.to(k)
      s2.to(k)
      k++
    })
  }

});



