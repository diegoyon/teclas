let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);
let cuadro = document.getElementById("area_de_dibujo");
let papel = cuadro.getContext("2d");

dibujarLinea("red", 100, 100, 200,200, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento){


  switch(evento.keyCode){
    case teclas.UP:
      console.log("arriba");
      break;
    
    case teclas.DOWN:
      console.log("abajo");
      break;

    case teclas.LEFT:
      console.log("izquierda");
      break;

    case teclas.RIGHT:
      console.log("derecha");
      break;

    default:
      console.log("otra tecla");
      break;
  }


}