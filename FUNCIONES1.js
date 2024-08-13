var inicio=parseInt(prompt("Ingrese el valor incial de la tabla"))
var fin=parseInt(prompt("Ingrese el valor final de la tabla"))


function tablita(inicio,fin)
{
    var valor= parseInt(prompt("ingrese que tabla de multiplicar quiere obtener"))
if(inicio<=fin)
{
for (let f=inicio; f<=fin; f++)
    {
let tabla = f * valor;
document.write(f +"*"+ valor +"=" +tabla+"<br>")
    }
}

else
{
    for (let f=inicio; f>=fin; f--)
        {
    let tabla = f * valor;
    document.write(f +"*"+ valor +"=" +tabla+"<br>")
        }
}
    }

