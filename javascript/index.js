

const url = "https://rickandmortyapi.com/api/character?page=1"
const contenedorCards = document.querySelector(".cards-contenedor")


function cargarUrl(url){

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{

        console.log(data.info.next)

        data.results.forEach(element => {

    
        
            const {id,name,episode,species,image,status} = element
            
            console.log(element)
           
            const card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML=`
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

                
                    <div class="cards-id" >
                        ${id} 
                    </div>
                
            `
            contenedorCards.appendChild(card)


        })
        
        // if(data.info.next){
        //     cargarUrl(data.info.next)
        // }


    })
    .catch((error)=>{
        console.log("error",error)
    })

} 


cargarUrl(url)