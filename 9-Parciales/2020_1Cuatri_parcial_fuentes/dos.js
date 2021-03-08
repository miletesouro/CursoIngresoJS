function mostrar()
{
  /*

y nos piden informar solo si existe
a)El perro mas pesadoX
b)El porcentaje de enfermos sobre el total de mascotasX
c)El nombre de la ultima mascota de tipo "otra cosa"X
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
*/

var animal;
var pelaje;
var edad;
var peso;
var nombre;
var raza;
var estadoClinico;
var temperaturaCorporal;
var contadorCantPerro;
var acumuladorCantPerro;
var contadorCantGato;
var acumuladorCantGato;
var contadorCantOtro;
var acumuladorCantOtro;
var banderaPerroPesado;
var mayorPerroPesado;
var nombreMayorPerroPesado;
var contadorEnfermos;
var contadorInternados;
var contadorAdopcion;
var totalAnimales;
var porcentajeEnfermos;
var ultimaMascotaOtro;

respuesta = "si";
banderaPerroPesado = "si";

while(respuesta=="si") {

  animal = prompt("Ingrese que animal es: (perro-gato-otro) ");
  animal = animal.toLowerCase();
  while(animal!= "perro" && animal!= "gato" && animal != "otro")
  {
    animal = prompt("ERROR.Ingrese nuevamente que animal es: (perro-gato-otro)");
  }

  pelaje = prompt ("Ingrese que pelaje tiene:");
  pelaje = pelaje.toLowerCase();
  while(pelaje != "corto" && pelaje != "largo" && pelaje != "sin pelo")
  {
    pelaje = prompt("ERROR. Reingrese que pelaje tiene:");
  }

  edad = prompt("Ingrese la edad de su mascota:");
  edad = parseInt(edad);
  while(edad>20)
  {
    edad = prompt("ERROR. Reingrese la edad de su mascota:");
    edad = parseInt(edad);
  } 

  nombre = prompt("Ingrese el nombre de su mascota:");
  nombre = nombre.toLowerCase();
  while(!(isNaN(nombre)) || nombre=="")
  {
    nombre = prompt("ERROR. Reingrese el nombre de su mascota:");
  }

  raza = prompt ("Ingrese la raza de su mascota:");
  raza = raza.toLowerCase();
  while(!(isNaN(raza)))
  {
    raza = prompt("ERROR. Reigrese la raza de su mascota:");
  }

  peso = prompt("Ingrese el peso de su mascota: ");
  peso = parseFloat(peso);
  while(isNaN(peso) || peso>120)
  {
    peso = prompt("ERROR. Reingrese el peso de su mascota:");
  }

  estadoClinico = prompt("Ingrese el estado clinico de su mascota:");
  estadoClinico = estadoClinico.toLowerCase();
  while(!(isNaN(estadoClinico)) || (estadoClinico!= "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion"))
  {
    estadoClinico = prompt("ERROR. Reingrese el estado clinico de su mascota");
  }

  temperaturaCorporal = prompt("Ingrese la temperatura corporal de su mascota");
  temperaturaCorporal = parseFloat(temperaturaCorporal);
  while(!(isNaN(temperaturaCorporal)) || temperaturaCorporal>50)
  {
    temperaturaCorporal = prompt("ERROR. Reingrese la temperatura corporal de su mascota:");
  }

  switch (animal)
  {
    case "perro":

      if(banderaPerroPesado=="si" || peso > mayorPerroPesado)
      {
        mayorPerroPesado = peso;
        nombreMayorPerroPesado = nombre;
        banderaPerroPesado = "no";
      }

      contadorCantPerro++;
      acumuladorCantPerro = acumuladorCantPerro + animal;
    break;    
    case "gato":
      contadorCantGato++;
      acumuladorCantGato = acumuladorCantGato + animal;
    break;    
    case "otro":
      
      ultimaMascotaOtro = nombre;
      contadorCantOtro++;
      acumuladorCantOtro = acumuladorCantOtro + animal;
    break;    
  }

  switch (estadoClinico)
  {
    case "enfermo":
      contadorEnfermos++;
    break;
    case "internado":
      contadorInternados++;
    break;
    case "adopcion":
      contadorAdopcion++;
    break;
  }
  

  totalAnimales = contadorInternados + contadorEnfermos + contadorInternados;
  porcentajeEnfermos = (contadorEnfermos / totalAnimales) /100;


  document.write("El perro mas pesado se llama " + nombreMayorPerroPesado + " y pesa "+ mayorPerroPesado + "kgs." + "<br>");
  document.write("El porcentaje de enfermos sobre el total de mascotas es de " + porcentajeEnfermos + "% animales." + "<br>");
  document.write("El nombre de la ultima mascota de otra cosa es " + ultimaMascotaOtro + "." + "<br>");
  document.write("" + "<br>");
  document.write("" + "<br>");
  document.write("" + "<br>");



}

}