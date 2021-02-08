function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad 
	//(mas de 18 años) o adolescente (entre 13 y 17 años) o niño 
	//(menor a 13 años). txtIdEdad

		var edad;
		edad = document.getElementById('txtIdEdad').value;
		edad = parseInt (edad);

		if (edad>18)
		{
			alert("Sos adulto.");
		}
		else {
			if (edad>12 && edad<18) {
				alert ("Sos adolescente.")
			}
			else {
				alert ("Sos niño/a.")
			}
		}
			 



}//FIN DE LA FUNCIÓN