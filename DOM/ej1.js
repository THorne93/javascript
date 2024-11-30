var d=document
var enlaces=d.querySelectorAll("a")
console.log(enlaces.length)
console.log(enlaces[enlaces.length-2].href)
var cont = 0;
for (let index = 0; index < enlaces.length; index++) {
   if(enlaces[index].href ==  "http://www.marca.es/") {
    cont ++;
   }
    
}
console.log(cont)

var parrafo=d.querySelectorAll("p")
console.log(parrafo[2].querySelectorAll("a").length)