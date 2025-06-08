let resultado = document.getElementById('resultado');
let titulo = document.getElementById('titulo');
let enunciado = document.getElementById('enunciado');
let imagem = document.getElementById('imagem');

const questoes = [
  {
    id: "questao_1",
    titulo: "QUESTÃO 1",
    enunciado: "Existe um buraco negro com a mesma massa do sol?",
    imagem: "img/buraco-negro.png",
    resposta: true
  },
  {
    id: "questao_2",
    titulo: "QUESTÃO 2",
    enunciado: "Via Láctea é a maior galáxia do nosso conjunto de galáxias?",
    imagem: "img/via-lactea.jpg",
    resposta: false
  }
]

titulo.innerHTML = questoes[0].titulo;
enunciado.innerHTML = questoes[0].enunciado;
imagem.setAttribute("src", questoes[0].imagem)

function certo() {
  resultado.innerHTML = 'CORRETO'
  resultado.classList.add('correto')
  resultado.classList.remove('errado')
}
function errado() {
  resultado.innerHTML = 'ERRADO'
  resultado.classList.remove('correto')
  resultado.classList.add('errado')
}
