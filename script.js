const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");




const perguntas = [
   {
       enunciado: "Qual dessas práticas ajuda a reduzir a emissão de gases de efeito estufa?",
       alternativas: [
           {
               texto: "Plantar árvores",
         
           },
           {
               texto: "Utilizar lâmpadas incandescentes",
             
           }
       ]
   },
   {
       enunciado: "Qual das seguintes das atitudes contribui para a conservação da água?",
       alternativas: [
           {
               texto: "Tomar banhos rápidos",
             
           },
           {
               texto: "Lavar a calçada com a mangueira",
             
           }
       ]
   },
   {
       enunciado: "Qual é a melhor maneira de descartar resíduos eletrônicos?",
       alternativas: [
           {
               texto: "Levar a um ponto de coleta específico para eletrônicos?",
             
           },
           {
               texto: "Jogar no lixo comum",
             
           }
       ]
   },
 
];








let atual = 0;
let perguntaAtual;
let historiaFinal = "";




function mostraPergunta() {
   if (atual >= perguntas.length) {
       mostraResultado();
       return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}




function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas) {
       const botaoAlternativas = document.createElement("button");
       botaoAlternativas.textContent = alternativa.texto;
       botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
       caixaAlternativas.appendChild(botaoAlternativas);
   }
}




function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}




function mostraResultado() {
   caixaPerguntas.textContent = "Em 2049...";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}




mostraPergunta();

