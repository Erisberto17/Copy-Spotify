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
        const ShowAll = document.createElement("a")
        const divTitulo = document.createElement("div")
        
        selecao.appendChild(divTitulo);
        divTitulo.appendChild(titulo)
        divTitulo.appendChild(ShowAll);
        selecao.appendChild(musica);
        
        musica.classList.add("musica")
        divTitulo.classList.add("divTitulo")
        
        ShowAll.innerText = "MOSTRAR TUDO"
        titulo.innerText = e.titulo;
        
        for(let i = 0; i < 4; i++){
            
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

            img.src = e.albuns[i].img;
            pName.innerText = e.albuns[i].nome;
            pLegend.innerText = e.albuns[i].legend;

        }
        
        ShowAll.addEventListener("click", () => showGenero(e.albuns, e.titulo));
            
    });
    
};

function showGenero(playlist, showTitulo){
    
    clear()

    const selecao = document.querySelector("#selecao");
    const titulo = document.createElement("h2");
    const musica = document.createElement("div")

    titulo.innerHTML = showTitulo;

    selecao.appendChild(titulo);
    
    playlist.forEach((element)=> {  


        const divGenero = document.createElement("div")
        
        const boxContainer = document.createElement("span");
        const divText = document.createElement("div");
        const img = document.createElement("img");
        const pName = document.createElement("p");
        const pLegend = document.createElement("p");

        img.src = element.img;
        pName.innerText = element.nome;
        pLegend.innerText = element.legend
        
        boxContainer.appendChild(img);
        boxContainer.appendChild(divText);
        divText.appendChild(pName);
        divText.appendChild(pLegend);
        musica.appendChild(boxContainer)
        selecao.appendChild(musica);

        musica.classList.add("musica")

    })
    musica.style.flexWrap = "wrap"
    

}
function clear(){
    const selecao = document.querySelector("#selecao")

    selecao.innerHTML =''
}
getData();


