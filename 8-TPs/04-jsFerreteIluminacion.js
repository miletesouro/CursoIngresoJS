/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más tiene el 50%. 
B.	Si compra 5 "ArgentinaLuz" 40 % y otra marca 30%.
C.	Si compra 4  "ArgentinaLuz" o “FelipeLamparas” 25 % y otra marca el 20%.
D.	Si compra 3  "ArgentinaLuz"  el 15%, “FelipeLamparas”el 10 % y otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
        var cantidadLamparitas;
        var marcaLamparita;
        var precioUnitario;
        var precioTotalSinDescuento;
        var precioTotalConDescuento;
        var precioConImpuesto;
        var descuento;

        descuento = 0;
        precioUnitario = 35;

        cantidadLamparitas = document.getElementById('txtIdCantidad').value;
        cantidadLamparitas = parseInt (cantidadLamparitas);
        marcaLamparita = document.getElementById('Marca').value;
        
        totalSinDescuento = cantidadLamparitas * precioUnitario;   
        
       switch(cantidadLamparitas)
       {
           case 5: 
           if (marcaLamparita == "ArgentinaLuz")
           {
               descuento = 40;
           } else {
               descuento = 30;
           }
           break;

           case 4: 
           if (marcaLamparita == "ArgentinaLuz" || marcaLamparita == "FelipeLamparas")
           {
               descuento = 25;
           } else {
               descuento = 20;
           }
           break;

           case 3:
           if (marcaLamparita == "ArgentinaLuz")
           {
               descuento = 15;
           } else {
               if (marcaLamparita == "FelipeLamparas")
               {
                   descuento = 10;
               } else {
                   descuento = 5;
               }
           }
           break;
                   
           default:
           if (cantidadLamparitas>5)
           {
               descuento = 50;
           }
           break;

        }
    
}
