/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "f" && sexoIngresado != "m")
	{
		sexoIngresado = prompt("Reingrese f o m.");
	} 
	
}//FIN DE LA FUNCIÓN