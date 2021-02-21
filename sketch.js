
let img;
let sound = [];
let animation;

function preload() {
  img =loadImage('assets/njE9b9i.jpg');
  sound[0] = loadSound('assets/Kick.wav');
  sound[1] = loadSound('assets/Clap.wav');
  sound[2] = loadSound('assets/Clock.wav');
  sound[3] = loadSound('assets/Breath.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(40);
  if(animation) {
    animation.draw();
  }
}

function keyTyped() {
  if(key == 'a') {
     sound[0].play();
    animation = new Anim_a();
  }
  if(key == 's') {
     sound[1].play();
    animation = new Anim_s();
  }
  if (key == 'd') {
    sound[2].play();
    animation = new Anim_d();
  }
  if (key == 'f') {
    sound[3].play();
    animation = new Anim_f();
  }

 
}