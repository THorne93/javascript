var meses = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
]);


meses.delete(5)
meses2 = [...meses]
console.log(meses2)

meses.set(13,"NuevoMes")
meses3 = [...meses]
console.log(meses3)

console.log("Mayo: " +meses.has(5) + " y Junio: " +meses.has(6))

arraymeses= [...meses]

arraymeses.splice(0,1)
console.log(arraymeses)
console.log(meses)
