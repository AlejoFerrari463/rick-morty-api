import * as carga from "./cargarEpisodios.js"

const url = "https://rickandmortyapi.com/api/episode"

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")

carga.cargarUrl(url)

let prevStorage = localStorage.getItem("prevEpisodios")
let nextStorage = localStorage.getItem("nextEpisodios")

next.addEventListener("click",()=>{
    
    nextStorage = localStorage.getItem("nextEpisodios")
    prevStorage = localStorage.getItem("prevEpisodios")

    carga.cargarUrl(nextStorage)
    
})

prev.addEventListener("click",()=>{

    nextStorage = localStorage.getItem("nextEpisodios")
    prevStorage = localStorage.getItem("prevEpisodios")

    carga.cargarUrl(prevStorage)
   
    
})