// Define os passos da história como um objeto
const historia = {
    0: {
        imagem: "img/spaceship.png",
        descricao: "Você é chamado para uma missão urgente: salvar o planeta Orion Prime, que está prestes a ser destruído por um buraco negro.",
        opcoes: [
            { texto: "Aceitar a missão", proximo: 1 },
            { texto: "Recusar e voltar para casa", proximo: 2 }
        ]
    },
    1: {
        imagem: "img/alien-planet.png",
        descricao: "Você chega em Orion Prime e encontra dois caminhos: investigar uma antiga ruína ou procurar ajuda na colônia espacial.",
        opcoes: [
            { texto: "Explorar as ruínas", proximo: 3 },
            { texto: "Ir para a colônia espacial", proximo: 4 }
        ]
    },
    2: {
        imagem: "img/home-planet.png",
        descricao: "Você decide recusar a missão. Talvez essa responsabilidade não seja para você... mas o destino de Orion Prime permanecerá um mistério.",
        opcoes: []
    },
    3: {
        imagem: "img/alien-ruins.png",
        descricao: "Nas ruínas, você encontra um cristal poderoso, mas ele está protegido por enigmas antigos. Resolver ou buscar ajuda?",
        opcoes: [
            { texto: "Resolver os enigmas", proximo: 5 },
            { texto: "Voltar para a colônia", proximo: 4 }
        ]
    },
    4: {
        imagem: "img/colony.png",
        descricao: "Na colônia, você encontra um cientista que pode ajudar, mas ele pede que você colete um mineral raro nas montanhas próximas.",
        opcoes: [
            { texto: "Ir às montanhas", proximo: 6 }
        ]
    },
    5: {
        imagem: "img/energy-crystal.png",
        descricao: "Você resolve os enigmas e obtém o cristal de energia necessário para estabilizar Orion Prime!",
        opcoes: [
            { texto: "Salvar o planeta", proximo: 7 }
        ]
    },
    6: {
        imagem: "img/mountain.png",
        descricao: "Você coleta o mineral raro e retorna à colônia para fabricar um dispositivo que estabiliza Orion Prime.",
        opcoes: [
            { texto: "Salvar o planeta", proximo: 7 }
        ]
    },
    7: {
        imagem: "img/saving-planet.png",
        descricao: "Graças aos seus esforços, Orion Prime é salvo e sua coragem será lembrada por gerações!",
        opcoes: [
            { texto: "Jogar novamente", proximo: 0 }
        ]
    }
};

// Função para atualizar o conteúdo da página
function atualizarConteudo(passo) {
    const conteudo = document.getElementById('conteudo');

    // Limpa o conteúdo anterior
    conteudo.innerHTML = "";

    // Cria os elementos dinamicamente
    const imagem = document.createElement('img');
    imagem.src = historia[passo].imagem;
    imagem.alt = "Imagem relacionada à história";

    const descricao = document.createElement('p');
    descricao.textContent = historia[passo].descricao;

    const botoesDiv = document.createElement('div');

    // Adiciona os botões conforme as opções
    historia[passo].opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.textContent = opcao.texto;
        botao.addEventListener('click', () => atualizarConteudo(opcao.proximo));
        botoesDiv.appendChild(botao);
    });

    // Adiciona os elementos ao conteúdo principal
    conteudo.appendChild(imagem);
    conteudo.appendChild(descricao);
    conteudo.appendChild(botoesDiv);
}

// Inicializa o jogo no passo 0
atualizarConteudo(0);
