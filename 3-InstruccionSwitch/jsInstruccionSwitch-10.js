function mostrar()
{	var destino = txtIdDestino.value;
	var estacionDelAño =txtIdEstacion.value;

	switch(estacionDelAño)
	{
		case "Invierno":
			if (destino == "Bariloche")
			{
				alert("Se viaja.");
			} else {
				alert("No se viaja.");
			}
		break;

		case "Verano":
			if (destino == "Mar del plata" || destino == "Cataratas")
			{
				alert("Se viaja.");
			} else {
				alert("No se viaja.");
			}
		break;

		case "Otoño":
			alert("Se viaja.");
		break;

		case "Primavera":
			if (destino == "Bariloche")
			{
				alert("No se viaja.");
			} else {
				alert("Se viaja.");
			}
		break;
	}
}//FIN DE LA FUNCIÓN