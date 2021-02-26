/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var i;
	var claveIngresada;
	
	claveIngresada = prompt ("Ingrese clave.");
	
	while (claveIngresada != "UTN750")
	{
	claveIngresada = prompt ("Error! Reingrese clave");
	}
}//FIN DE LA FUNCIÓN
