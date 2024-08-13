var inicio=10000;
var fin=100000;

function numero()
{
    for (let index = inicio; index<=fin; index=index+1000 )
    {
      document.write(index,"--");
    }
}



var inicio=10000;
var fin=100000;

function serie()
{
    for (let index = fin; index >= inicio; index=index-1000)
    {
      document.write(index,"--");
    }
}
















var texto="Buenos dias";
var k=1;

function frase()
{
    while (k<=10) 
    {

document.write(texto,"<br>");
     
        k++;
    }

}














var dias=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

function semanita()
{
for (let index = 0; index < dias.length; index++) 
{
document.writeln(dias[index],"<br>" );   
    
}
}//fin semanita
//llamando la funcion
//semanita();