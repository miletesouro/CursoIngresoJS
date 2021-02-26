/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
var numeroIngresado;

numeroIngresado = prompt ("Ingrese un numero entre 0 y 9 inclusive.");

while(numeroIngresado>9)
{
    numeroIngresado = prompt ("Error. Reingrese número entre 0 y 9 inclusive.");
}

document.getElementById('txtIdNumero').value = numeroIngresado;

}//FIN DE LA FUNCIÓN