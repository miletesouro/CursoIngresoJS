/*Debemos realizar la carga de 5(cinco) productos de prevención de 
contagio, de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe
	 superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades
 y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{ 
	var tipoProducto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var i;

	i = 0;

	while (i<5) 
	{
		tipoProducto = prompt ("Ingrese el tipo de producto:");
		tipoProducto = tipoProducto.toLowerCase();
		while ( !(isNaN(tipoProducto)) || (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") )  ) 
		{
			tipoProducto = prompt("Reingrese el tipo de producto:");
		}

		precio = prompt ("Ingrese el precio del producto:");
		precio = parseFloat(precio);
		while ((isNaN(precio)) || (precio>100 && precio<300)) 
		{
			precio = prompt("Reingrese el precio del producto:");
			precio = parseFloat(precio);
		}

		cantidad = prompt ("Ingrese la cantidad del producto:");
		cantidad = parseInt(cantidad);
		while ((!(isNaN(cantidad))) || cantidad<1000)
		{
 			cantidad = prompt("Reingrese la cantidad del producto:");
			cantidad = parseInt(cantidad);
		}

		marca = prompt ("Ingrese la marca del producto:");
		fabricante = prompt ("Ingrese el fabricante del producto:");



	}
}
