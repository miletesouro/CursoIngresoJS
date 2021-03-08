/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroInicial
var numeroFinal;
var numeroIngresado;

numeroInicial = 1;
numeroFinal = 100;
contadorIntentos = 1;

function comenzar()
{
  numeroSecreto = Math.floor((Math.random() * numeroInicial) + numeroFinal);
}

function verificar()
{
  
  if (numeroIngresado != numeroSecreto)
  {
    document.getElementById('txtIdIntentos').value = "Usted es un ganador y en solo " + contadorIntentos + " intentos!!";
  } else {
    if (numeroIngresado>numeroSecreto)
    {
      document.getElementById('txtIdIntentos').value = "No es ganador, el numero es menor. Va por " + contadorIntentos + " intentos, suerte!!";
    } else {
      document.getElementById('txtIdIntentos').value = "No es ganador, el numero es mayor. Va por " + contadorIntentos + " intentos, suerte!!";
    }
    contadorIntentos = contadorIntentos + 1;
  }
	
}