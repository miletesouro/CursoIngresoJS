/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//reservo espacio en memoria para guardar nombre y edad de usuario.
	let nombreDeUsuario;
	let edadDeUsuario;
	//guardo en la variable el texto que escribio el usuario dentro del cuadro
	nombreDeUsuario = document.getElementById("txtIdNombre").value;
	edadDeUsuario = document.getElementById("txtIdEdad").value;
	//lo muestro a traves de alert
	alert(" Usted se llama " + nombreDeUsuario + " y tiene " + edadDeUsuario + " años.");
}

