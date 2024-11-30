   var ventana;
function newwindow() {
      ventana = window.open("http://www.marca.com")
       
   }
   function closewindow() {
      if (ventana != null) {
         ventana.close()
      } 
      else console.log("no existe")
       console.log("close")
   }  