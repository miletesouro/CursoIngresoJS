function mostrar()
{
var i; // la variable de control es un contador 
var numeroIngresado;
var acumulador; //captura el nro, deja libre la variable para recibir otro nro.

i = 0;
acumulador = 0;

	while (i<5)
{
	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado);
	acumulador = acumulador + numeroIngresado;
	i = i+1;
}

promedio = acumulador / 5;

document.getElementById('txtIdSuma').value = acumulador;
document.getElementById('txtIdPromedio').value = promedio;


/*La diferencia entre el acumulador y el contador es que 

-ACUMULADOR: acumula con valores variables.
-CONTADOR (o i/j/k): acumula con valores constantes.








/*	var numero1; 
	var numero2;
	var numero3;
	var numero4;                     (SIN WHILE)
	var numero5;
	var sumaAcumulada;
	var promedio;

	numero1 = prompt("Ingrese un numero.");
	numero2 = prompt("Ingrese otro numero.");
	numero3 = prompt ("Ingrese otro numero.");
	numero4 = prompt("Ingrese otro numero.");
	numero5 = prompt("Ingrese un ultimo numero.");

	numero1 = parseInt(numero1);
	numero2 = parseInt (numero2);
	numero3 = parseInt (numero3);
	numero4 = parseInt(numero4);
	numero5 = parseInt(numero5);

	sumaAcumulada = numero1 + numero2 + numero3 + numero4 + numero5;
	promedio = sumaAcumulada / 5;

	txtIdSuma.value=sumaAcumulada;
	txtIdPromedio.value=promedio;*/
}//FIN DE LA FUNCIÓN