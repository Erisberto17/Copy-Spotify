const section = document.getElementById("musica");
const titulo = document.querySelector("#titulo");

async function getData(){
    const res = await fetch("https://my-json-server.typicode.com/Erisberto17/Copy-Spotify/db")
    const req = await res.json()

    listas(req)
}

function listas(req){
    
    const albuns = Object.keys(req.categorias)
    
    const generoReq = JSON.parse(JSON.stringify(req.categorias.Rock.albuns))
    const genero = Object.values(generoReq)
    
    albuns.forEach((e)=>{
        titulo.innerText = e;
        
        genero.forEach((i)=>{
            
            const divText = document.createElement("div");        
            const img = document.createElement("img");
            const nome = document.createElement("p")
            const legend = document.createElement("p")
            const boxContainer = document.createElement("span")
            
            img.src = i.img;
            nome.innerHTML = i.nome;
            legend.innerHTML = i.legend;
            
            console.log(i.nome);
            
            divText.appendChild(nome);
            divText.appendChild(legend);
            boxContainer.appendChild(img);
            boxContainer.appendChild(divText);
            section.appendChild(boxContainer);
            
        })
    })
    boxContainer.classList.add("box-container")
    divText.classList.add("text")
    titulo.classList.add("titulo")
    
    

}
getData()
