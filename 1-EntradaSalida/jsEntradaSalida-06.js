/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{	//declaro variable
	var numeroUno;
	var numeroDos;
	var resultadoSuma;
	
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//asegurarte que los datos estan en el JS a traves de alert.
	//alert (numeroUno);
	//alert (numeroDos);

	//por defecto cuando traes datos por id o prompt, esos datos se guardan
	//en formato de texto. Por ende, si encuentra 
	//una cadena y un numero o dos cadenas, el operador las concatena.
	//Para hacer la suma hay que pasar el dato a numero entero a traves de
	//parseInt.	
	
	numeroUno = parseInt(numeroUno);
	numeroDos =parseInt(numeroDos);

	resultadoSuma = numeroUno + numeroDos;

	
	alert ("El resultado de la suma es " + resultadoSuma);

}

