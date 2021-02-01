/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreDelAlumno;

	nombreDelAlumno = prompt ("Ingrese su nombre.");


	alert("Su nombre es: " + nombreDelAlumno + ". Bienvenido!");
}

//Entradas: prompt, getElementById
//Procesos: -
//Salidas: alert, console.log, document.getElementById, document.write
// Al declarar la variable siempre hacerlo detalladamente para 
//despues entenderlo bien. Ej: let nombreDelAlumno; let pesoDelPaciente;