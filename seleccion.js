  //declarando variables
  let servicio,forma,costo,descuento,cliente;
  
  //captura de datos
  alert("servicio disponibles")
  servicio=parseInt(prompt(" ingrese \n 1 para alisado  \n 2-Uñas \n 3-tintes \n4-Mascarrilla \n5-Corte de pelo"));

   
  while(servicio<1 || servicio>5)
  {
      servicio=parseInt(prompt(" ingrese correctamente \n 1-alisado  \n 2-Uñas \n 3-tintes  \n4-Mascarrilla \n5-Corte de pelo"));  
  }
  descuento=costo*0.25;

  forma=parseInt(prompt("ingrese la forma de pago \n1-credito \n2-efectivo"));
  cliente=parseInt(prompt("Si es cliente frecuente \n1-si \n2-No "))
while(cliente<1 || cliente>2){
    cliente=parseInt(prompt("Si es cliente frecuente \n1-si \n2-No "))
}


  while(forma<1 || forma>2)
  {
      forma=parseInt(prompt("ingrese la forma de pago correctamente \n1-credito \n2-efectivo "));    
  }

  //procesos
  switch(servicio)
  {
      case 1:
      {
      costo=50;
      break;
      }
      case 2:
      {
      costo=25;
      break;
     
      }
      case 3:
        {
        costo=30    
        }


    case 4:
        {
        costo=10    
        }
      default:
          {
      costo=15;
      break;
      
          }
  
  }//fin sw

  //impresion
if(cliente==1){
    if(forma==1 && servicio==1)
        {
         document.write("Uste se hizo un alisado: <br>");
         document.write("usted ha cancelado con tarjeta de credito: <br>");
         document.write("el costo es de : "+costo+"<br>");
         document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
         document.write("el pago total sera de : "+(costo*1.10).toFixed(2)+"<br>");
         document.write("Si usted es cliente frecuente se le hara un descuento del 25% :"+(costo-descuento))
        }
}

  if(descuento=0.25)

   
  if(forma==1 && servicio==1)
  {
   document.write("Uste se hizo un alisado: <br>");
   document.write("usted ha cancelado con tarjeta de credito: <br>");
   document.write("el costo es de : "+costo+"<br>");
   document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
   document.write("el pago total sera de : "+(costo*1.10).toFixed(2)+"<br>");
   document.write("Si usted es cliente frecuente se le hara un descuento del 25% :"+(costo-descuento))
  }
else if (forma==1 && servicio==2)
{
document.write("Uste se hizo Uñas: <br>");
   document.write("usted ha cancelado con tarjeta de credito: <br>");
   document.write("el costo es de : "+costo+"<br>");
   document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
   document.write("el pago total sera de : "+(costo*1.10));   
}
else if  (forma==1 && servicio==3)
{
document.write("Uste se hizo Tinte: <br>");
   document.write("usted ha cancelado con tarjeta de credito: <br>");
   document.write("el costo es de : "+costo+"<br>");
   document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
   document.write("el pago total sera de : "+(costo*1.10));   
}
else if  (forma==1 && servicio==3)
    {
    document.write("Uste se hizo Mascarrila: <br>");
       document.write("usted ha cancelado con tarjeta de credito: <br>");
       document.write("el costo es de : "+costo+"<br>");
       document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
       document.write("el pago total sera de : "+(costo*1.10));   
    }
    else if  (forma==1 && servicio==3)
        {
        document.write("Uste se hizo Corte de pelo: <br>");
           document.write("usted ha cancelado con tarjeta de credito: <br>");
           document.write("el costo es de : "+costo+"<br>");
           document.write("se le hara un recargo del 10% :"+(costo*0.10)+"<br>");
           document.write("el pago total sera de : "+(costo*1.10));   
        }
  
else if(forma==2 && servicio==1)
{
document.write("usted se hizo alisado : <br>");
document.write("el costo total es de :"+costo);
}
else if(forma==2 && servicio==2)
{
document.write("usted se hizo las Uñas : <br>");
document.write("el costo total es de :"+costo);
}
else if (forma==2 && servicio==3)
{
document.write("usted se hizo el Tinte : <br>");
document.write("el costo total es de :"+costo);  
}
else if(forma==2 && servicio==4)
{
document.write("usted se hizo el Tinte : <br>");
document.write("el costo total es de :"+costo);  
}else(forma==2 && servicio==5)
{
document.write("usted se hizo el Tinte : <br>");
document.write("el costo total es de :"+costo);  
}


