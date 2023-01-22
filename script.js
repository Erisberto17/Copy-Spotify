async function getData(){
    const url = "https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/categorias";

    const response = await fetch(url);
    const request = await response.json();

    recieveData(request);

}; 

function recieveData (data){
    
    const selecao = document.querySelector("#selecao");
    
    
    data.forEach((e) => {
        
        const musica = document.createElement("div");
        const titulo = document.createElement("h2");
        
        selecao.appendChild(titulo);
        selecao.appendChild(musica);
        
        musica.classList.add("musica")
        
        titulo.innerText = e.titulo;
        
        console.log("------");

        e.albuns.forEach((i) => {

            
            const boxContainer = document.createElement("span");
            const divText = document.createElement("div");
            const img = document.createElement("img");
            const pName = document.createElement("p");
            const pLegend = document.createElement("p");
            
            musica.appendChild(boxContainer);
            boxContainer.appendChild(img);
            boxContainer.appendChild(divText);
            divText.appendChild(pName);
            divText.appendChild(pLegend);

            img.src = i.img;
            pName.innerText = i.nome;
            pLegend.innerText = i.legend;
            
            console.log(i);
            
        });
        
            
    });
    
};

getData();


