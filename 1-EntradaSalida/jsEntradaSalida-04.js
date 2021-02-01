/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	//reservo espacio en memoria para guardar el nombre de usuario.
	var nombreDeUsuario;
	//guardo en la variable el texto que escribio el usuario dentro de la ventana prompt
	nombreDeUsuario = prompt ("Ingrese su nombre.");
	//copio el nombre que tengo guardado en la variable nombre dentro de la caja de texton embebida en la pagina html
	document.getElementById("txtIdNombre").value = nombreDeUsuario ;
}

