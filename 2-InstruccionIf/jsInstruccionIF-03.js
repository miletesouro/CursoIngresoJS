function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es mayor de edad,
	si no informar que es un menor de edad.*/
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt (edad);
	
	if (edad>17)
	{
		alert ("Es mayor de edad.");
	}
	else 
	{
		alert ("Es menor de edad.")
	}

}//FIN DE LA FUNCIÓN