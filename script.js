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
                afirmacao: "Você seria alguém com grande coragem e determinação, como Harry Potter ou Hermione Granger. Sempre pronto para enfrentar desafios, você seria a pessoa que não hesitaria em lutar pelo que é certo, mesmo em situações perigosas."
            },
            {
                texto: "Inteligência.",
                afirmacao: "Sua mente ágil e curiosa te levaria a se destacar em áreas como a magia teórica ou as Artes das Trevas. Você seria alguém que pensa antes de agir e valoriza o conhecimento, talvez um estudante aplicado de Grifinória ou uma mente brilhante em Ravenclaw."
            }
        ]
    },
    {
        enunciado: "Qual seria a sua reação ao ver um ser mágico estranho pela primeira vez?",
        alternativas: [
            {
                texto: "Ficar fascinad@ e querer saber mais.",
                afirmacao: "Seu interesse pela magia seria imenso, e você provavelmente se tornaria amigo de criaturas como os elfos domésticos ou até mesmo um animago, explorando todos os mistérios do mundo mágico com empolgação."
            },
            {
                texto: "Ficar desconfiad@ e cauteloso.",
                afirmacao: "Você é alguém que prefere agir com precaução. Isso te tornaria uma pessoa estrategista, com um olhar atento para os perigos, talvez um membro da Lufa-Lufa, focado em proteger seus amigos e a si mesmo."
            }
        ]
    },
    {
        enunciado: "Como você reagiria se fosse convocado para uma missão secreta?",
        alternativas: [
            {
                texto: "Aceitaria imediatamente, sem hesitar.",
                afirmacao: "Como alguém audacioso, você não pensaria duas vezes antes de se lançar em uma missão misteriosa. Você seria um líder natural, talvez alguém que integraria a Armada de Dumbledore ou até mesmo um Auror em potencial."
            },
            {
                texto: "Tentaria buscar mais informações antes de decidir.",
                afirmacao: "Você seria mais cauteloso, tomando o tempo necessário para analisar todos os riscos antes de se envolver. Sua habilidade de planejar e pesar as consequências te colocaria em uma posição de conselheiro ou estrategista, como Percy Weasley ou até mesmo um Auror mais experiente."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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