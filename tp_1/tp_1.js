let idle = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let currentI = 0;

let run = [0, 1, 2, 3, 4, 5];
let currentR = 0;

let jump = [0, 1, 2, 3, 4];
let currentJ = 0;

let fall = [0, 1, 2];
let currentF = 0;

//---------------------------------------------------//

let krAct = 1;
let krTime = 0;
let x = 35;
let y = 290;

let imgX1 = 270;
let imgX2 = -100;
let imgX3 = -100;
let imgX4 = -200;
let imgX5 = 1720;

let imgY = -600;
let imgY1 = 285;
let imgY2 = 250;
let imgY3 = 360;
let imgY4 = 400;
let imgY5 = 400;


let fondo1, fondo2, fondo3, fondo4, fondo5, fondo6, menu;

let sfxDash, sfxJump, sfxSel, sunsetM;


function preload() {
  
  fondo1 = loadImage('data/fondo1.png');
  fondo2 = loadImage('data/fondo2.png');
  fondo3 = loadImage('data/fondo3.png');
  fondo4 = loadImage('data/fondo4.png');
  fondo5 = loadImage('data/fondo5.png');
  fondo6 = loadImage('data/fondo6.png');
  menu = loadImage('data/menu.png');

  ciclosFor();
   
   sfxDash = loadSound('data/dash.wav');
   sfxJump = loadSound('data/jump.wav');
   sfxSel = loadSound('data/select.wav');
   sunsetM = loadSound('data/sunset.mp3');
}

function setup() {
   createCanvas(800, 600);
   noSmooth();
   frameRate(9);
   
   sunsetM.setVolume(0.4);
   sunsetM.loop();
   
   reset();
}


function draw() {
  
  image(fondo1, 0, imgY, width * 2, height * 2);
  image(fondo2, imgX1, imgY1, 220, 100);
  image(fondo3, imgX2, imgY2, width * 2.3, 120);
  image(fondo4, imgX3, imgY3, width * 4, 400);
  
  animaciones();
  
  image(fondo5, imgX4, imgY4, width * 2, height / 1.5);
  image(fondo6, imgX5, imgY5, width * 2, height / 1.5);
  
  if(x >= 1200){
  image(menu, 250, 175, 350, 150)
  }
}

function keyPressed(){  //recomiendo que presione "R" al inicio (para que los audios funcionen correctamente)
  if (key === 'r' || key === 'R') {
    sfxSel.play();
     reset();
   }
}
