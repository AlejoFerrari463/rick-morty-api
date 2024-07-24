export function cargarUrl(url){

fetch(url)
.then(response=>{

    return response.json()

})
.then(info=>{
    console.log(info)



    
})
.catch(error => {
    console.log("error: ",error)
})

    
}