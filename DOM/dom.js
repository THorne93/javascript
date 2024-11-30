const list = document.getElementById("diariosdeportivos")
function addElement() {
    const newElement = document.createElement("li")
    const texto =document.createTextNode( prompt ("add text"))
    newElement.appendChild(texto)
    list.appendChild(newElement)
}
