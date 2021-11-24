let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);

let cuadro = document.getElementById("area_de_dibujo");
let papel = cuadro.getContext("2d");
let x = 150;
let y = 150;

cuadro.addEventListener("mousedown", empezarDibujo);
cuadro.addEventListener("mouseup", terminarDibujo);


let xm = 0;
let ym = 0;
function empezarDibujo(evento){
  xm = evento.layerX;
  ym = evento.layerY;
  cuadro.addEventListener("mousemove", dibujarMouse);
}

function terminarDibujo(evento){
  cuadro.removeEventListener("mousemove", dibujarMouse);
}

function dibujarMouse(evento){
  dibujarLinea("red", xm, ym, evento.layerX , evento.layerY, papel);
  xm = evento.layerX;
  ym = evento.layerY;
}

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento){
  let colorcin = "blue";
  let distancia = 1;
  switch(evento.keyCode){
    case teclas.UP:
      dibujarLinea(colorcin, x, y, x, y - distancia, papel);
      y = y - distancia;
      break;
    
    case teclas.DOWN:
      dibujarLinea(colorcin, x, y, x, y + distancia, papel);
      y = y + distancia;
      break;

    case teclas.LEFT:
      dibujarLinea(colorcin, x, y, x - distancia, y, papel);
      x = x - distancia;
      break;

    case teclas.RIGHT:
      dibujarLinea(colorcin, x, y, x + distancia, y, papel);
      x = x + distancia;
      break;

    default:
      console.log("otra tecla");
      break;
  }


}