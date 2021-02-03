/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var resultadoSuma;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoSuma = (numeroUno + numeroDos);

	alert ("El resultado de la suma es " + resultadoSuma);

}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultadoResta;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoResta = (numeroUno - numeroDos);

	alert ("El resultado de la resta es " + resultadoResta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultadoMultiplicacion;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoMultiplicacion = (numeroUno * numeroDos);

	alert ("El resultado de la multiplicación es " + resultadoMultiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultadoDivision;

	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	numeroUno = parseInt (numeroUno);
	numeroDos = parseInt(numeroDos);

	resultadoDivision = (numeroUno / numeroDos);

	alert ("El resultado de la división es " + resultadoDivision);
}

