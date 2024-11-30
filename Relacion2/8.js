var string = prompt("dime algo")

var b = string.replaceAll(' ','')
b = b.toLowerCase;
var isPalindrome = true

for (let i = 0; i < b.length; i++) {
    console.log(b[i]+" - "+b[b.length-1-i])
        if (b[i] != b[b.length-1-i]) {
            
            isPalindrome = false
        }
        
    
    
}

alert("es palindromo: "+isPalindrome)