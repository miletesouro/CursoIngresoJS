function mostrar()
{
	/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/
	var horaDelDia =txtIdHora.value;
	horaDelDia = parseFloat(horaDelDia);

/*	if (horaDelDia>6 && horaDelDia<12)
	{
		alert ("Es de mañana.");
	} else
	{
		if (horaDelDia>11 && horaDelDia<20)
		{
			alert("Es de tarde.");
		} else
		{
			if (horaDelDia>19 && horaDelDia<25)
			{
				alert("Es de noche.");
			} else
			{ 
				if (horaDelDia>=0 && horaDelDia<7)
				{
					alert("Es de noche.");
				} else 
				{
					alert("La hora no existe.");
				}
			}
		}
	}*/

	 switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
		break;

		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert ("Es de tarde.");
		break;
		
		case 20:
		case 21:
		case 22:
		case 23:
		case 24: 
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			alert("Es de noche.");
		break;

		default:
			alert("La hora no existe.");
		break;
	
	} 


	/* switch(true)
	{	case horaDelDia >6 && horaDelDia <12:
			alert("Es de mañana.");
		break;

		case horaDelDia >11 && horaDelDia <20:
			alert("Es de tarde.");
		break;

		case horaDelDia >19 && horaDelDia <25:
		case horaDelDia >=0 && horaDelDia <7:
			alert("Es de noche.")
		break;

		default:
			alert("La hora no existe.");
		break;
	}*/
	

}//FIN DE LA FUNCIÓN