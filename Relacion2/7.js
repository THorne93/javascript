a = prompt("dime algo")
b = a.replaceAll(' ','');
var lower = 0
var upper = 0

for (let index = 0; index < b.length; index++) {
    if (b[index] == b[index].toUpperCase()) {
        upper++
    }
    else lower++
    
}

if (lower == b.length) {
    alert("es todo minuscolos")
} else if (upper == b.length) {
    alert("es todo mayusculas")
}
else alert ("es una mezcla")