const a = [];
var num = 0;
 while (num < 3000) {
    if (num % 11 == 0) {
        a.push(num);
    }
num++
 }

 a.forEach(element => {
    document.write(element)
    document.write("<br>")
 });

 var tot = 0

 for (let index = 0; index < a.length; index++) {
    tot += a[index];
    
 }

 document.write("el total es: " +tot)
