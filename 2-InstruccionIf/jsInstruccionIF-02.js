function mostrar()
{ //txtIdEdad
	/* Al ingresar una edad debemos informar solo si la persona es mayor de edad */
	var edad;
	edad = document.getElementById('txtIdEdad').value;
	edad = parseInt (edad);
	
	if (edad>17) //(edad>=18) cuando es asi es una forma menos optima, 
	//ya que, le toma mas tiempo ejecutarlo al ser mayor o igual,
	//en cambio de la otra manera le toma menos trabajo, es mas optimo. 
	{
		alert ("Sos mayor de edad.");
	}


}//FIN DE LA FUNCIÓN