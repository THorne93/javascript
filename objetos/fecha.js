function getDay(day) {
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[day]
}

function getMonth(month) {
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return months[month];
}

function getCuartrimester(mes) {
    if (mes <= 3) {
        return "1º Cuartrimestre"
    } else if (mes <= 7) {
        return "2º Cuartrimestre"
    } else return "3º Cuartrimestre"
}

const currentDay = new Date();
const dia = getDay(currentDay.getDay())
const mes = getMonth(currentDay.getMonth())
const cuartrimester = getCuartrimester(currentDay.getMonth())
const anio = currentDay.getFullYear()

   
console.log("Estamos en el día " + dia + " del mes " + mes + " del " + cuartrimester + " del año " + anio)
