var x = 0;
var a = []
function pedirNumero(){
    
    var input=prompt("Introduzca numero");
    var y = parseInt(input)
    a.push(y)
    x += y;
}
for (let index = 0; index < 10; index++) {
    pedirNumero();
    
}
alert(a)
alert(x)