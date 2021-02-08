function mostrar()
{
	//txtIdEdad
		var edad;
		edad = document.getElementById('txtIdEdad').value;
		edad = parseInt (edad);
		
		if(edad<12 || edad>18) //del rango de valores toma todo lo q esta
							   //afuera. O si no, if(! (edad>12 && edad<18))
		{
			alert ("No sos adolescente.");
		}

		/*if(edad>12 && edad<18)  
		{
		}
		else 
		{
			alert ("No sos adolescente.");
		}*/
	
}//FIN DE LA FUNCIÓN