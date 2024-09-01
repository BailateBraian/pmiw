//Braian Bailate / Comision 1 
// pmiw / tp1

let q = 18;
let dec = 24.7;
let s = 600;

function preload(){
 arte = loadImage("data/op_art.jpg");
 
}

function setup(){
  createCanvas(800,400);
  
}

function draw(){
  background(255);
  image(arte, 0, 0);
  redCircles();
  
  blueCircles(width/2, height/2-10, 0, 3, s, width/2);
  
  blueCircles(width/2, height, 0, height/2+5.5, s, width/2);
  
  blueCircles(width, height/2-10, 0, 3, width, s+5.5);
  
  blueCircles(width, height-10, height, height/2+5.5, width, s+5.5);
}

function mousePressed(){
  if (q>=8) {
   q-=2 
  }
  
  if (dec>=14.7) {
   dec-=3 
  }
}

function keyPressed(){
  if (key == 'z') {
    q = 18;
    dec = 24.7;
  } 
}

function redCircles(){
 for(let c = width / 2 + 3; c<=width - 10; c +=dec) {
  for(let d = 5.5; d <=height-10; d +=dec) {
    noStroke();
    fill(255, 0, 0);
    ellipse(c +q / 2, d + q/2, q, q);
  }
 }
}

function blueCircles( x1, y1, z1, a1, b1, c1){
 for(let c = c1; c <= b1 - 10; c+= dec) {
  for(let d = a1; d<= y1; d+= dec) {
   let distan = dist( mouseX, mouseY, s, 200);
   let tono = distan*255/dist(s, 200, x1, z1);
   
   noStroke();
   fill(0, 0, 255, tono);
   ellipse(c+q/2, d+q/2, q, q);
  }
 } 
}
