function mostrar()
{	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
//mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
	
	var edadPersona;
	var estadoCivilPersona;

	edadPersona = document.getElementById('txtIdEdad').value;
	edadPersona = parseInt (edadPersona);
	
	estadoCivilPersona = document.getElementById('estadoCivil').value

	if (edadPersona <18 && estadoCivilPersona != "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.")
	}

}//FIN DE LA FUNCIÓN