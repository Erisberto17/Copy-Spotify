async function getData(){
    const url = "https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/categorias";

    const response = await fetch(url);
    const request = await response.json()

    recieveData(request);

}; 

function recieveData (data){
    
    data.forEach((e) => {
        
        console.log(e)
    });
    

};

getData()


