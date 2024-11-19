const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua principal característica?",
        alternativas: [
            {
                texto: "Coragem.",
                afirmacao: "Você seria alguém com grande coragem e determinação, como Harry Potter ou Hermione Granger."
            },
            {
                texto: "Inteligência.",
                afirmacao: "Você seria alguém que pensa antes de agir e valoriza o conhecimento, talvez um estudante aplicado de Grifinória ou uma mente brilhante em Ravenclaw."
            }
        ]
    },
    {
        enunciado: "Qual seria a sua reação ao ver um ser mágico estranho pela primeira vez?",
        alternativas: [
            {
                texto: "Ficar fascinado(a) e querer saber mais.",
                afirmacao: "Seu interesse pela magia seria imenso, explorando todos os mistérios do mundo mágico com empolgação."
            },
            {
                texto: "Ficar desconfiad(a) e cauteloso(a).",
                afirmacao: "Você é alguém que prefere agir com precaução. Isso te tornaria uma pessoa estrategista, com um olhar atento para os perigos."
            }
        ]
    },
    {
        enunciado: "Como você reagiria se fosse convocado para uma missão secreta?",
        alternativas: [
            {
                texto: "Aceitaria imediatamente, sem hesitar.",
                afirmacao: "Como alguém audacioso, você não pensaria duas vezes antes de se lançar em uma missão misteriosa."
            },
            {
                texto: "Tentaria buscar mais informações antes de decidir.",
                afirmacao: "Você seria mais cauteloso, tomando o tempo necessário para analisar todos os riscos antes de se envolver. Sua habilidade de planejar e pesar as consequências te colocaria em uma posição de conselheiro ou estrategista, como Percy Weasley ."
            }
        ]
    },
    {
        enunciado: "Você se considera mais...",
        alternativas: [
            {
                texto: "Empático(a) e leal aos amigos.",
                afirmacao: "Sua lealdade e empatia te fariam um grande amigo. Você seria alguém como Ron Weasley ou Hagrid, sempre pronto para apoiar seus amigos em momentos difíceis."
            },
            {
                texto: "Solitário(a), preferindo trabalhar sozinho.",
                afirmacao: "Como uma pessoa mais introspectiva, você provavelmente preferiria a solidão. Seu foco seria em desenvolver habilidades únicas ou em realizar tarefas de forma independente, talvez como Severus Snape ou Draco Malfoy, com um caráter mais complexo e solitário."
            }
        ]
    },
    {
        enunciado: "Se você tivesse que escolher um animal como seu companheiro, qual seria?",
        alternativas: [
            {
                texto: "Um cão ou um corvo.",
                afirmacao: "Seu animal seria leal e protetor, como um cão, ou misterioso e profundo, como um corvo. Você seria uma pessoa com uma conexão forte com a magia das sombras ou do conhecimento oculto, talvez sendo um membro da casa Sonserina, com uma personalidade intrigante."
            },
            {
                texto: "Uma coruja ou um gato.",
                afirmacao: "Você seria alguém mais prático e observador, como uma coruja ou um gato. Seu estilo seria mais estratégico e tranquilo, e você provavelmente teria um papel fundamental em momentos-chave, como um amigo fiel ou um conselheiro astuto, similar a Hermione Granger ou Minerva McGonagall."
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
    caixaPerguntas.textContent = "Em Harry Potter, você seria...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
