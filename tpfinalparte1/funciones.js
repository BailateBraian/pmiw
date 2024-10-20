function preload() {
  for (let i = 0; i < 10; i++) {
    fondos[i] = loadImage("data/fondo" + i + ".jpg");
  }}

function mousePressed() {
  if (estado === "inicio") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "primera";
    }} 
    else if (estado === "primera") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "segunda";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "inicio";
    }} 
    else if (estado === "segunda") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio2";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "primera";
    }} 
    else if (estado === "inicio2") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "tercera";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "cuarta";
    }}
    else if (estado === "tercera") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio2";
    }} 
    else if (estado === "cuarta") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "quinta";
    }} 
    else if (estado === "quinta") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio3";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "cuarta";
    }} 
    else if (estado === "inicio3") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "sexta";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "septima";
    }} 
    else if (estado === "sexta") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio3"; 
    }} 
    else if (estado === "septima") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio4";
    }} 
    else if (estado === "inicio4") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "octava";
    }
    if (detectarBoton(555, height - 100, 70, 50)) {
      estado = "novena";
    }} 
    else if (estado === "octava") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio4";
    }} 
    else if (estado === "novena") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio5";
    }} 
    else if (estado === "inicio5") {
    if (detectarBoton(555, 50, 70, 50)) {
      estado = "inicio";
    }}}


function cargarPantallas() {
  if (estado === "inicio") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "primera") {
    cargaOtroFondo(fondos[1], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "segunda") {
    cargaOtroFondo(fondos[2], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "inicio2") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "tercera") {
    cargaOtroFondo(fondos[3], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "cuarta") {
    cargaOtroFondo(fondos[4], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "quinta") {
    cargaOtroFondo(fondos[5], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "inicio3") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "sexta") {
    cargaOtroFondo(fondos[6], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "septima") {
    cargaOtroFondo(fondos[7], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "inicio4") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
    dibujarBoton(555, height - 100, 70, 50);
  } else if (estado === "octava") {
    cargaOtroFondo(fondos[8], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50);
  } else if (estado === "novena") {
    cargaOtroFondo(fondos[9], 0, 0, width - 100, height);
    dibujarBoton(555, 50, 70, 50); 
  } else if (estado === "inicio5") {
    cargaOtroFondo(fondos[0], 0, 0, width - 100, height); 
    dibujarBoton(555, 50, 70, 50); 
  }}
  
  function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}


function cargaFondos(imag, index, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag[index], x, y, ancho, alto);
}


function cargaOtroFondo(imag, x, y, ancho, alto, alinea) {
  imageMode(alinea);
  image(imag, x, y, ancho, alto);
}


function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(180, 150, 100);
  } else {
    fill(149, 126, 97);
  }
  rect(px, py, pan, pal, pal / 4);
}
