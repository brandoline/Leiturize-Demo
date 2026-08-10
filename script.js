let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let autor = document.getElementById("autor");
let ano = document.getElementById("ano");
let genero = document.getElementById("genero");
let classificacao = document.getElementById("classificacao");
let sinopseCurta = document.getElementById("sinopseCurta");
let sinopseLonga = document.getElementById("sinopseLonga");
let apresentaLivro = document.getElementById("apresentaLivro");

async function getBook(){
    apresentaLivro.classList.add("hidden");

    const resposta = await fetch("./data/livros.json")
    const livros = await resposta.json();

    let index = Math.floor(Math.random() * (livros.length - 0) + 0); 

    console.log('número: ' + index);
    console.log(livros[index]);

    let livro = {
        titulo: livros[index].titulo,
        subtitulo: livros[index].subtitulo,
        autor: livros[index].autor,
        ano: livros[index].anoPublicacao,
        classificacao: livros[index].faixaEtaria,
        genero: `${livros[index].generoPrincipal}, ${livros[index].generosExtras}`,
        sinopseCurta: livros[index].sinopseCurta,
        sinopseLonga: livros[index].sinopseCompleta,
    }

    console.log('livro: ' + livro);
    return livro;
}

async function showBook(){
    let livro = await getBook();

    titulo.textContent = livro.titulo;
    subtitulo.textContent = livro.subtitulo;
    autor.textContent = livro.autor;
    ano.textContent = livro.ano;
    genero.textContent = livro.genero;
    sinopseCurta.textContent = livro.sinopseCurta;
    sinopseLonga.textContent = livro.sinopseLonga;

    console.log('livro: ' + livro);
}

function discoverBook(){
    apresentaLivro.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
})