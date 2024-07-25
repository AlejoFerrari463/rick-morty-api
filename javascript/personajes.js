import * as carga from "./cargarPersonajes.js"


const url = "https://rickandmortyapi.com/api/character?page=1"

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

carga.cargarUrl(url)

let prevStorage = localStorage.getItem("prevPersonajes")
let nextStorage = localStorage.getItem("nextPersonajes")



next.addEventListener("click",()=>{
    
    nextStorage = localStorage.getItem("nextPersonajes")
    prevStorage = localStorage.getItem("prevPersonajes")

    carga.cargarUrl(nextStorage)
    
})

prev.addEventListener("click",()=>{

    nextStorage = localStorage.getItem("nextPersonajes")
    prevStorage = localStorage.getItem("prevPersonajes")

    carga.cargarUrl(prevStorage)
   
    
})

