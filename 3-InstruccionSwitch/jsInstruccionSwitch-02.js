function mostrar()
{
	//tomo el mes
	var mesDelAño;
	mesDelAño = document.getElementById('txtIdMes').value;

	switch(mesDelAño)
	{	
		case "Enero":
			alert("Falta para el invierno.");
		break;
		case "Febrero":
			alert("Falta para el invierno.");
		break;
		case "Julio":
			alert("Abrigate que hace frio.");
		break;
		case "Agosto":
			alert("Abrigate que hace frio.");
		break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!");
		break;
		case "Octubre":
			alert("Ya pasamos el frio, ahora calor!!!");
		break;

		default:
			alert("Ni frio ni calor!!");
		break;
			}
	

/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */ 

}//FIN DE LA FUNCIÓN