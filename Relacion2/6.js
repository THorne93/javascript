var numbers = []

var a = prompt("dame un numero");
numbers.push(a)
var b = prompt("dame otro numero");
numbers.push(b)
var c = prompt("dame otro numero");
numbers.push(c)

numbers.sort(function(a, b){return a - b});

alert("el numero menor es: "+numbers[0])