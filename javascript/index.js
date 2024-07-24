import * as carga from "./cargarPagina.js"


const url = "https://rickandmortyapi.com/api/character?page=1"


carga.cargarUrl(url)

let prevStorage = localStorage.getItem("prev")
let nextStorage = localStorage.getItem("next")



next.addEventListener("click",()=>{
    
    nextStorage = localStorage.getItem("next")
    prevStorage = localStorage.getItem("prev")

    carga.cargarUrl(nextStorage)
    
})

prev.addEventListener("click",()=>{

    nextStorage = localStorage.getItem("next")
    prevStorage = localStorage.getItem("prev")

    carga.cargarUrl(prevStorage)
   
    
})

nextStorage = localStorage.getItem("next")
prevStorage = localStorage.getItem("prev")