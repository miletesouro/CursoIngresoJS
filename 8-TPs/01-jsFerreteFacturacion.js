/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{   //txtIdPrecioUno
    var suma;
    var precioUno;
    var precioDos;
    var precioTres;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = (precioUno + precioDos + precioTres);

    alert("El resultado de la suma es " + suma);
	
}
function Promedio () 
{   //txtIdPrecioDos
    var suma;
    var promedio;
    var precioUno;
    var precioDos;
    var precioTres;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = (precioUno + precioDos + precioTres);
    
    promedio = (suma / 3);
    
    alert("El promedio es " + promedio);
}
function PrecioFinal () 
{   //txtIdPrecioTres
    var precioUno;
    var precioDos;
    var precioTres;
    var precioFinal;
    var suma;
    var aumentoIva;
    var precioFinal;

    precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
   
    suma = (precioUno + precioDos + precioTres);

    aumentoIva = (suma * 21/100);
    precioFinal = suma + aumentoIva;

    alert("El precio final es " + precioFinal);
	
}

