let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let ano = document.getElementById("ano");
let classificacao = document.getElementById("classificacao");
let sinopseCurta = document.getElementById("sinopseCurta");
let sinopseLonga = document.getElementById("sinopseLonga");
let apresentaLivro = document.getElementById("apresentaLivro");
let generoP = document.getElementById("generoPrincipal");
let generos = document.getElementById("generos");

async function getBook(){
    generos.innerHTML = "";
    apresentaLivro.classList.add("hidden");

    const resposta = await fetch("./data/livros.json")
    const livros = await resposta.json();

    let index = Math.floor(Math.random() * (livros.length - 0) + 0); 

    console.log('número: ' + index);
    console.log(livros[index]);

    let livro = {
        titulo: (livros[index].subtitulo !== '') ? `${livros[index].titulo}, ${livros[index].subtitulo}` : livros[index].titulo,        
        autor: livros[index].autor,
        ano: livros[index].anoPublicacao,
        classificacao: livros[index].faixaEtaria,
        generoPrincipal: livros[index].generoPrincipal,
        generoSecundario: livros[index].generosExtras,
        sinopseCurta: livros[index].sinopseCurta,
        sinopseLonga: livros[index].sinopseCompleta,
    }

    console.log('livro: ' + livro);
    return livro;
}

async function showBook(){
    let livro = await getBook();
    

    titulo.textContent = livro.titulo;
    autor.textContent = livro.autor;
    ano.textContent = livro.ano;
    sinopseCurta.textContent = livro.sinopseCurta;
    sinopseLonga.textContent = livro.sinopseLonga;
    generoP.textContent = livro.generoPrincipal;

    generoP.classList.add("genero");
    generos.appendChild(generoP);
    livro.generoSecundario.forEach(g => {
        genero = document.createElement("p");
        genero.textContent = g;
        genero.classList.add("genero");
        generos.appendChild(genero);
    });

    console.log('livro: ' + livro);
}

function discoverBook(){
    apresentaLivro.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
})