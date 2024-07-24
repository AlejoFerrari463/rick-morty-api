
export function cargarUrl(url){

const contenedorCards = document.querySelector(".cards-contenedor")

const next = document.querySelector("#next")
const prev = document.querySelector("#prev")


contenedorCards.innerHTML=``

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{


        data.results.forEach(element => {

            const {id,name,episode,species,image,status} = element
            
           
            const card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML=`

                <div class="cards-id" >
                    ${id} 
                </div>


                <img src="${image}">   

                <div class="mt-5" >


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
      
        localStorage.setItem("prev",data.info.prev)
        localStorage.setItem("next",data.info.next)
       

    })
    .catch((error)=>{
        console.log("error",error)
    })

} 
