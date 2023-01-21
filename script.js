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
            /*
            const boxContainer = document.createElement("span");
            const divText = document.createElement("div");
            const img = document.createElement("img");
            const pName = document.createElement("p");
            const pLegend = document.createElement("p");

            img.src = i.img
            pName.innerText = i.nome;
            pLegend = i.legend;

            divText.appendChild(pName);
            divText.appendChild(pLegend);
            boxContainer.appendChild(img);
            boxContainer.appendChild(divText);

            selecao.appendChild(boxContainer)
            */

            console.log(i)

        })


       
    });
    

};

getData()


