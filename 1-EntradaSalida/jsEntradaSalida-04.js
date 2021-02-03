/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	//declaro variable para guardar el dato en la memoria. 
	var nombreDeUsuario;
	//guardo en la variable el texto que escribio el usuario dentro de la ventana prompt
	nombreDeUsuario = prompt ("Ingrese su nombre." + " Ejemplo: Micaela.");
	//paso el valor de la variable al id.
	document.getElementById("txtIdNombre").value = nombreDeUsuario ;
}

//Entradas: prompt - id.value o document.getElementById ("...").value
//Procesos: concatenar (+)
//Salidas: console.log - alert - document.write - id.value o documentGetElementById