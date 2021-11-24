let teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento){
/*   if(evento.keyCode == teclas.UP){
    console.log('arriba')
  }

  if(evento.keyCode == teclas.DOWN){
    console.log('abajo')
  }

  if(evento.keyCode == teclas.RIGHT){
    console.log('derecha')
  }

  if(evento.keyCode == teclas.LEFT){
    console.log('izquierda')
  } */

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