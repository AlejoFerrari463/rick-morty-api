export function cargarUrl(url){

    
    const contenedorCards = document.querySelector(".cards-episodios-contenedor")

    contenedorCards.innerHTML=``

    fetch(url)
    .then(response=>{

        return response.json()

    })
    .then(data=>{


        
        data.results.forEach(element => {
    

            const {id, name, air_date, episode,characters} = element

            const card = document.createElement("div")
            card.classList.add("cards-episodios")

            console.log(element)

            card.innerHTML=`

                <div>
                    <span class="text-decoration-underline fw-bold" >Name:</span> ${name}
                </div>

                <div>
                    <span class="text-decoration-underline fw-bold" >Aire Date:</span> ${air_date}
                </div>

                <div>
                    <span class="text-decoration-underline fw-bold" >Season:</span> ${episode}
                </div>

                <div>
                    <span class="text-decoration-underline fw-bold" >Characters apparitions:</span> ${characters.length}
                </div>
            
                <div class="cards-episodios-id" >
                    ${id}
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