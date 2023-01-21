async function getData(){
    const url = "https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/categorias";

    const response = await fetch(url);
    const request = await response.json()

    recieveData(request);

}; 

function recieveData (data){
    const selecao = document.querySelector("#selecao")
    data.forEach((e) => {
        const titulo = document.createElement("h2");
        titulo.innerText = e.titulo;
        selecao.appendChild(titulo)
        e.albuns.forEach((i) => {
            console.log(i)
        })


        console.log(e)
    });
    

};

getData()


