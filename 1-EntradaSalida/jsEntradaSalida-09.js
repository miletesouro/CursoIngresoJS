/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var resultado;
	var aumento;

	sueldo = txtIdSueldo.value;

	sueldo = parseInt(sueldo);

	aumento = sueldo * 10/100;

	resultado = sueldo + aumento;
//resultado = sueldo + (sueldo*10/100); <-se podria simplificar asi pero
	// es mas susceptible a errores. O si no tambien se puede
	//resultado = sueldo * 1,1;

	txtIdResultado.value = resultado;

	//txtIdSueldo
	//txtIdResultado
}
