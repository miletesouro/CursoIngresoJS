function mostrar()
{
	var edad;
	//var resultado;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt (edad);

	//resultado = edad == 15; //(true/false)

	//alert(resultado);

	/* 
	false = siempre es 0
	true = cualquier cosa que no sea false, generalmente se pone el 1
	*/

	//if(edad = 15) se le asigna a la variable edad el valor 15.

	/* cuando finalizas un if con un ; cortas el condicional, lo de abajo
	se va a seguir ejecutando. */

	if(edad < 15)
	{
		alert("Niña bonita.");
	}


}//FIN DE LA FUNCIÓN