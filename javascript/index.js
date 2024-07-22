

const url = "https://rickandmortyapi.com/api/character?page=1"

function cargarUrl(url){

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{


        data.results.forEach(element => {

           
            const {name,episode} = element
            
            console.log(name,"Episodios:",episode.length)


        })


    })
    .catch((error)=>{
        console.log("error",error)
    })

} 


cargarUrl(url)