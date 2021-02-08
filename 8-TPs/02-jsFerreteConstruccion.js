/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/    

//TESOURO REY MILENA

function Rectangulo () 
{   var largo;
    var ancho;
    var perimetro;
    var cantAlambre;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo*2)+(ancho*2);

    cantAlambre = (perimetro*3);

    alert("La cantidad de alambre que necesitaran comprar es de " + cantAlambre + " metros.");

}
function Circulo () 
{   var perimetro;
    var radio;
    var alambre;
    radio = document.getElementById('txtIdRadio').value;
    radio = parseInt(radio);
    perimetro = 2 * Math.PI * radio;
    alambre = perimetro *3;
    alambre = alambre.toFixed(2);
    alert ("Se necesitan comprar " + alambre + (" metros de alambre."));
	
}
function Materiales () 
{   var largo;
    var ancho;
    var area;
    var cantCemento;
    var cantCal;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);

    area = largo * ancho;

    cantCemento = area *3;
    cantCal = area *2;

    alert ("Para un contrapiso de " + area + " m2 necesito comprar " + cantCemento + " bolsas de cemento y " + cantCal + " bolsas de cal.");

}