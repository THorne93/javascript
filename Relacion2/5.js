letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
dni = prompt("Dame tu DNI sin letra")
var y = parseInt(dni)
calculo = y % 23
console.log("Tu DNI completo es: " + letras[calculo] + dni)




dni2 = prompt("Dame tu DNI sin letra")
var y = parseInt(dni)
calculo = y % 23
if (dni2[0] == letras[calculo]) {
    alert("correcto")
} else alert("incorrecto")