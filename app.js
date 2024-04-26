// LISTA PARA ARMAZENAR OS NÚMEROS
let listaNumerosSorteados = [];
let numeroLimite = 100;

function exiberTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;    
    
    //INCLUSÃO
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function exiberMensagemInicial() {
    exiberTextoNaTela('h1', 'Hello World!');
    exiberTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exiberMensagemInicial();

let tentativas = 1;
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Acertou com ${tentativas} ${palavraTentativa}`;

        exiberTextoNaTela('h1', 'Acertou');
        exiberTextoNaTela('p', mensagemTentativas);

        // DESABILITAR O ATRIBUTO NO HTML
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        exiberTextoNaTela('h1', 'Quaseee...');
        if (chute > numeroSecreto) {
            exiberTextoNaTela('p', 'Um pouco menos');
        } else {
            exiberTextoNaTela('p', 'Um pouco mais');
        }
        tentativas++;

        limparCampo();
    }
}

// GERAR NÚMERO ALEATÓRIO
let numeroSecreto = gerarNumero();
function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 5) {
        listaNumerosSorteados = [];
    }

    // includes - SE ESTÁ INCLUÍDO NA LISTA
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        // VAI GERAR OUTRO NÚMERO
        return gerarNumero();
    } else {
        // COLOCANDO O NÚMERO SORTEADO NO FINAL DA LISTA
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}


//FAZER COM ARROWFUNCTION
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    exiberMensagemInicial();
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;

    //DESABILITANDO O BOTÃO
    document.getElementById('reiniciar').setAttribute('disabled', true);
}