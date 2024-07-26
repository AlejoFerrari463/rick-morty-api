export function cargarUrl(url){

    const contenedorCards = document.querySelector(".cards-locations-contenedor")

    contenedorCards.innerHTML=``

    fetch(url)
    .then(response =>{

        return response.json()

    })
    .then(data =>{

        
        data.results.forEach(element => {
            
            let personajes = ""

            console.log(element)

            const {id,name,type,dimension,residents} = element

            const cards = document.createElement("div")

            cards.classList.add("cards-locations")

            cards.innerHTML=`

                <div>
                    ${id}
                </div>

                <div>
                    ${name}
                </div>

                <div>
                    ${type}
                </div>

                <div>
                    ${dimension}
                </div>
              
            
            `

            // residents.forEach(element=>{
            //     personajes += " "+element

            // })
            // console.log(personajes)
            // console.log("")
            contenedorCards.appendChild(cards)

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

        localStorage.setItem("prevLocations",data.info.prev)
        localStorage.setItem("nextLocations",data.info.next)



    })
    .catch(error => {
        console.log("error: ",error)
    })


}