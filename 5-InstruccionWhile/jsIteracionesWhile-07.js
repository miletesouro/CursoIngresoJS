//Al presionar el botón pedir números hasta que
// el USUARIO QUIERA e informar la suma 
//acumulada y el promedio.
function mostrar()
{
	var numeroIngresado;
	var contador;
	var sumaDeNumerosIngresados; // acumulador
	var respuesta; // variable de control
	var promedio;

	contador = 0;
	sumaDeNumerosIngresados = 0; // acumulador
	respuesta = 'si'; // o respuesta = true;
	//cuando esta do while no se necesita inicializar respuesta

	
	//do {
	while(respuesta == 'si') //aca no iria con do while
	{numeroIngresado = prompt ("Ingrese un número.");
	numeroIngresado = parseInt(numeroIngresado);
	respuesta = prompt("¿Querés seguir ingresando números? si/no");
	// o confirm("¿Querés seguir ingresando números?");
	sumaDeNumerosIngresados = sumaDeNumerosIngresados + numeroIngresado;
	contador = contador + 1;
	}  // while(respuesta == 'si'); <-- con do while

	promedio = sumaDeNumerosIngresados / contador;
	txtIdSuma.value= sumaDeNumerosIngresados;
	txtIdPromedio.value= promedio;

	/* hay un numero DETERMINADO de numeraciones 
	y otro numero INDETERMINADO de numeraciones 
	(este ejercicio). Cuando hay un numero indeterminado
	cambia la variable de control, como en este es la 
	variable RESPUESTA, a la que hay que determinarle
	un valor (si o no, en este caso) */ 

}//FIN DE LA FUNCIÓN