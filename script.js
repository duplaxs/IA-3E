const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado= document.querySelector('.texto-resultado');

const perguntas = [     //serve para abrir lista de perguntas
    {   //abre o objeto das perguntas
        enunciado: "você prefere doce ou salgado?",
        alternativas: [
            {texto: "doce",
            afirmação:"Doce é muito bom, melhor que salgado"}, 
            {texto: "salgado",
            afirmação:"Uma coxinha é melhor que um brigadeiro"}]
    },
    { 
        enunciado: "você come pizza doce? ",
        alternativas: [
            {texto: "Sim, eu como",
            afirmação:"È otimo "}, 
              
              
            {texto: "Não, não como",
            afirmação:"Pizza só serve se for salgada"}]
    },
    { 
        enunciado: "Qual é a melhor torta?",
        alternativas: [
            {texto: "salgada",
            afirmação:"A melhor"}, 
                
            {texto: "doce",
            afirmação:"A oitava maravilha do mundo"}]
    },
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
