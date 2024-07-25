export function cargarUrl(url){

    
const contenedorCards = document.querySelector(".cards-episodios-contenedor")

contenedorCards.innerHTML=``

fetch(url)
.then(response=>{

    return response.json()

})
.then(data=>{

    console.log(data.info)
    
    data.results.forEach(element => {
        
        console.log(element)

        const {name, air_date, episode} = element

        const card = document.createElement("div")
        card.classList.add("cards-episodios")

       

        card.innerHTML=`

            <div>
                ${name}
            </div>

            <div>
                ${air_date}
            </div>

            <div>
                ${episode}
            </div>
          
        
        `

        contenedorCards.appendChild(card)

    });
    if(data.info.next){
        next.classList.remove("button-desact")
    }
    else {
        next.classList.add("button-desact")
    }
    
    if(data.info.prev){
        prev.classList.remove("button-desact")
    }
    else {
        prev.classList.add("button-desact")
    }

    localStorage.setItem("prevEpisodios",data.info.prev)
    localStorage.setItem("nextEpisodios",data.info.next)


    
})
.catch(error => {
    console.log("error: ",error)
})

    
}