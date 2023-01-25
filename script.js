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
        
        setInterval(()=>{
            ShowAll.innerText = "MOSTRAR TUDO"
            titulo.innerText = e.titulo;

        },1000)
        
        for(let i = 0; i < 4; i++){
            
            
            const element = e.albuns[i];
            
            const boxContainer = document.createElement("span");
            const divText = document.createElement("div");
            const img = document.createElement("img");
            const pName = document.createElement("p");
            const pLegend = document.createElement("p");
            
            boxContainer.addEventListener("click", () => openMusic(e.albuns[i]))

            setInterval(()=>{

                img.src = element.img;
                pLegend.innerText = element.legend
                pName.innerText = element.nome;
            },800)

            musica.appendChild(boxContainer);
            boxContainer.appendChild(img);
            boxContainer.appendChild(divText);
            divText.appendChild(pName);
            divText.appendChild(pLegend);
            

        }
        
        ShowAll.addEventListener("click", () => showGenero(e.albuns, e.titulo, ShowAll));
            
    });
    
};

function showGenero(playlist, showTitulo, showall){
    clear()
    
    const selecao = document.querySelector("#selecao");
    const titulo = document.createElement("h2");
    const musica = document.createElement("div")
    
    setInterval(()=>{
        titulo.innerHTML = showTitulo;
    },850)    

    selecao.appendChild(titulo);
    
    playlist.forEach((element)=> {  
        
        const boxContainer = document.createElement("span");
        const divText = document.createElement("div");
        const img = document.createElement("img");
        const pName = document.createElement("p");
        const pLegend = document.createElement("p");

        setInterval(()=>{

            img.src = element.img;
            pLegend.innerText = element.legend
            pName.innerText = element.nome;
        },1000 )
        
        boxContainer.appendChild(img);
        boxContainer.appendChild(divText);
        divText.appendChild(pName);
        divText.appendChild(pLegend);
        musica.appendChild(boxContainer)
        selecao.appendChild(musica);

        musica.classList.add("musica")

        boxContainer.addEventListener("click", () => openMusic(element))

    },1000)
    window.scroll(0, 0)
    musica.style.flexWrap = "wrap"
    

}

function openMusic(music){

    clear()

    console.log(music)

    const box = document.querySelector("#selectMusic");
    const container = document.createElement("div");
    const musica = document.createElement("span");
    const img = document.createElement("img");
    const name = document.createElement("p");
    const playButton = document.createElement("div");
    const barProg = document.createElement("div");
    const barfill = document.createElement("div");

    setInterval(()=> {
        img.src = music.img;
        name.innerText = music.nome;
    
        
    }, 700)
    playButton.classList.add("play");
    barProg.classList.add("barprogress");
    barfill.classList.add("barfill");
    container.classList.add("container")

    box.appendChild(container)
    container.appendChild(musica)
    barProg.appendChild(barfill);
    musica.appendChild(img)
    musica.appendChild(name);
    musica.appendChild(playButton);
    musica.appendChild(barProg);






}
getData();


function clear(){
    const selecao = document.querySelector("#selecao")

    selecao.innerHTML =''
}
