function mostrar()
{	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
//mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
	
	var edad;
	var estadoCivil;

	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt (edad);
	document.getElementById('estadoCivil').value = estadoCivil;

	if (edad<19 && estadoCivil != "soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}

}//FIN DE LA FUNCIÓN