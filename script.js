let retangulo = document.getElementById('retangulo');
let titulo = document.getElementById('titulo');
let enunciado = document.getElementById('enunciado');
let imagem = document.getElementById('imagem');
let contador = 0;
let score = 0;
let caixa = document.getElementById('caixa');
let score_number = document.getElementById('score_number')

const questoes = [
  {
    id: "questao_1",
    titulo: "QUESTÃO 1",
    enunciado: "Existe um buraco negro com a mesma massa do Sol?",
    imagem: "img/buraco-negro.png",
    resposta: true
  },
  {
    id: "questao_2",
    titulo: "QUESTÃO 2",
    enunciado: "A Via Láctea é a maior galáxia do nosso conjunto de galáxias?",
    imagem: "img/via-lactea.jpg",
    resposta: false
  },
  {
    id: "questao_3",
    titulo: "QUESTÃO 3",
    enunciado: "O Sol é uma estrela classificada como anã amarela?",
    imagem: "img/sol.webp",
    resposta: true
  },
  {
    id: "questao_4",
    titulo: "QUESTÃO 4",
    enunciado: "O planeta mais quente do sistema solar é Mercúrio?",
    imagem: "img/mercurio.jpg",
    resposta: false
  },
  {
    id: "questao_5",
    titulo: "QUESTÃO 5",
    enunciado: "A Lua tem 7 fases?",
    imagem: "img/lua.jpg",
    resposta: false
  },
  {
    id: "questao_6",
    titulo: "QUESTÃO 6",
    enunciado: "Todos os planetas do sistema solar cabem entre a Lua e a Terra?",
    imagem: "img/espaço.jpg",
    resposta: true
  },
  {
    id: "questao_7",
    titulo: "QUESTÃO 7",
    enunciado: "Os dinossauros foram extintos por um asteroide?",
    imagem: "img/asteroide.jpg",
    resposta: true
  },
  {
    id: "questao_8",
    titulo: "QUESTÃO 8",
    enunciado: "A tempestade vermelha de Júpiter é muito maior do que a Terra?",
    imagem: "img/jupiter.webp",
    resposta: true
  },
  {
    id: "questao_9",
    titulo: "QUESTÃO 9",
    enunciado: "Plutão é um planeta?",
    imagem: "img/plutao.avif",
    resposta: false
  },
  {
    id: "questao_10",
    titulo: "QUESTÃO 10",
    enunciado: "O Sol é branco?",
    imagem: "img/ceu.png",
    resposta: true
  },
]

titulo.innerHTML = questoes[contador].titulo;
enunciado.innerHTML = questoes[contador].enunciado;
imagem.setAttribute("src", questoes[contador].imagem)

function proximo(boolean) {
  if (questoes[contador].resposta === boolean) {
    score++
  }

  if (contador >= 9) {
    caixa.style.display = "none";
    retangulo.style.display = "flex";
    score_number.innerHTML = score
    return
  }

  contador++

  titulo.innerHTML = questoes[contador].titulo;
  enunciado.innerHTML = questoes[contador].enunciado;
  imagem.setAttribute("src", questoes[contador].imagem)
}
