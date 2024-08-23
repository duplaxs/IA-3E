const caixaPrincipal = document.querySelector('caixa-principal');
const caixaPergunta = document.querySelector('caixa-pergunta');
const caixaAlternativa = document.querySelector('caixa-alternativa');
const caixaResultado= document.querySelector('caixa-resultado');
const perguntas=[
    {
        enunciado: "pergunta 1",
        alternativa:[ "alterntiva 1"," alternativa 2",]          
    },
    {
        enunciado: "pergunta 2",
        alternativa:[ "alterntiva 1"," alternativa 2"]        
    },
    {
        enunciado: "pergunta 3",
        alternativa:[ "alterntiva 1"," alternativa 2"]       
    },
]

let posicao = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual= perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
}

