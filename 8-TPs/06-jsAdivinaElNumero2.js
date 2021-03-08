/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
var numeroInicial;
var numeroFinal;

numeroInicial = 1;
numeroFinal = 100;
contadorIntentos = 1;

function comenzar()
{
	numeroSecreto = Math.floor((Math.random() * numeroInicial) + numeroFinal);
}

function verificar()
{	switch (contadorIntentos) {

	case 1:
	if (numeroIngresado == numeroSecreto)
	{
		contadorIntentos = contadorIntentos + 1;
		document.getelementById('txtIdIntentos').value = "Usted es un psíquico!";
	}
	break;
	case 2:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado == numeroSecreto) {
	document.getelementById('txtIdIntentos').value = "Excelente percepcion";}
	break;
	case 3:
		contadorIntentos = contadorIntentos + 1;
		if(numeroIngresado == numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Esto es suerte";
		}
	break;
	case 4:
		contadorIntentos = contadorIntentos + 1;
		if(numeroIngresado == numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Excelente tecnica";
		}
	break;
	case 5:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Usted esta en la media";
		}
		break;
		case 6:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Usted esta en la media";
		}
		break;
		case 7:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Usted esta en la media";
		}
		break;
		case 8:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Usted esta en la media";
		}
		break;
		case 9:
		if (numeroIngresado== numeroSecreto)
		contadorIntentos = contadorIntentos + 1;
			{
							document.getelementById('txtIdIntentos').value = "Usted esta en la media";
			}
		break;
		case 10:
		contadorIntentos = contadorIntentos + 1;
		if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Usted esta en la media";
		}
		break;
		default:
								contadorIntentos = contadorIntentos + 1;
								if (numeroIngresado== numeroSecreto)
		{
			document.getelementById('txtIdIntentos').value = "Afortunado en el amor!!!";
		}
	break;
	

}
}