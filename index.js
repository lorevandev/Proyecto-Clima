//const form = document.body.children[1]
const boton = document.querySelector("button")
const clima = document.createElement("p")
const seccion = document.querySelector("section")

    

boton.addEventListener("click",()=>{
        
        clima.innerText = "PRUEBA"
        seccion.appendChild(clima)
        
})






