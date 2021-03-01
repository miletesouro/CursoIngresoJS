/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaDeNegativos;
	var sumaDePositivos;
	var cantidadDePositivos;
	var cantidadDeNegativos;
	var cantidadDeCeros;
	var cantidadDePares;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferencia;
	
	sumaDeNegativos = 0;
	sumaDePositivos = 0;
	cantidadDePositivos = 0;
	cantidadDeNegativos = 0;
	cantidadDeCeros = 0;
	cantidadDePares = 0;

	respuesta="si";

	while(respuesta=="si")
	{	numeroIngresado = prompt("Ingrese un numero:");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado>0)
		{
			sumaDePositivos = sumaDePositivos + numeroIngresado;
			cantidadDePositivos = cantidadDePositivos + 1;

			//sumaDePositivos += numeroIngresado;
		} else {
			if (numeroIngresado < 0)
			{
				sumaDeNegativos = sumaDeNegativos + numeroIngresado;
				cantidadDeNegativos = cantidadDeNegativos + 1;

			} else {
				cantidadDeCeros = cantidadDeCeros + 1;
			}
		}

		if(numeroIngresado%2==0)
		{
			cantidadDePares = cantidadDePares + 1;
		}

		
		respuesta=prompt("desea continuar?");
	}//fin del while
	
	if(cantidadDePositivos != 0) 
	{
		promedioDePositivos = sumaDePositivos / cantidadDePositivos;
	} else {
		alert("No se puede resolver el promedio, ya que no hay números ingresados.");
	}
	if(cantidadDeNegativos != 0)
	{
		promedioDeNegativos = sumaDeNegativos / cantidadDeNegativos;
	} else{
		alert("No se puede resolver el promedio, ya que no hay números ingresados.");
	}
	diferencia = sumaDePositivos - sumaDeNegativos;
	

	document.write("la suma de negativos es :"+ sumaDeNegativos + "<br>");
	document.write("la suma de los positivos es "+ sumaDePositivos + "<br>");
	document.write("la cantidad de positivos es "+ cantidadDePositivos + "<br>");
	document.write("la cantidad de negativos es "+ cantidadDeNegativos + "<br>");
	document.write("la cantidad de ceros es "+ cantidadDeCeros + "<br>");
	document.write("la cantidad de pares es "+ cantidadDePares + "<br>");
	document.write("el promedio de positivos es "+ promedioDePositivos + "<br>");
	document.write("el promedio de negativos es "+ promedioDeNegativos + "<br>");
	document.write("la diferencia entre positivos y negativos es "+ diferencia);
}//FIN DE LA FUNCIÓN