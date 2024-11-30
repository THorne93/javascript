class cuadrado {
    constructor(lado) {
        this.lado = lado
    }
    calculaPerimetro() {
        return 4*this.lado
    }
    calcularArea(){
        return this.lado*this.lado
    }
}

class cubo extends cuadrado {
    constructor(lado) {
        super(lado)
    }
    perimetro() {
        return 12 * this.lado
    }
    area() {
        return 6*super.calcularArea()
    }
    volumen() {
        return Math.pow(this.lado,3)
    }

}

console.log(new cuadrado(5).calculaPerimetro())
console.log(new cuadrado(5).calcularArea())
console.log(new cubo(5).perimetro())
console.log(new cubo(5).area())
console.log(new cubo(5).volumen())