const factura = {
    empresa: {
        nombre: "Control",
        direccion: "101, Lucena",
        telefono: "420696969",
        nif: "A123456789"
    },
    cliente: {
        numCliente: "1",
        dni: "B987654321",
        nombre: "Pepe",
        domicilio: "102, Lucena",
        cp: "19402",
        provincia: "Cordoba"
    },
    productos: [
        {nombre:"Lapiz",precio:50,cantidad:600},
        {nombre:"Coche",precio:9999,cantidad:14},
        {nombre:"Alhambra 1925",precio:2,cantidad:10000}
    ],
    importeTotal: 0,
    metodoPago: "tarjeta",
    calcularImporte: function () {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio * producto.cantidad
        })
        this.importeTotal = total
    },

    showImporte: function () {
        this.calcularImporte()
        console.log("Importe total: " + this.importeTotal)
    }

}

console.log(factura)
factura.showImporte()