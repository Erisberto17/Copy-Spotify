async function getData(){
    const url = "https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/db";

    const response = await fetch(url);
    const request = await response.json()
    
    recieveData(request)
    
} 

function recieveData(data){
    const dataTotal = data.categorias.Rock.albuns.slipknot;
    
    
    console.log(dataTotal)
    
    dataTotal.forEach(element => {
        console.log(element)
    });
    

};

getData()


