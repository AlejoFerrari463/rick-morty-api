import * as carga from "./cargarLocations.js"


const url = "https://rickandmortyapi.com/api/location"

carga.cargarUrl(url)

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")


let prevStorage = localStorage.getItem("prevLocations")
let nextStorage = localStorage.getItem("nextLocations")

next.addEventListener("click",()=>{
    
    nextStorage = localStorage.getItem("nextLocations")
    prevStorage = localStorage.getItem("prevLocations")

    carga.cargarUrl(nextStorage)
    
})

prev.addEventListener("click",()=>{

    nextStorage = localStorage.getItem("nextLocations")
    prevStorage = localStorage.getItem("prevLocations")

    carga.cargarUrl(prevStorage)
   
    
})