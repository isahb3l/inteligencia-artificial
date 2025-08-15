const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma carta da faculdade dizendo que vôce passou no curso dos seus sonhos. Mas a graduação é integral. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "É o melhor dia da minha vida!",
                afirmacao: "No início ficou com medo, mas logo iniciou na faculdade. "
            },
            {
                texto: "Não posso fazer isso agora!",
                afirmacao: "vôce hesitou e não deu iníocio a faculdade. Decidiu focar em outras coisas ."
            }
        ]
    },
    {
        enunciado: "Com a descoberta de uma ótima propósta de emprego, em uma empresa grande na cidade, com potêncial para subir de cargo. Mas de 8h por dia  . Qual atitude você toma?",
        alternativas: [
            {
                texto: "Não posso largar a faculdade agora, nesse momento tão importante",
                afirmacao: "Vôce decidiu recusar a proposta e concluir a faculdade, pois com um diploma novas portas se abririam pra vôce."
            },
            {
                texto: "Essa é a minha chance",
                afirmacao: "Abraçou a oportunidade, e engressou em uma das maiores empresas de tecnologia do país"
            }
        ]
    },
    {
        enunciado: "Após um bom tempo vôce encontra seu amor do colegial, ele está completamente diferente. Ele te convida para um jantar, o que você faz?",
        alternativas: [
            {
                texto: "Já faz tempo que não nos vemos, talvez eu deva dar uma chance",
                afirmacao: "De primeira, você não estava muito segura. Mas deepois de mais alguns encontros decidiram reatar o relacionamento de vocês."
            },
            {
                texto: "Me preocupo com o rumo desse jantar. já faz tanto tempo... não sei se estou pronta para algo a mais.",
                afirmacao: "Sua preocupação fez com que você desse um tempo de relacionamentos, dando espaço para o autocuidado e foco em grandes negôcios"
            }
        ]
    },
    {
        enunciado: "As estações passaram, ciclos antigos se encerraram e vôce se vê em uma grande crise existencial. Qaul é o seu primeiro passo pra sair dessa? ",
        alternativas: [
            {
                texto: "Com um relacionamento estável, e uma estábiidade financeira boa, talves seja hora de partir para algo mais...sério!",
                afirmacao:" Depois de várias conversas e noites em claro pensando em qual passo iria dar, voces decidem se casar. afinal, a vida é feita de sonhos. Só que eles ficam melhores ainda quando são realizados..."
            },
            {
                texto: " Eu acho que agora é um ótimo momento pra me reinventar, mudar a aparência, conhecer gente nova. Ou até fazer uma viagem",
                afirmacao: " Vôce finalmente decidiu se dar o prazer de se divertir, com uma carreira estável, e uma boa grana, nada melhor do que sol, mal e curtição"
            }
        ]
    },
    {
        enunciado: "Dando um salto temporal, Em um domingo de sol, depois do almoço em família. Sua netimha te pergunta qual foi o momento em que vôce realmente sentiu que valía a pena estar viva. isso te faz recordar da sua juventude e das coisas belas da vida... o que vôce conta à ela?",
        alternativas: [
            {
                texto: " De fato, vivi muitos momentos assim durante minha vida. mas eu acho que o mais marcante foi uma viagem que fiz a suíça durante a primaveira, ver aquele lugar foi a coisa mais linda da minha vida. ",
                afirmacao: " Isso fez vôce lembrar das mais incrvéis viagens que foi durante a vida, lugares lindos, pessoas incrives, o amor da sua vida. Vôce percebeu que a vida deve ser vivida de forma com que o pra sempre, fique sempre nas memórias! "
            },
            {
                texto: " Ah!, foram tantos momentos bons, acho que não conseguiria colocar em palavras tudo que senti enquanto vivi. mas sem dúvidas, todos os momentos que passei ao lado do seu avô foram inesquecíves para mim",
                afirmacao: " No fim, vôce realmente viveu um sonho! realizou tudo que um dia idealizou, se formou, casou-se com o amor da sua vida, levava uma vida boa, com muito sentimento em cada detalhe, contruiu um lar. E viveu a vida do lado de quem amava aproveitando ao maximo cada segundo!" 
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
