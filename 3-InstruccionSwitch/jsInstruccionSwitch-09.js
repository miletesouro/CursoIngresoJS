function mostrar()
{
	var estacionDelAño;
	var destino;
	var precioBase;
	var precioFinal;
	var descuento;
	var aumento;
	
	precioBase = 15000;
	descuento = 0;
	aumento = 0;
	
	estacionDelAño = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	switch(estacionDelAño)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				aumento = 20;
			}
			else{
				if (destino == "Mar del Plata")
				{
					descuento = 20;
				}
				else 
				{
					descuento = 10;
				}
			}
		break;

		case "Verano":
			if (destino == "Bariloche")
			{
				descuento = 20;
			}
			else {
				if (destino == "Mar del Plata")
				{
					aumento = 20;
				}
				else 
				{
					aumento = 10;
				}
			}
		break;

		case "Otoño":
		case "Primavera":
			if (destino == "Bariloche" || "Cataratas")
			{
				aumento = 10;
			}
			else {
				if (destino = "Mar del Plata")
				{
					aumento = 10;
				}
				else {
					precioFinal = precioBase;
				}
			}
			
		break;
	}	
	
	if (aumento != 0) {
		precioFinal = precioBase + (precioBase * aumento/100);
	} 
	else {
		if (descuento != 0)
		{
			precioFinal = precioBase - (precioBase * aumento/100);
		}

		
	}
alert ("El precio es $" + precioFinal);

}//FIN DE LA FUNCIÓN