/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//reservo espacio en memoria para el nombre, apellido y edad de usuario.
	var nombreDeUsuario;
	var edadDeUsuario;
	var apellidoDeUsuario;
	//paso el valor de la variable al id.
	nombreDeUsuario = document.getElementById('txtIdNombre').value; //txtIdNombre.value
	edadDeUsuario = document.getElementById('txtIdEdad').value; //txtIdEdad.value
	//pido el apellido a través de prompt.
	apellidoDeUsuario = prompt("Escriba su apellido.");
	//lo muestro a traves de alert.
	alert(" Usted se llama " + nombreDeUsuario + " " + apellidoDeUsuario + " y tiene " + edadDeUsuario + " años.");

	//MILENA TESOURO. 
}

