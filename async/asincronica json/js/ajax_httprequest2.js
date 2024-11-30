(() => {
  const xhr = document.getElementById("xhr"), fragment = document.createDocumentFragment()

  const xhrRequest = new XMLHttpRequest


  xhrRequest.addEventListener("readystatechange", (e) => {
    // console.log (xhrRequest.readyState)
    if (xhrRequest.readyState !== 4) return
    if (xhrRequest.status<=200 && xhrRequest.status<300){
      
      let json=JSON.parse(xhrRequest.responseText)
      json.forEach(element => {
        const li = document.createElement("li")
        li.innerHTML=element.barrio+" - "+element.calle+" - "+element.telefono
        fragment.appendChild(li)
      });
      xhr.appendChild(fragment)
    }
    else{
      let errorMsg = xhrRequest.statusText || " petition error"
      xhr.innerHTML = "Codigo: " +xhrRequest.status+ errorMsg
    }
  })


  xhrRequest.open("GET", "https://datos.vigo.org/data/deportes/ins-complejos.json")

  xhrRequest.send()

})()