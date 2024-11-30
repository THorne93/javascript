var meses = new Set(["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]);

meses.delete("mayo")
var meses2 = [...meses]
console.log(meses2)

meses.add("nuevoMes")
meses2 = [...meses]
console.log(meses2)

console.log("existe mayo: " +meses.has("mayo") + "     existe junio: " +meses.has("junio"))

var arraymeses = [...meses]

arraymeses.splice(0,1)

console.log(arraymeses)
console.log(meses)