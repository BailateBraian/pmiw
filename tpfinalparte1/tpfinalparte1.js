let fondos = [];
let estado;


function setup() {
  createCanvas(640, 480);
  for (let i = 0; i < 10; i++) {
    fondos[i].resize(640, 480);
  }
  estado = "inicio";
}


function draw() {
  background(219, 195, 170);
  cargarPantallas();
  fill(222, 179, 72);
  textSize(25);
  text(estado, 440, 450);
}
