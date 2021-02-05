/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{   var temperaturaIngresada;
    var temperaturaC;

    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    temperaturaC = ((temperaturaIngresada -32)/1.8);

    alert(temperaturaIngresada + "°F son " + temperaturaC + "°C.");
	
}

function CentigradosFahrenheit () 
{   var temperaturaIngresada;
    var temperaturaF;

    temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    temperaturaF = ((temperaturaIngresada * 1.8)+32);

    alert(temperaturaIngresada + "°C son " + temperaturaF + "°F.");
	
}
