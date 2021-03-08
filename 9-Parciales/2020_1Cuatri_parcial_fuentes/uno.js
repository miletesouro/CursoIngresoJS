/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{ 
	//pedir tipo y validar (barbijo, jabon, alcohol)
	var tipo;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i; //variable de control
	var precioMinimoAlcohol;
	var cantidadMinimoAlcohol;
	var fabricanteMinimoAlcohol;
	var cantidadAlcohol;
	var acumuladorAlcohol;
	var cantidadBarbijos;
	var acumuladorBarbijos;
	var cantidadJabon;
	var acumuladorJabon;
	var tipoParaPromedio;
	var promedio;

	cantidadAlcohol =0;
	acumuladorAlcohol =0;
	cantidadBarbijos =0;
	acumuladorAlcohol =0;
	cantidadJabon =0;
	acumuladorJabon =0;
	i = 0;

	for (i=0; i<5; i++)
	{
		tipo = prompt("Ingrese tipo:");
		tipo = tipo.toLowerCase();
		while (isNaN(tipo)==false || (tipo !="barbijo" && tipo !="jabon" && tipo!="alcohol"))
		{
			tipo = prompt("Error! Reingrese tipo:");
		}
		precio = prompt("Ingrese precio:");
		precio = parseFloat(precio);
		while(precio<99 || precio>301)
		{
			precio = prompt ("Error! Reingrese precio entre 100 y 300:");
			precio = parseFloat(precio);
		}
		cantidad = prompt("Ingrese cantidad (hasta 1000 unidades)");
		cantidad = parseInt(cantidad);
		while(isNaN(cantidad)==false && cantidad>1000)
		{
			cantidad = prompt("Error!! Reingrese cantidad, recorda que se puede hasta 1000.");
			cantidad = parseInt(cantidad);
		}
		marca = prompt("Ingrese marca:");
		fabricante = prompt("Ingrese fabricante:");

		

		switch(tipo) {
			case "alcohol": 
			if(tipo=="alcohol")
		{
			if (cantidadAlcohol == 0 || precio<precioMinimoAlcohol) 
			{
				precioMinimoAlcohol = precio;
				cantidadMinimoAlcohol = cantidad;
				fabricanteMinimoAlcohol = fabricante;
			}
		}
				cantidadAlcohol ++;
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
			break;

			case "barbijo":
				cantidadBarbijos ++;
				acumuladorBarbijos = acumuladorBarbijos + cantidad;
			break;

			case "jabon":
				cantidadJabon ++;
				acumuladorJabon = acumuladorJabon + cantidad;
			break;
		}
	}

	if(acumuladorJabon>acumuladorBarbijos && acumuladorJabon>acumuladorAlcohol)
	{
		tipoParaPromedio = "jabones";
		promedio = acumuladorJabon / cantidadJabon;
	} else {
		if (acumuladorBarbijos > acumuladorJabon )
		{
			tipoParaPromedio = "barbijo";
			promedio = acumuladorBarbijos / cantidadBarbijos;
		} else {
			tipoParaPromedio = "alcohol";
			promedio = acumuladorAlcohol / cantidadAlcohol;
		}
	}

	if(cantidadAlcohol!=0)
	{
		document.write()

	} else {

	}
}
