
async function getData(){
    const url = "https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/db"
    const response = await fetch(url);

    const requer = await response.json();
   
    passToList(requer)
    
}
function passToList (catData){
    for (const key in catData) {
        if (Object.hasOwnProperty.call(catData, key)) {
            const element = catData[key];
            getAlbuns(element)
        }
    }
}
function getAlbuns(albuns){
    console.log(albuns)
    
    for (const key in albuns) {
        if (Object.hasOwnProperty.call(albuns, key)) {
            const element = albuns[key];
            console.log(element)
            
        }
    }
}
getData()