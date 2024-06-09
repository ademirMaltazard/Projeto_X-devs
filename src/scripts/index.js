

//pegar o elemento
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// fazer o clique
btnAvancar.addEventListener("click", function(){
    const ehPrimeiroCartao = cartaoAtual === cartoes.length - 1
    if (ehPrimeiroCartao) return;
    EsconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();
});

btnVoltar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual === 0
    if (ehUltimoCartao) return;
    EsconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado');
}

function EsconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}