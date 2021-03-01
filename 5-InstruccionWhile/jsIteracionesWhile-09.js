/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	//iniciar variables
	banderaDelPrimero="es el primero"; //variable que sirve para saber 
	//si dentro del flujo del programa se cumplio o no una funcion. 
	//Se va a utilizar para saber si el numero que ingrese dentro del while, es 
	//el primer numero ingresado. 
	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado = prompt ("Ingrese un número:");
		numeroIngresado = parseInt (numeroIngresado);

		if(banderaDelPrimero == "es el primero") //es el primer num ingresado
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;

			banderaDelPrimero = "no es el primer numero";
		} else {
		if (numeroIngresado>numeroMaximo)
		{	
			numeroMaximo = numeroIngresado;
		} else {(numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
		}}
	}
		/*if((banderaDelPrimero == "es el primero") || (numeroIngresado > numeroMaximo))
		{
			numeroIngresado = numeroMaximo;
		}
		if ((banderaDelPrimero == "es el primero") || (numeroIngresado < numeroMinimo))
		{
			numeroIngresado = numeroMinimo;
		}
		
		banderaDelPrimero == "no es el primer numero";*/

		respuesta = prompt("Desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN