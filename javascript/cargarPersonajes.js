
export function cargarUrl(url){

const contenedorCards = document.querySelector(".cards-personajes-contenedor")

contenedorCards.innerHTML=``

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{


        data.results.forEach(element => {

            const {id,name,episode,species,image,status} = element
            
           
            const card = document.createElement("div")
            card.classList.add("cards-personajes")
            card.innerHTML=`

                <div class="cards-personajes-id" >
                    ${id} 
                </div>

                <img class="cards-personajes-imagen" src="${image}" alt="${name}">   

                <div class="cards-margen" >


                    <div>
                        ${name} 
                    </div>

                    <div> 
                        ${species}
                    </div>

                    <div> 
                        Apariciones: ${episode.length}
                    </div>

                    <div> 
                        (${status})
                    </div>


                </div>

                
                   
                
            `
            contenedorCards.appendChild(card)

            

        })

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
      
        localStorage.setItem("prevPersonajes",data.info.prev)
        localStorage.setItem("nextPersonajes",data.info.next)
       

    })
    .catch((error)=>{
        console.log("error",error)
    })

} 
