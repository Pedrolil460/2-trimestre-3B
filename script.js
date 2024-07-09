const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    { [
        enunciado: "Ai você esta saindo da sua escola, escutando uma música, e teve a brilhante ideia de compor, com um ritmo parecido, mas voçê esta inseguro do que pode acontcer, que iria fazer?",
            {
                texto: "Não iria ligar para oque falam, ia fazer acontcer ;)",
                afirmacao: "afirmação"
            },
            {
                texto: "Ia ficar escutando minhas musicas, pois não sei se tenho talento para isso :(",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Voçê começo sua a fazer sua música, iria escolher por primeiro oque, o som que irar usar ou irar fazer sua letra primeiro?",
        alternativas: [
            {
                texto: "Irei fazer minha letra primeiro é óbvio!!",
                afirmacao: "afirmação"
            },
            {
                texto: "Claro que irei começar escolhendo o som é óbvio!!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Após a elaboração da sua música, como irar distribuir ela?",
        alternativas: [
            {
                texto: "Irei fazer uma prévia de no maximo 1 minuto, e postarei nas minhas redes sociais!",
                afirmacao: "afirmação"
            },
            {
                texto: "Apartir do momento que, terminei de gravar, irei postar nas plataformas de músicas para ganhar dinheiro!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com sua música distribuida por todas plataformas de músicas, como iriar divulgar ela?",
        alternativas: [
            {
                texto: "Irei deixa-la alguma hora irar bombar!",
                afirmacao: "afirmação"
            },
            {
                texto: "Mandarei para minha redes sociais, avisando que mandei minha música para as plataformas, e para compartilhar para mais amigos, para ganhar ingajamento!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como foi sua experiencia, de como se voçê começa-se fazer uma música, acha que sairia em? ",
        alternativas: [
            {
                texto: "Não eu seria péssimo!",
                afirmacao: "afirmação"
            },
            {
                texto: "Sim, sairia bem!",
                afirmacao: "afirmação"
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
