/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	var i; //las var que usamos en una estruc. repetitiva se programan con
			//letras--> variable de control (i, j, k). Permite controlar el 
		//flujo de iteraciones de una estructura repetitiva. 
	
	i = 0; // hay que inicializarla con un valor, en este caso 0 (cero).

	while(i<10) // la var se va a repetir mientras sea i menor que 10.
	{			// porque son 10 iteraciones (del 0 al 9 ya son 10 iteraciones).
		
		document.write((i+1) + "<br>"); // document.write((i+1)+ "<br>");

		i = i + 1; // Incremento de la variable de control. 

	}

	/*
	var i; declaracion de variable de control
	i = 0; inicializacion de la variable de control.
	
	while( i < 3) 
	{
		alert ("Hola");		para que se ejecute 3 veces
		i = i+1; O i++;			la estructura repetitiva.
	}

	*/


}//FIN DE LA FUNCIÓN

/*while(condicion)
	{ 
		sentencias que se tienen que repetir...

		sentencias que hagan que la condicion en algun momento de falsa
	}

	situaciones determinadas: cuando se cuantas repeticiones voy a hacer
situaciones  indeterminadas: cuando no se cuantas rep voy a hacer

Cosas que deberian repetirse --> el numero.
--> el proceso de suma (va a estar incluido en la secuencia)
NO deberia repetirse el mensaje*/