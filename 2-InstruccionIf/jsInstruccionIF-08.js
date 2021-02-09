function mostrar()
{
	//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero",
	// NO HACER NADA,pero si no es asi, y es soltero y no es menor, 
	//mostrar el siguiente mensaje: 'Es soltero y no es menor.'
	
	var edadPersona;
	var estadoCivilPersona;

	edadPersona = document.getElementById('txtIdEdad').value;
	edadPersona = parseInt (edadPersona);
	estadoCivilPersona = document.getElementById('estadoCivil').value;

	if (edadPersona>17 && estadoCivilPersona == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}


}//FIN DE LA FUNCIÓN