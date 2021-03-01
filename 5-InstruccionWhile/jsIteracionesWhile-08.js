/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaPositivos;//hay que inicializarlo
	var multiplicaNegativos;//hay que inicializarlo
	sumaPositivos = 0; // el 0 es el elemento nulo con respecto a la suma
	multiplicaNegativos = 1; //porque si se multiplica por cero da cero, el 1
	//es el elemento nulo con respecto al producto
	respuesta = 'si';

	

	while (respuesta == 'si')
	{
		numeroIngresado = prompt("Ingrese un número.");
		numeroIngresado = parseInt(numeroIngresado);
		
		while (numeroIngresado == 0)
		{
			numeroIngresado = prompt("Error! Reingrese número.");
			numeroIngresado = parseInt (numeroIngresado);
		}

		if (numeroIngresado<0)
		{	
			multiplicaNegativos = multiplicaNegativos * numeroIngresado;
		} else {
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		respuesta = prompt ("Desea ingresar otro número?");
	} 

	document.getElementById('txtIdProducto').value = multiplicaNegativos;
	document.getElementById('txtIdSuma').value = sumaPositivos;

}//FIN DE LA FUNCIÓN

/* DO WHILE ES

DO 
{
	
	
	
	
}
WHILE (CONDICION); */