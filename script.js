let nome = document.getElementById("nome");
let sinopse = document.getElementById("sinopse");


async function getBook(){
    nome.classList.add("hidden");

    const resposta = await fetch("./data/livros.json")
    const livros = await resposta.json();

    let index = Math.floor(Math.random() * (livros.length - 0) + 0); 

    console.log('número: ' + index);
    console.log(livros[index]);

    let livro = {
        nome: livros[index].titulo,
        sinopseCurta: livros[index].sinopseCurta,
    }

    console.log('livro: ' + livro);
    return livro;
}

async function showBook(){
    let livro = await getBook();

    sinopse.textContent = livro.sinopseCurta;
    nome.textContent = livro.nome;
}

function discoverBook(){
    nome.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
})