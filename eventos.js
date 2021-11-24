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


function empezarDibujo(){
  cuadro.addEventListener("mousemove", dibujarMouse);
}

function terminarDibujo(){
  cuadro.removeEventListener("mousemove", dibujarMouse);
}

function dibujarMouse(evento){
  console.log(evento);
  dibujarLinea("red", evento.layerX, evento.layerY, evento.layerX +2, evento.layerY +2, papel);
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