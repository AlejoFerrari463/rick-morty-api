

const url = "https://rickandmortyapi.com/api/character?page=1"
const contenedorCards = document.querySelector(".cards-contenedor")


function cargarUrl(url){

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{

      

        data.results.forEach(element => {

    
        
            const {name,episode,species,image} = element
            
            console.log(element)
           
            const card = document.createElement("div")
            card.classList.add("cards")
            card.innerHTML=`
                ${name}
                <div>${species}</div>
                <img src="${image}">
            `
            contenedorCards.appendChild(card)


        })
        // console.log("")
        // if(data.info.next){
        //     cargarUrl(data.info.next)
        // }


    })
    .catch((error)=>{
        console.log("error",error)
    })

} 


cargarUrl(url)