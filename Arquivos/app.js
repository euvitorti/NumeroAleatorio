// MANIPULANDO O DOM
function exiberTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exiberTextoNaTela('h1', 'Hello World!');
exiberTextoNaTela('p', 'Escolha um número entre 1 e 100');

function verificarChute() {
    let chute = document.querySelector('input').value;
}

let numeroSecreto = gerarNumero();
function gerarNumero() {
    return parseInt(Math.random() * 100 + 1);
}