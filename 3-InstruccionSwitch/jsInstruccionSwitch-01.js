function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño = document.getElementById('txtIdMes').value;

switch(mesDelAño)
{
	case "Enero":
		alert ("Que comiences bien el año!");
	break;
	case "Marzo":
		alert ("Vuelta a clases!");
	break;
	case "Julio":
		alert ("Se vienen las vacas!");
	break;
	case "Diciembre":
		alert("Felices fiestas!");
	break;
}

}//FIN DE LA FUNCIÓN