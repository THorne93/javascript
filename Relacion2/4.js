var array =[6,"pepe",2,"juan"];

const arrayNumbers = array.filter(Number);
console.log(arrayNumbers[0]+arrayNumbers[1])
console.log(arrayNumbers[0]-arrayNumbers[1])
console.log(arrayNumbers[0]*arrayNumbers[1])
console.log(arrayNumbers[0]/arrayNumbers[1])

const arrayString = array.filter(String)
arrayString.sort();
console.log(arrayString[arrayString.length-1])
