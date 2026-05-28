// ============================================
// BANCO DE PERGUNTAS - QUIZ BÍBLICO v2.0
// ============================================

const QUESTIONS_DB = {

    // ========================================
    // CRIANÇAS (4-8 anos) - Nível Fácil
    // ========================================
    children: {
        creation: [
            {
                question: "Quem criou o mundo?",
                options: ["Deus", "Moisés", "Abraão", "Noé"],
                correct: 0,
                explanation: "Deus criou os céus e a terra!",
                reference: "Gênesis 1:1",
                verse: "No princípio, Deus criou os céus e a terra."
            },
            {
                question: "O que Deus criou no primeiro dia?",
                options: ["A luz", "Os animais", "O homem", "As estrelas"],
                correct: 0,
                explanation: "Deus disse: 'Haja luz!' e houve luz.",
                reference: "Gênesis 1:3",
                verse: "Disse Deus: Haja luz. E houve luz."
            },
            {
                question: "De que Deus fez o primeiro homem?",
                options: ["Do pó da terra", "Da água", "Do fogo", "Da pedra"],
                correct: 0,
                explanation: "Deus formou Adão do pó da terra e soprou vida nele.",
                reference: "Gênesis 2:7",
                verse: "Então o Senhor Deus formou o homem do pó da terra."
            },
            {
                question: "Qual o nome da primeira mulher?",
                options: ["Eva", "Sara", "Maria", "Rute"],
                correct: 0,
                explanation: "Eva foi a primeira mulher criada por Deus.",
                reference: "Gênesis 3:20"
            },
            {
                question: "Em quantos dias Deus criou tudo?",
                options: ["6 dias", "3 dias", "7 dias", "10 dias"],
                correct: 0,
                explanation: "Deus criou tudo em 6 dias e descansou no sétimo.",
                reference: "Gênesis 2:2"
            },
            {
                question: "O que Deus criou no quarto dia?",
                options: ["Sol, lua e estrelas", "Os peixes", "As árvores", "O homem"],
                correct: 0,
                explanation: "No quarto dia, Deus criou o sol, a lua e as estrelas.",
                reference: "Gênesis 1:16"
            },
            {
                question: "Qual foi o jardim onde Adão e Eva moraram?",
                options: ["Éden", "Getsêmani", "Olivas", "Paraíso"],
                correct: 0,
                explanation: "Deus plantou o Jardim do Éden para Adão e Eva.",
                reference: "Gênesis 2:8"
            },
            {
                question: "Que fruta Adão e Eva NÃO podiam comer?",
                options: ["A fruta da árvore do conhecimento", "Maçã verde", "Banana", "Uva"],
                correct: 0,
                explanation: "Deus disse para não comerem da árvore do conhecimento do bem e do mal.",
                reference: "Gênesis 2:17"
            },
            {
                question: "O que Deus criou no segundo dia?",
                options: ["O céu (firmamento)", "Os animais", "As flores", "O homem"],
                correct: 0,
                explanation: "No segundo dia, Deus separou as águas e fez o céu.",
                reference: "Gênesis 1:6-8"
            },
            {
                question: "O que Deus fez no sétimo dia?",
                options: ["Descansou", "Criou o homem", "Fez os animais", "Criou a luz"],
                correct: 0,
                explanation: "No sétimo dia, Deus descansou de toda a sua obra.",
                reference: "Gênesis 2:2"
            }
        ],
        heroes: [
            {
                question: "Quem construiu uma arca grande?",
                options: ["Noé", "Moisés", "Davi", "Abraão"],
                correct: 0,
                explanation: "Noé construiu a arca para salvar os animais do dilúvio.",
                reference: "Gênesis 6:14"
            },
            {
                question: "Quem foi jogado na cova dos leões?",
                options: ["Daniel", "Jonas", "Davi", "Sansão"],
                correct: 0,
                explanation: "Daniel foi jogado na cova dos leões, mas Deus fechou a boca deles!",
                reference: "Daniel 6:16"
            },
            {
                question: "Quem matou o gigante Golias?",
                options: ["Davi", "Saul", "Sansão", "Josué"],
                correct: 0,
                explanation: "Davi, ainda menino, derrotou o gigante Golias com uma pedra.",
                reference: "1 Samuel 17:50"
            },
            {
                question: "Quem foi engolido por um grande peixe?",
                options: ["Jonas", "Pedro", "Paulo", "Noé"],
                correct: 0,
                explanation: "Jonas fugiu de Deus e foi engolido por um grande peixe.",
                reference: "Jonas 1:17"
            },
            {
                question: "Quem era muito forte e tinha cabelos compridos?",
                options: ["Sansão", "Davi", "Moisés", "Elias"],
                correct: 0,
                explanation: "Sansão tinha uma força enorme que vinha de Deus.",
                reference: "Juízes 16:17"
            },
            {
                question: "Quem abriu o Mar Vermelho?",
                options: ["Moisés", "Josué", "Elias", "Abraão"],
                correct: 0,
                explanation: "Deus usou Moisés para abrir o Mar Vermelho e salvar o povo!",
                reference: "Êxodo 14:21"
            },
            {
                question: "Quem foi o menino que Deus chamou de noite?",
                options: ["Samuel", "Davi", "Timóteo", "Josué"],
                correct: 0,
                explanation: "Deus chamou Samuel quando ele era ainda um menino no templo.",
                reference: "1 Samuel 3:10"
            },
            {
                question: "Quantos animais de cada espécie entraram na arca?",
                options: ["2", "3", "5", "10"],
                correct: 0,
                explanation: "De cada espécie, um casal entrou na arca de Noé.",
                reference: "Gênesis 7:2"
            },
            {
                question: "Quem lutou com um anjo a noite toda?",
                options: ["Jacó", "Moisés", "Abraão", "Josué"],
                correct: 0,
                explanation: "Jacó lutou com um anjo e recebeu o nome de Israel.",
                reference: "Gênesis 32:24-28"
            },
            {
                question: "Quem liderou o povo para entrar na Terra Prometida?",
                options: ["Josué", "Moisés", "Arão", "Calebe"],
                correct: 0,
                explanation: "Josué liderou o povo de Israel para entrar na Terra Prometida.",
                reference: "Josué 1:1-2"
            }
        ],
        jesus: [
            {
                question: "Onde Jesus nasceu?",
                options: ["Belém", "Nazaré", "Jerusalém", "Egito"],
                correct: 0,
                explanation: "Jesus nasceu em Belém, numa manjedoura.",
                reference: "Mateus 2:1"
            },
            {
                question: "Quem é a mãe de Jesus?",
                options: ["Maria", "Eva", "Sara", "Rute"],
                correct: 0,
                explanation: "Maria foi escolhida por Deus para ser a mãe de Jesus.",
                reference: "Lucas 1:30-31"
            },
            {
                question: "O que Jesus transformou em vinho?",
                options: ["Água", "Leite", "Suco", "Chá"],
                correct: 0,
                explanation: "O primeiro milagre de Jesus foi transformar água em vinho.",
                reference: "João 2:9"
            },
            {
                question: "Quantos pães Jesus usou para alimentar a multidão?",
                options: ["5", "3", "7", "10"],
                correct: 0,
                explanation: "Jesus alimentou mais de 5 mil pessoas com 5 pães e 2 peixes!",
                reference: "Mateus 14:17"
            },
            {
                question: "Jesus andou sobre o quê?",
                options: ["A água", "O fogo", "As nuvens", "As pedras"],
                correct: 0,
                explanation: "Jesus andou sobre a água, mostrando seu poder divino!",
                reference: "Mateus 14:25"
            },
            {
                question: "Quem batizou Jesus?",
                options: ["João Batista", "Pedro", "Paulo", "Moisés"],
                correct: 0,
                explanation: "João Batista batizou Jesus no rio Jordão.",
                reference: "Mateus 3:13"
            },
            {
                question: "Qual animal Jesus montou ao entrar em Jerusalém?",
                options: ["Um jumentinho", "Um cavalo", "Um camelo", "Um boi"],
                correct: 0,
                explanation: "Jesus entrou em Jerusalém montado em um jumentinho.",
                reference: "Mateus 21:7"
            },
            {
                question: "O que os anjos disseram aos pastores quando Jesus nasceu?",
                options: ["Não tenham medo!", "Fujam!", "Durmam!", "Chorem!"],
                correct: 0,
                explanation: "Os anjos trouxeram boas novas de grande alegria!",
                reference: "Lucas 2:10"
            },
            {
                question: "Quem trouxe presentes para o bebê Jesus?",
                options: ["Os reis magos", "Os pastores", "Os anjos", "Os soldados"],
                correct: 0,
                explanation: "Os reis magos trouxeram ouro, incenso e mirra.",
                reference: "Mateus 2:11"
            },
            {
                question: "Onde Jesus cresceu?",
                options: ["Nazaré", "Belém", "Jerusalém", "Egito"],
                correct: 0,
                explanation: "Jesus cresceu na cidade de Nazaré.",
                reference: "Lucas 2:39-40"
            }
        ],
        animals: [
            {
                question: "Qual animal falou com Balaão?",
                options: ["Uma jumenta", "Um leão", "Uma cobra", "Um cordeiro"],
                correct: 0,
                explanation: "Deus fez a jumenta de Balaão falar!",
                reference: "Números 22:28"
            },
            {
                question: "Que animal enganou Eva no jardim?",
                options: ["A serpente", "O leão", "O lobo", "A raposa"],
                correct: 0,
                explanation: "A serpente enganou Eva no Jardim do Éden.",
                reference: "Gênesis 3:1"
            },
            {
                question: "Jesus é chamado de 'Cordeiro de...'?",
                options: ["Deus", "Maria", "Israel", "Judá"],
                correct: 0,
                explanation: "Jesus é o Cordeiro de Deus que tira o pecado do mundo.",
                reference: "João 1:29"
            },
            {
                question: "Qual ave trouxe comida para Elias?",
                options: ["Corvos", "Pombas", "Águias", "Galinhas"],
                correct: 0,
                explanation: "Deus mandou corvos levarem pão e carne para Elias.",
                reference: "1 Reis 17:6"
            },
            {
                question: "Que animal apareceu quando Jesus foi batizado?",
                options: ["Uma pomba", "Um cordeiro", "Uma águia", "Um peixe"],
                correct: 0,
                explanation: "O Espírito Santo desceu como uma pomba sobre Jesus.",
                reference: "Mateus 3:16"
            },
            {
                question: "Na arca de Noé, qual ave trouxe um ramo de oliveira?",
                options: ["A pomba", "O corvo", "A águia", "O pardal"],
                correct: 0,
                explanation: "A pomba voltou com um ramo de oliveira.",
                reference: "Gênesis 8:11"
            },
            {
                question: "Que animal Sansão matou com as mãos?",
                options: ["Um leão", "Um urso", "Uma cobra", "Um lobo"],
                correct: 0,
                explanation: "Sansão matou um leão jovem com suas próprias mãos!",
                reference: "Juízes 14:6"
            },
            {
                question: "Que animal Jesus disse que é mais fácil passar pelo fundo de uma agulha?",
                options: ["Um camelo", "Um elefante", "Um cavalo", "Um boi"],
                correct: 0,
                explanation: "Jesus usou essa comparação para falar sobre a riqueza.",
                reference: "Mateus 19:24"
            }
        ]
    },

    // ========================================
    // JUNIORES (9-12 anos) - Nível Médio
    // ========================================
    kids: {
        patriarchs: [
            {
                question: "Quantos filhos Jacó teve?",
                options: ["12", "10", "7", "15"],
                correct: 0,
                explanation: "Jacó teve 12 filhos, que formaram as 12 tribos de Israel.",
                reference: "Gênesis 35:22"
            },
            {
                question: "Quem vendeu o seu direito de primogenitura por um prato de lentilhas?",
                options: ["Esaú", "Jacó", "Isaque", "José"],
                correct: 0,
                explanation: "Esaú vendeu seu direito de primogenitura a Jacó.",
                reference: "Gênesis 25:33"
            },
            {
                question: "Qual o nome que Deus deu a Abrão?",
                options: ["Abraão", "Israel", "Jacó", "Moisés"],
                correct: 0,
                explanation: "Deus mudou o nome de Abrão para Abraão, que significa 'pai de multidões'.",
                reference: "Gênesis 17:5"
            },
            {
                question: "Quem foi vendido como escravo pelos irmãos?",
                options: ["José", "Benjamim", "Judá", "Rúben"],
                correct: 0,
                explanation: "José foi vendido pelos irmãos, mas Deus o fez governador do Egito.",
                reference: "Gênesis 37:28"
            },
            {
                question: "Que filho Abraão quase sacrificou?",
                options: ["Isaque", "Ismael", "Jacó", "Esaú"],
                correct: 0,
                explanation: "Deus pediu que Abraão oferecesse Isaque, mas providenciou um cordeiro.",
                reference: "Gênesis 22:2"
            },
            {
                question: "Quem era a esposa de Abraão?",
                options: ["Sara", "Rebeca", "Raquel", "Lia"],
                correct: 0,
                explanation: "Sara era a esposa de Abraão e mãe de Isaque.",
                reference: "Gênesis 17:15"
            },
            {
                question: "Por que José recebeu uma túnica colorida?",
                options: ["Porque era o filho favorito", "Porque era o mais velho", "Porque trabalhou mais", "Porque pediu ao pai"],
                correct: 0,
                explanation: "Jacó amava mais a José e lhe deu uma túnica especial.",
                reference: "Gênesis 37:3"
            },
            {
                question: "Quem era a esposa de Isaque?",
                options: ["Rebeca", "Sara", "Raquel", "Lia"],
                correct: 0,
                explanation: "Rebeca foi a esposa escolhida para Isaque.",
                reference: "Gênesis 24:67"
            },
            {
                question: "Quem sonhou com uma escada que alcançava o céu?",
                options: ["Jacó", "José", "Abraão", "Daniel"],
                correct: 0,
                explanation: "Jacó sonhou com uma escada com anjos subindo e descendo.",
                reference: "Gênesis 28:12"
            },
            {
                question: "Quantos anos tinha Abraão quando Isaque nasceu?",
                options: ["100 anos", "80 anos", "70 anos", "90 anos"],
                correct: 0,
                explanation: "Abraão tinha 100 anos quando seu filho Isaque nasceu.",
                reference: "Gênesis 21:5"
            }
        ],
        exodus: [
            {
                question: "Quantas pragas Deus enviou ao Egito?",
                options: ["10", "7", "12", "5"],
                correct: 0,
                explanation: "Deus enviou 10 pragas ao Egito para libertar seu povo.",
                reference: "Êxodo 7-12"
            },
            {
                question: "Em que monte Moisés recebeu os Dez Mandamentos?",
                options: ["Monte Sinai", "Monte Carmelo", "Monte Sião", "Monte Oliveiras"],
                correct: 0,
                explanation: "Moisés recebeu os Dez Mandamentos no Monte Sinai.",
                reference: "Êxodo 19:20"
            },
            {
                question: "O que caía do céu para alimentar os israelitas no deserto?",
                options: ["Maná", "Pão", "Frutas", "Arroz"],
                correct: 0,
                explanation: "Deus enviou maná do céu para alimentar os israelitas.",
                reference: "Êxodo 16:15"
            },
            {
                question: "Qual foi a última praga do Egito?",
                options: ["Morte dos primogênitos", "Gafanhotos", "Trevas", "Sapos"],
                correct: 0,
                explanation: "A última praga foi a morte dos primogênitos do Egito.",
                reference: "Êxodo 12:29"
            },
            {
                question: "Como o bebê Moisés foi salvo?",
                options: ["Em um cesto no rio", "Escondido em uma caverna", "Levado para outro país", "Protegido por anjos"],
                correct: 0,
                explanation: "Sua mãe colocou Moisés em um cesto no rio Nilo.",
                reference: "Êxodo 2:3"
            },
            {
                question: "Quantos anos os israelitas ficaram no deserto?",
                options: ["40 anos", "20 anos", "10 anos", "50 anos"],
                correct: 0,
                explanation: "Os israelitas ficaram 40 anos vagando no deserto.",
                reference: "Números 14:33"
            },
            {
                question: "O que os israelitas fizeram enquanto Moisés estava no monte?",
                options: ["Fizeram um bezerro de ouro", "Construíram casas", "Plantaram jardins", "Oraram"],
                correct: 0,
                explanation: "O povo fez um bezerro de ouro para adorar.",
                reference: "Êxodo 32:4"
            },
            {
                question: "Quem ajudava Moisés a segurar os braços na batalha?",
                options: ["Arão e Hur", "Josué e Calebe", "Pedro e João", "Davi e Saul"],
                correct: 0,
                explanation: "Arão e Hur seguraram os braços de Moisés até a vitória.",
                reference: "Êxodo 17:12"
            },
            {
                question: "Qual foi a primeira praga do Egito?",
                options: ["Água em sangue", "Trevas", "Gafanhotos", "Sapos"],
                correct: 0,
                explanation: "A primeira praga transformou as águas do Nilo em sangue.",
                reference: "Êxodo 7:20"
            },
            {
                question: "Quem era o irmão de Moisés?",
                options: ["Arão", "Josué", "Calebe", "Eliseu"],
                correct: 0,
                explanation: "Arão era o irmão mais velho de Moisés e o ajudava a falar.",
                reference: "Êxodo 4:14"
            }
        ],
        miracles: [
            {
                question: "Quantos leprosos Jesus curou de uma vez?",
                options: ["10", "5", "7", "3"],
                correct: 0,
                explanation: "Jesus curou 10 leprosos, mas só 1 voltou para agradecer.",
                reference: "Lucas 17:12-17"
            },
            {
                question: "Quem Jesus ressuscitou em Betânia?",
                options: ["Lázaro", "Pedro", "João", "Tiago"],
                correct: 0,
                explanation: "Jesus ressuscitou Lázaro depois de 4 dias morto.",
                reference: "João 11:43-44"
            },
            {
                question: "Qual discípulo andou sobre a água com Jesus?",
                options: ["Pedro", "João", "Tiago", "André"],
                correct: 0,
                explanation: "Pedro andou sobre a água, mas afundou quando duvidou.",
                reference: "Mateus 14:29"
            },
            {
                question: "Jesus acalmou uma grande...",
                options: ["Tempestade", "Multidão", "Guerra", "Fome"],
                correct: 0,
                explanation: "Jesus acalmou uma tempestade no mar com apenas uma palavra.",
                reference: "Marcos 4:39"
            },
            {
                question: "Quantas cestas sobraram na multiplicação dos pães?",
                options: ["12", "5", "7", "3"],
                correct: 0,
                explanation: "Sobraram 12 cestos cheios depois que todos comeram.",
                reference: "Mateus 14:20"
            },
            {
                question: "Quem Jesus curou no tanque de Betesda?",
                options: ["Um paralítico", "Um cego", "Um surdo", "Um leproso"],
                correct: 0,
                explanation: "Jesus curou um homem que estava paralítico há 38 anos.",
                reference: "João 5:5-9"
            },
            {
                question: "O que Jesus fez na tempestade enquanto estava no barco?",
                options: ["Dormia", "Orava", "Pescava", "Cantava"],
                correct: 0,
                explanation: "Jesus estava dormindo tranquilamente durante a tempestade!",
                reference: "Marcos 4:38"
            },
            {
                question: "Jesus curou um homem cego usando o quê?",
                options: ["Lodo (barro)", "Água", "Óleo", "Suas mãos apenas"],
                correct: 0,
                explanation: "Jesus fez lodo com saliva e colocou nos olhos do cego.",
                reference: "João 9:6"
            }
        ],
        parables: [
            {
                question: "Na parábola do Filho Pródigo, o que o filho pediu ao pai?",
                options: ["Sua herança", "Uma casa", "Um cavalo", "Comida"],
                correct: 0,
                explanation: "O filho pediu sua herança, gastou tudo e depois voltou arrependido.",
                reference: "Lucas 15:12"
            },
            {
                question: "Na parábola do Bom Samaritano, quem ajudou o homem ferido?",
                options: ["Um samaritano", "Um sacerdote", "Um levita", "Um fariseu"],
                correct: 0,
                explanation: "O samaritano foi o único que parou para ajudar.",
                reference: "Lucas 10:33"
            },
            {
                question: "Na parábola da ovelha perdida, quantas ovelhas o pastor tinha?",
                options: ["100", "50", "200", "10"],
                correct: 0,
                explanation: "O pastor tinha 100 ovelhas e deixou 99 para buscar a perdida.",
                reference: "Lucas 15:4"
            },
            {
                question: "Na parábola dos talentos, o que o servo mau fez?",
                options: ["Enterrou o talento", "Gastou tudo", "Perdeu", "Deu a outro"],
                correct: 0,
                explanation: "O servo preguiçoso enterrou o talento em vez de multiplicá-lo.",
                reference: "Mateus 25:25"
            },
            {
                question: "Quem construiu a casa sobre a rocha?",
                options: ["O homem sábio", "O homem rico", "O homem forte", "O homem alto"],
                correct: 0,
                explanation: "O homem sábio construiu sobre a rocha e sua casa resistiu.",
                reference: "Mateus 7:24"
            },
            {
                question: "O que o semeador lançou?",
                options: ["Sementes", "Pedras", "Água", "Redes"],
                correct: 0,
                explanation: "As sementes representam a Palavra de Deus.",
                reference: "Mateus 13:3"
            },
            {
                question: "Na parábola das 10 virgens, quantas eram prudentes?",
                options: ["5", "3", "7", "10"],
                correct: 0,
                explanation: "5 virgens eram prudentes e 5 eram néscias (imprudentes).",
                reference: "Mateus 25:2"
            },
            {
                question: "Na parábola da moeda perdida, a mulher tinha quantas moedas?",
                options: ["10", "5", "20", "3"],
                correct: 0,
                explanation: "A mulher tinha 10 moedas e procurou até achar a que perdeu.",
                reference: "Lucas 15:8"
            }
        ]
    },

    // ========================================
    // ADOLESCENTES (13-17 anos) - Nível Difícil
    // ========================================
    teens: {
        kings: [
            {
                question: "Quem foi o primeiro rei de Israel?",
                options: ["Saul", "Davi", "Salomão", "Roboão"],
                correct: 0,
                explanation: "Saul foi ungido por Samuel como o primeiro rei de Israel.",
                reference: "1 Samuel 10:1"
            },
            {
                question: "Por que Deus rejeitou Saul como rei?",
                options: ["Desobediência", "Idolatria", "Adultério", "Assassinato"],
                correct: 0,
                explanation: "Saul desobedeceu a Deus ao não destruir completamente os amalequitas.",
                reference: "1 Samuel 15:23"
            },
            {
                question: "Quantos provérbios Salomão escreveu?",
                options: ["3.000", "1.000", "500", "5.000"],
                correct: 0,
                explanation: "Salomão proferiu 3.000 provérbios e compôs 1.005 cânticos.",
                reference: "1 Reis 4:32"
            },
            {
                question: "Qual rei mandou construir o primeiro templo?",
                options: ["Salomão", "Davi", "Ezequias", "Josias"],
                correct: 0,
                explanation: "Salomão construiu o primeiro Templo em Jerusalém.",
                reference: "1 Reis 6:1"
            },
            {
                question: "Qual profeta confrontou o rei Acabe?",
                options: ["Elias", "Eliseu", "Isaías", "Jeremias"],
                correct: 0,
                explanation: "Elias confrontou Acabe e os profetas de Baal no Monte Carmelo.",
                reference: "1 Reis 18:17-18"
            },
            {
                question: "Quem era a esposa má do rei Acabe?",
                options: ["Jezabel", "Dalila", "Atalia", "Herodias"],
                correct: 0,
                explanation: "Jezabel levou Acabe à idolatria e perseguiu os profetas.",
                reference: "1 Reis 16:31"
            },
            {
                question: "Qual rei de Judá encontrou o Livro da Lei no templo?",
                options: ["Josias", "Ezequias", "Asa", "Josafá"],
                correct: 0,
                explanation: "Josias encontrou o Livro da Lei e promoveu uma grande reforma.",
                reference: "2 Reis 22:8"
            },
            {
                question: "Com que instrumento Davi tocava para o rei Saul?",
                options: ["Harpa", "Flauta", "Trombeta", "Tambor"],
                correct: 0,
                explanation: "Davi tocava harpa para acalmar o espírito perturbado de Saul.",
                reference: "1 Samuel 16:23"
            },
            {
                question: "Qual rei pediu sabedoria a Deus em vez de riquezas?",
                options: ["Salomão", "Davi", "Ezequias", "Josafá"],
                correct: 0,
                explanation: "Salomão pediu sabedoria e Deus lhe deu também riquezas e honra.",
                reference: "1 Reis 3:9-12"
            },
            {
                question: "Quem foi o último rei de Judá antes do exílio?",
                options: ["Zedequias", "Josias", "Manassés", "Jeoaquim"],
                correct: 0,
                explanation: "Zedequias foi o último rei antes de Jerusalém ser destruída.",
                reference: "2 Reis 25:1-7"
            }
        ],
        prophets: [
            {
                question: "Quem foi levado ao céu em um carro de fogo?",
                options: ["Elias", "Eliseu", "Enoque", "Moisés"],
                correct: 0,
                explanation: "Elias foi levado ao céu em um carro de fogo com cavalos de fogo.",
                reference: "2 Reis 2:11"
            },
            {
                question: "Qual profeta viu o vale de ossos secos?",
                options: ["Ezequiel", "Jeremias", "Isaías", "Daniel"],
                correct: 0,
                explanation: "Ezequiel teve a visão do vale de ossos secos que voltaram à vida.",
                reference: "Ezequiel 37:1-10"
            },
            {
                question: "Qual profeta interpretou a escrita na parede?",
                options: ["Daniel", "Ezequiel", "Isaías", "Jeremias"],
                correct: 0,
                explanation: "Daniel interpretou 'MENE, MENE, TEQUEL, UFARSIM'.",
                reference: "Daniel 5:25-28"
            },
            {
                question: "Qual profeta foi chamado de 'profeta chorão'?",
                options: ["Jeremias", "Isaías", "Amós", "Oseias"],
                correct: 0,
                explanation: "Jeremias é conhecido como o profeta chorão.",
                reference: "Jeremias 9:1"
            },
            {
                question: "Quem profetizou que Jesus nasceria em Belém?",
                options: ["Miqueias", "Isaías", "Joel", "Amós"],
                correct: 0,
                explanation: "Miqueias profetizou que o Messias nasceria em Belém.",
                reference: "Miqueias 5:2"
            },
            {
                question: "Quantos amigos de Daniel foram jogados na fornalha?",
                options: ["3", "2", "4", "5"],
                correct: 0,
                explanation: "Sadraque, Mesaque e Abede-Nego foram jogados na fornalha ardente.",
                reference: "Daniel 3:19-20"
            },
            {
                question: "Qual profeta se casou com uma mulher infiel por ordem de Deus?",
                options: ["Oseias", "Amós", "Joel", "Malaquias"],
                correct: 0,
                explanation: "Oseias se casou com Gômer como símbolo do amor de Deus por Israel.",
                reference: "Oseias 1:2-3"
            },
            {
                question: "Qual profeta desafiou 450 profetas de Baal?",
                options: ["Elias", "Eliseu", "Samuel", "Natan"],
                correct: 0,
                explanation: "Elias desafiou os profetas de Baal no Monte Carmelo.",
                reference: "1 Reis 18:19"
            }
        ],
        newTestament: [
            {
                question: "Quantos discípulos Jesus escolheu?",
                options: ["12", "10", "7", "15"],
                correct: 0,
                explanation: "Jesus escolheu 12 discípulos (apóstolos).",
                reference: "Marcos 3:14"
            },
            {
                question: "Quem traiu Jesus?",
                options: ["Judas Iscariotes", "Pedro", "Tomé", "André"],
                correct: 0,
                explanation: "Judas traiu Jesus por 30 moedas de prata.",
                reference: "Mateus 26:15"
            },
            {
                question: "Quantas vezes Pedro negou Jesus?",
                options: ["3", "2", "4", "1"],
                correct: 0,
                explanation: "Pedro negou Jesus três vezes antes do galo cantar.",
                reference: "Mateus 26:75"
            },
            {
                question: "Qual era a profissão de Paulo antes de se converter?",
                options: ["Fariseu/Perseguidor", "Pescador", "Carpinteiro", "Cobrador de impostos"],
                correct: 0,
                explanation: "Paulo era fariseu e perseguia os cristãos.",
                reference: "Atos 22:3-4"
            },
            {
                question: "Onde Paulo se converteu?",
                options: ["No caminho de Damasco", "Em Jerusalém", "Em Roma", "Em Atenas"],
                correct: 0,
                explanation: "Paulo teve um encontro com Jesus no caminho de Damasco.",
                reference: "Atos 9:3-6"
            },
            {
                question: "Quem disse 'Se não vir, não crerei'?",
                options: ["Tomé", "Pedro", "Felipe", "André"],
                correct: 0,
                explanation: "Tomé duvidou da ressurreição até ver Jesus.",
                reference: "João 20:25"
            },
            {
                question: "Qual o primeiro mártir cristão?",
                options: ["Estêvão", "Tiago", "Pedro", "Paulo"],
                correct: 0,
                explanation: "Estêvão foi o primeiro mártir, apedrejado por sua fé.",
                reference: "Atos 7:59"
            },
            {
                question: "Em que dia da semana Jesus ressuscitou?",
                options: ["Domingo", "Sábado", "Sexta", "Segunda"],
                correct: 0,
                explanation: "Jesus ressuscitou no primeiro dia da semana (domingo).",
                reference: "Marcos 16:9"
            },
            {
                question: "Quem ajudou Jesus a carregar a cruz?",
                options: ["Simão de Cirene", "Pedro", "João", "José de Arimateia"],
                correct: 0,
                explanation: "Simão de Cirene foi obrigado a ajudar Jesus com a cruz.",
                reference: "Marcos 15:21"
            },
            {
                question: "Onde aconteceu o Pentecostes?",
                options: ["Jerusalém", "Roma", "Antioquia", "Damasco"],
                correct: 0,
                explanation: "O Espírito Santo desceu sobre os discípulos em Jerusalém.",
                reference: "Atos 2:1-4"
            }
        ],
        wisdom: [
            {
                question: "Quem escreveu a maioria dos Salmos?",
                options: ["Davi", "Salomão", "Moisés", "Asafe"],
                correct: 0,
                explanation: "Davi é creditado como autor de cerca de 73 Salmos.",
                reference: "Salmos"
            },
            {
                question: "Qual é o versículo mais curto da Bíblia?",
                options: ["Jesus chorou", "Deus é amor", "Orai sempre", "Crê em Deus"],
                correct: 0,
                explanation: "'Jesus chorou' (João 11:35) é o versículo mais curto.",
                reference: "João 11:35"
            },
            {
                question: "Quantos livros tem a Bíblia?",
                options: ["66", "72", "55", "60"],
                correct: 0,
                explanation: "A Bíblia tem 66 livros: 39 no AT e 27 no NT.",
                reference: "Bíblia"
            },
            {
                question: "Qual é o maior capítulo da Bíblia?",
                options: ["Salmo 119", "Salmo 23", "Gênesis 1", "Isaías 53"],
                correct: 0,
                explanation: "O Salmo 119 tem 176 versículos.",
                reference: "Salmo 119"
            },
            {
                question: "Complete: 'O Senhor é meu pastor e...'",
                options: ["Nada me faltará", "Sempre me guiará", "Me protegerá", "Me abençoará"],
                correct: 0,
                explanation: "Esse é o início do famoso Salmo 23 de Davi.",
                reference: "Salmo 23:1"
            },
            {
                question: "Quem disse 'Eu sou o caminho, a verdade e a vida'?",
                options: ["Jesus", "Paulo", "Pedro", "João"],
                correct: 0,
                explanation: "Jesus disse essa frase aos seus discípulos.",
                reference: "João 14:6"
            },
            {
                question: "Qual é o menor livro do Antigo Testamento?",
                options: ["Obadias", "Jonas", "Naum", "Ageu"],
                correct: 0,
                explanation: "Obadias tem apenas 21 versículos.",
                reference: "Obadias"
            },
            {
                question: "Quem escreveu o livro de Provérbios?",
                options: ["Salomão (maioria)", "Davi", "Moisés", "Samuel"],
                correct: 0,
                explanation: "Salomão é o principal autor do livro de Provérbios.",
                reference: "Provérbios 1:1"
            }
        ]
    },

    // ========================================
    // ADULTOS (18+) - Nível Expert
    // ========================================
    adults: {
        theology: [
            {
                question: "Qual conceito descreve a doutrina de que Deus conhece todas as coisas?",
                options: ["Onisciência", "Onipotência", "Onipresença", "Imutabilidade"],
                correct: 0,
                explanation: "A onisciência é o atributo de Deus de saber tudo.",
                reference: "Salmo 139:1-6"
            },
            {
                question: "O que significa 'justificação' no contexto paulino?",
                options: ["Ser declarado justo pela fé", "Tornar-se perfeito", "Ser batizado", "Obedecer a Lei"],
                correct: 0,
                explanation: "A justificação é Deus declarar o pecador justo com base na fé em Cristo.",
                reference: "Romanos 3:24"
            },
            {
                question: "O que é a 'kenosis' cristológica?",
                options: ["O esvaziamento voluntário de Cristo", "A ascensão", "O batismo", "A transfiguração"],
                correct: 0,
                explanation: "Kenosis refere-se ao auto-esvaziamento de Cristo em Filipenses 2:7.",
                reference: "Filipenses 2:6-8"
            },
            {
                question: "Qual heresia negava a natureza humana de Cristo?",
                options: ["Docetismo", "Arianismo", "Pelagianismo", "Gnosticismo"],
                correct: 0,
                explanation: "O Docetismo ensinava que Cristo apenas parecia ter corpo humano.",
                reference: "1 João 4:2-3"
            },
            {
                question: "Qual pacto Deus fez com Noé e qual foi seu sinal?",
                options: ["Nunca mais destruir com água - Arco-íris", "Muitos filhos - Circuncisão", "Terra prometida - Altar", "Proteção - Cordeiro"],
                correct: 0,
                explanation: "O arco-íris é o sinal da aliança de Deus com Noé.",
                reference: "Gênesis 9:13"
            },
            {
                question: "O que significa 'propiciação' em Romanos 3:25?",
                options: ["Satisfação da justiça divina por Cristo", "Perdão sem consequências", "Purificação ritual", "Oferta de grãos"],
                correct: 0,
                explanation: "Cristo satisfez a ira justa de Deus contra o pecado.",
                reference: "Romanos 3:25"
            },
            {
                question: "Qual a doutrina da 'Trindade Econômica'?",
                options: ["Como as pessoas da Trindade atuam na salvação", "Finanças da igreja", "Pobreza voluntária", "Dízimos e ofertas"],
                correct: 0,
                explanation: "A Trindade Econômica descreve as funções de cada pessoa no plano salvífico.",
                reference: "Teologia Sistemática"
            },
            {
                question: "O que o termo 'soteriologia' estuda?",
                options: ["A doutrina da salvação", "Os anjos", "O fim dos tempos", "A criação"],
                correct: 0,
                explanation: "Soteriologia é o estudo teológico da salvação.",
                reference: "Teologia"
            }
        ],
        history: [
            {
                question: "Em que ano o Templo de Salomão foi destruído pela primeira vez?",
                options: ["586 a.C.", "70 d.C.", "722 a.C.", "333 a.C."],
                correct: 0,
                explanation: "O Templo foi destruído por Nabucodonosor em 586 a.C.",
                reference: "2 Reis 25:8-9"
            },
            {
                question: "Quem decretou que os judeus podiam voltar do exílio?",
                options: ["Ciro, rei da Pérsia", "Nabucodonosor", "Alexandre Magno", "César Augusto"],
                correct: 0,
                explanation: "O decreto de Ciro permitiu o retorno dos judeus.",
                reference: "Esdras 1:1-3"
            },
            {
                question: "Quem escreveu Atos dos Apóstolos?",
                options: ["Lucas", "Paulo", "Pedro", "João"],
                correct: 0,
                explanation: "Lucas escreveu tanto o Evangelho de Lucas quanto Atos.",
                reference: "Atos 1:1"
            },
            {
                question: "Quantas viagens missionárias Paulo realizou?",
                options: ["3 (possivelmente 4)", "2", "5", "1"],
                correct: 0,
                explanation: "Paulo fez 3 viagens registradas em Atos.",
                reference: "Atos 13-21"
            },
            {
                question: "Em que cidade Paulo pregou no Areópago?",
                options: ["Atenas", "Corinto", "Roma", "Éfeso"],
                correct: 0,
                explanation: "Paulo pregou sobre o 'Deus Desconhecido' em Atenas.",
                reference: "Atos 17:22"
            },
            {
                question: "Quem liderou a reconstrução dos muros de Jerusalém?",
                options: ["Neemias", "Esdras", "Zorobabel", "Josué"],
                correct: 0,
                explanation: "Neemias reconstruiu os muros em apenas 52 dias.",
                reference: "Neemias 6:15"
            },
            {
                question: "Em que ano Jerusalém foi destruída pelos romanos?",
                options: ["70 d.C.", "586 a.C.", "33 d.C.", "135 d.C."],
                correct: 0,
                explanation: "O general Tito destruiu Jerusalém e o Segundo Templo em 70 d.C.",
                reference: "História"
            },
            {
                question: "Quem governava quando Jesus nasceu?",
                options: ["Herodes, o Grande", "Pilatos", "César Augusto", "Nero"],
                correct: 0,
                explanation: "Herodes, o Grande, governava a Judeia quando Jesus nasceu.",
                reference: "Mateus 2:1"
            }
        ],
        epistles: [
            {
                question: "Qual é o tema central de Romanos?",
                options: ["A justificação pela fé", "O amor fraternal", "A volta de Cristo", "A organização da igreja"],
                correct: 0,
                explanation: "Romanos apresenta a doutrina da salvação pela fé.",
                reference: "Romanos 1:17"
            },
            {
                question: "A quem Paulo escreveu as Epístolas Pastorais?",
                options: ["Timóteo e Tito", "Pedro e João", "Filemom e Tito", "Barnabé e Silas"],
                correct: 0,
                explanation: "1 e 2 Timóteo e Tito são as Epístolas Pastorais.",
                reference: "1 Timóteo, 2 Timóteo, Tito"
            },
            {
                question: "Em qual carta Paulo fala sobre a 'armadura de Deus'?",
                options: ["Efésios", "Colossenses", "Filipenses", "Romanos"],
                correct: 0,
                explanation: "A armadura de Deus está em Efésios 6:10-18.",
                reference: "Efésios 6:10-18"
            },
            {
                question: "Qual carta foi escrita a um dono de escravo?",
                options: ["Filemom", "Tito", "Colossenses", "Hebreus"],
                correct: 0,
                explanation: "Paulo pediu a Filemom que recebesse Onésimo de volta.",
                reference: "Filemom 1:10-16"
            },
            {
                question: "O 'capítulo do amor' está em qual livro?",
                options: ["1 Coríntios 13", "Romanos 8", "João 3", "Efésios 5"],
                correct: 0,
                explanation: "1 Coríntios 13 é o capítulo do amor.",
                reference: "1 Coríntios 13"
            },
            {
                question: "Qual epístola enfatiza que fé sem obras é morta?",
                options: ["Tiago", "Romanos", "Gálatas", "Hebreus"],
                correct: 0,
                explanation: "Tiago 2:26 diz que 'a fé sem obras é morta'.",
                reference: "Tiago 2:17-26"
            },
            {
                question: "Qual carta Paulo escreveu estando preso e é chamada de 'Epístola da Alegria'?",
                options: ["Filipenses", "Efésios", "Colossenses", "Filemom"],
                correct: 0,
                explanation: "Filipenses é a carta da alegria, escrita na prisão.",
                reference: "Filipenses 1:4"
            },
            {
                question: "Quem é o autor do livro de Hebreus?",
                options: ["Desconhecido (debatido)", "Paulo certamente", "Pedro", "Lucas"],
                correct: 0,
                explanation: "A autoria de Hebreus é debatida até hoje entre os estudiosos.",
                reference: "Hebreus"
            }
        ],
        prophecy: [
            {
                question: "Qual profecia de Isaías é conhecida como o 'Servo Sofredor'?",
                options: ["Isaías 53", "Isaías 7", "Isaías 40", "Isaías 9"],
                correct: 0,
                explanation: "Isaías 53 descreve detalhadamente o sofrimento do Messias.",
                reference: "Isaías 53"
            },
            {
                question: "O que representam os 4 cavaleiros do Apocalipse?",
                options: ["Conquista, Guerra, Fome e Morte", "Fé, Esperança, Amor e Paz", "Norte, Sul, Leste e Oeste", "As 4 estações"],
                correct: 0,
                explanation: "Os 4 cavaleiros representam juízos sobre a terra.",
                reference: "Apocalipse 6:1-8"
            },
            {
                question: "Quantas igrejas recebem cartas no Apocalipse?",
                options: ["7", "12", "5", "10"],
                correct: 0,
                explanation: "Jesus ditou cartas a 7 igrejas da Ásia Menor.",
                reference: "Apocalipse 2-3"
            },
            {
                question: "Na visão de Daniel, a cabeça de ouro representava qual império?",
                options: ["Babilônico", "Romano", "Persa", "Grego"],
                correct: 0,
                explanation: "A cabeça de ouro representava Nabucodonosor e a Babilônia.",
                reference: "Daniel 2:38"
            },
            {
                question: "Qual profeta previu a traição por 30 moedas de prata?",
                options: ["Zacarias", "Isaías", "Miqueias", "Malaquias"],
                correct: 0,
                explanation: "Zacarias profetizou sobre as 30 moedas de prata.",
                reference: "Zacarias 11:12-13"
            },
            {
                question: "O número 666 no Apocalipse se refere a:",
                options: ["O número da besta/anticristo", "O número de demônios", "Anos de tribulação", "Profetas falsos"],
                correct: 0,
                explanation: "666 é o número da besta em Apocalipse.",
                reference: "Apocalipse 13:18"
            },
            {
                question: "Em que livro está a profecia das '70 semanas'?",
                options: ["Daniel", "Apocalipse", "Isaías", "Ezequiel"],
                correct: 0,
                explanation: "As 70 semanas de Daniel profetizam sobre o Messias.",
                reference: "Daniel 9:24-27"
            },
            {
                question: "Qual é o nome do lugar da batalha final no Apocalipse?",
                options: ["Armagedom", "Gólgota", "Megido", "Babilônia"],
                correct: 0,
                explanation: "Armagedom é mencionado como o local da grande batalha final.",
                reference: "Apocalipse 16:16"
            }
        ]
    },

    // ========================================
    // TEÓLOGOS (Avançado) - Nível Mestre
    // ========================================
    scholars: {
        languages: [
            {
                question: "Qual é o significado da palavra hebraica 'Elohim'?",
                options: ["Deus (plural majestático)", "Senhor", "Santo", "Eterno"],
                correct: 0,
                explanation: "Elohim é a forma plural de El, expressando a majestade de Deus.",
                reference: "Gênesis 1:1"
            },
            {
                question: "O que significa 'Tetelestai' (τετέλεσται)?",
                options: ["Está consumado/pago", "Eu morro", "Pai, perdoa-os", "Tenho sede"],
                correct: 0,
                explanation: "Tetelestai era um termo comercial significando 'dívida paga'.",
                reference: "João 19:30"
            },
            {
                question: "Qual a diferença entre 'agape' e 'phileo'?",
                options: ["Agape = incondicional; Phileo = fraternal", "São sinônimos", "Agape = amizade; Phileo = romance", "Agape = ódio; Phileo = amor"],
                correct: 0,
                explanation: "Agape é amor sacrificial; Phileo é amor de afeição.",
                reference: "João 21:15-17"
            },
            {
                question: "O tetragrama YHWH é traduzido como:",
                options: ["SENHOR (Javé/Jeová)", "Deus", "Altíssimo", "Santo"],
                correct: 0,
                explanation: "YHWH é o nome pessoal de Deus, revelado a Moisés.",
                reference: "Êxodo 3:14"
            },
            {
                question: "Em qual língua a maior parte do AT foi escrita?",
                options: ["Hebraico", "Grego", "Aramaico", "Latim"],
                correct: 0,
                explanation: "O AT foi escrito majoritariamente em hebraico.",
                reference: "Antigo Testamento"
            },
            {
                question: "O que significa 'Maranata'?",
                options: ["Vem, Senhor nosso!", "Deus é grande", "Aleluia", "Amém"],
                correct: 0,
                explanation: "Maranata é expressão aramaica: 'Vem, Senhor nosso!'",
                reference: "1 Coríntios 16:22"
            },
            {
                question: "O que 'parakletos' significa em João 14:16?",
                options: ["Consolador/Advogado", "Profeta", "Anjo", "Mestre"],
                correct: 0,
                explanation: "Parakletos refere-se ao Espírito Santo como Consolador.",
                reference: "João 14:16"
            },
            {
                question: "Qual o significado de 'Ebenezer'?",
                options: ["Pedra de ajuda", "Pedra angular", "Rocha firme", "Monte santo"],
                correct: 0,
                explanation: "Samuel levantou uma pedra memorial: 'Até aqui o Senhor nos ajudou'.",
                reference: "1 Samuel 7:12"
            }
        ],
        manuscripts: [
            {
                question: "Qual manuscrito é o mais antigo quase completo do NT?",
                options: ["Codex Sinaiticus (séc. IV)", "Codex Vaticanus", "Papiro P52", "Codex Alexandrinus"],
                correct: 0,
                explanation: "O Codex Sinaiticus contém quase todo o NT.",
                reference: "Crítica Textual"
            },
            {
                question: "Os Manuscritos do Mar Morto foram encontrados em:",
                options: ["Qumran, 1947", "Jerusalém, 1900", "Egito, 1945", "Roma, 1950"],
                correct: 0,
                explanation: "Descobertos em Qumran por um pastor beduíno em 1947.",
                reference: "Arqueologia Bíblica"
            },
            {
                question: "O que é a Septuaginta (LXX)?",
                options: ["Tradução grega do AT", "O NT em latim", "Livros apócrifos", "Versão siríaca"],
                correct: 0,
                explanation: "A Septuaginta é a tradução grega do AT hebraico (séc. III a.C.).",
                reference: "História Bíblica"
            },
            {
                question: "Qual o fragmento mais antigo do NT já encontrado?",
                options: ["Papiro P52 (João 18) ~125 d.C.", "Codex Sinaiticus ~350 d.C.", "Papiro P46 ~200 d.C.", "Codex Bezae ~400 d.C."],
                correct: 0,
                explanation: "O Papiro P52 contém fragmentos de João 18 (~125 d.C.).",
                reference: "Crítica Textual"
            },
            {
                question: "O que é a Vulgata?",
                options: ["Tradução latina por Jerônimo", "Primeira Bíblia impressa", "Manuscrito grego", "Versão aramaica"],
                correct: 0,
                explanation: "A Vulgata é a tradução para o latim feita por Jerônimo (séc. IV).",
                reference: "História da Bíblia"
            },
            {
                question: "O que é a 'lectio difficilior'?",
                options: ["A leitura mais difícil provavelmente é original", "A mais fácil é original", "A mais longa é original", "A mais curta é original"],
                correct: 0,
                explanation: "Copistas tendiam a simplificar, então a leitura difícil tende a ser mais antiga.",
                reference: "Crítica Textual"
            },
            {
                question: "Quem traduziu a Bíblia para o alemão durante a Reforma?",
                options: ["Martinho Lutero", "João Calvino", "John Wycliffe", "William Tyndale"],
                correct: 0,
                explanation: "Lutero traduziu a Bíblia para o alemão em 1534.",
                reference: "História da Reforma"
            },
            {
                question: "Quantos manuscritos gregos do NT existem hoje?",
                options: ["Mais de 5.800", "Cerca de 500", "Menos de 100", "Aproximadamente 1.000"],
                correct: 0,
                explanation: "Existem mais de 5.800 manuscritos gregos, muito mais que qualquer obra antiga.",
                reference: "Crítica Textual"
            }
        ],
        deepStudy: [
            {
                question: "Qual é a estrutura quiástica mais famosa da Bíblia?",
                options: ["O Dilúvio (Gn 6-9)", "Salmo 23", "Sermão do Monte", "Prólogo de João"],
                correct: 0,
                explanation: "A narrativa do Dilúvio possui uma estrutura quiástica elaborada.",
                reference: "Gênesis 6-9"
            },
            {
                question: "Na tipologia, Melquisedeque é tipo de:",
                options: ["Cristo como sacerdote eterno", "Moisés como líder", "Davi como rei", "Elias como profeta"],
                correct: 0,
                explanation: "Hebreus desenvolve Melquisedeque como tipo de Cristo.",
                reference: "Hebreus 7:1-3"
            },
            {
                question: "Quantos cânticos do 'Servo Sofredor' existem em Isaías?",
                options: ["4", "3", "5", "7"],
                correct: 0,
                explanation: "São 4: Is 42:1-9, 49:1-7, 50:4-11 e 52:13-53:12.",
                reference: "Isaías"
            },
            {
                question: "O que é a 'hipótese das duas fontes' nos sinóticos?",
                options: ["Mateus e Lucas usaram Marcos e fonte Q", "Dois autores de Gênesis", "AT tinha 2 versões", "Paulo escreveu de 2 prisões"],
                correct: 0,
                explanation: "Mateus e Lucas usaram Marcos e uma fonte hipotética Q.",
                reference: "Crítica Sinótica"
            },
            {
                question: "Qual a principal contribuição do Concílio de Niceia (325)?",
                options: ["Afirmar a divindade de Cristo", "Definir o cânon", "Estabelecer o papado", "Traduzir a Bíblia"],
                correct: 0,
                explanation: "Niceia afirmou que Cristo é 'homoousios' com o Pai.",
                reference: "História da Igreja"
            },
            {
                question: "O que significa 'hapax legomenon'?",
                options: ["Palavra que aparece só uma vez", "Primeira palavra de um livro", "Última palavra", "Palavra mal traduzida"],
                correct: 0,
                explanation: "Hapax legomena são palavras de ocorrência única na Bíblia.",
                reference: "Linguística Bíblica"
            },
            {
                question: "O que é 'inclusio' na hermenêutica?",
                options: ["Repetição no início e fim para delimitar", "Inclusão de apócrifos", "Método de tradução", "Forma de oração"],
                correct: 0,
                explanation: "Inclusio emoldura uma passagem repetindo elementos.",
                reference: "Hermenêutica"
            },
            {
                question: "O que é a 'Crítica da Forma' (Formgeschichte)?",
                options: ["Estudo das formas literárias pré-escritas", "Crítica à forma de adoração", "Análise gramatical", "Estudo da formatação"],
                correct: 0,
                explanation: "A Crítica da Forma analisa as tradições orais por trás dos textos.",
                reference: "Hermenêutica"
            }
        ],
        archaeology: [
            {
                question: "Qual descoberta confirmou a existência do rei Davi?",
                options: ["Estela de Tel Dan", "Pedra Moabita", "Cilindro de Ciro", "Prisma de Senaqueribe"],
                correct: 0,
                explanation: "A Estela de Tel Dan (1993) contém 'Casa de Davi'.",
                reference: "Arqueologia"
            },
            {
                question: "O Cilindro de Ciro confirma:",
                options: ["O decreto para retorno dos judeus", "A conquista de Jericó", "A existência de Salomão", "O dilúvio"],
                correct: 0,
                explanation: "O Cilindro confirma a política de repatriação de Ciro.",
                reference: "Esdras 1:1-4"
            },
            {
                question: "A Pedra Moabita menciona qual Deus?",
                options: ["YHWH", "Elohim", "El Shaddai", "Adonai"],
                correct: 0,
                explanation: "A Pedra Moabita do séc. IX a.C. menciona YHWH.",
                reference: "2 Reis 3"
            },
            {
                question: "Qual tanque de João 5 foi confirmado pela arqueologia?",
                options: ["Betesda", "Siloé", "Gibeão", "Hesbom"],
                correct: 0,
                explanation: "O Tanque de Betesda com seus 5 pórticos foi escavado.",
                reference: "João 5:2"
            },
            {
                question: "O Prisma de Senaqueribe confirma:",
                options: ["O cerco de Jerusalém", "A queda de Jericó", "O exílio babilônico", "A construção do templo"],
                correct: 0,
                explanation: "O Prisma confirma o cerco a Jerusalém por Senaqueribe.",
                reference: "2 Reis 18-19"
            },
            {
                question: "Qual inscrição confirma a existência de Pilatos?",
                options: ["Pedra de Pilatos (Cesareia)", "Estela de Pilatos", "Coluna de Pilatos", "Moeda de Pilatos"],
                correct: 0,
                explanation: "A 'Pedra de Pilatos' (1961) menciona 'Pontius Pilatus'.",
                reference: "Arqueologia"
            },
            {
                question: "Qual descoberta confirmou a piscina de Siloé?",
                options: ["Escavações em 2004", "Rolos do Mar Morto", "Estela de Merneptá", "Papiros de Elefantina"],
                correct: 0,
                explanation: "A Piscina de Siloé foi descoberta por acidente em 2004 durante obras.",
                reference: "João 9:7"
            },
            {
                question: "A Estela de Merneptá é importante porque:",
                options: ["É a primeira menção a 'Israel' fora da Bíblia", "Confirma Moisés", "Descreve a criação", "Menciona Jesus"],
                correct: 0,
                explanation: "Datada de ~1208 a.C., é a mais antiga referência egípcia a Israel.",
                reference: "Arqueologia"
            }
        ]
    }
};

// ============================================
// METADADOS DAS CATEGORIAS
// ============================================
const CATEGORIES_META = {
    children: {
        creation: { name: "Criação", icon: "🌍", requiredLevel: 0 },
        heroes: { name: "Heróis da Bíblia", icon: "⚔️", requiredLevel: 0 },
        jesus: { name: "Jesus", icon: "✝️", requiredLevel: 1 },
        animals: { name: "Animais da Bíblia", icon: "🐑", requiredLevel: 2 }
    },
    kids: {
        patriarchs: { name: "Patriarcas", icon: "👴", requiredLevel: 0 },
        exodus: { name: "Êxodo", icon: "🏜️", requiredLevel: 0 },
        miracles: { name: "Milagres", icon: "✨", requiredLevel: 1 },
        parables: { name: "Parábolas", icon: "📖", requiredLevel: 2 }
    },
    teens: {
        kings: { name: "Reis de Israel", icon: "👑", requiredLevel: 0 },
        prophets: { name: "Profetas", icon: "📢", requiredLevel: 0 },
        newTestament: { name: "Novo Testamento", icon: "📜", requiredLevel: 1 },
        wisdom: { name: "Sabedoria", icon: "🧠", requiredLevel: 2 }
    },
    adults: {
        theology: { name: "Teologia", icon: "📚", requiredLevel: 0 },
        history: { name: "História Bíblica", icon: "🏛️", requiredLevel: 0 },
        epistles: { name: "Epístolas", icon: "✉️", requiredLevel: 1 },
        prophecy: { name: "Profecia", icon: "🔮", requiredLevel: 2 }
    },
    scholars: {
        languages: { name: "Línguas Bíblicas", icon: "🔤", requiredLevel: 0 },
        manuscripts: { name: "Manuscritos", icon: "📜", requiredLevel: 0 },
        deepStudy: { name: "Estudo Profundo", icon: "🔬", requiredLevel: 1 },
        archaeology: { name: "Arqueologia", icon: "🏺", requiredLevel: 2 }
    }
};

// ============================================
// VERSÍCULOS MOTIVACIONAIS
// ============================================
const MOTIVATIONAL_VERSES = [
    { text: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.", ref: "João 3:16" },
    { text: "Tudo posso naquele que me fortalece.", ref: "Filipenses 4:13" },
    { text: "O Senhor é o meu pastor, nada me faltará.", ref: "Salmo 23:1" },
    { text: "Confie no Senhor de todo o seu coração.", ref: "Provérbios 3:5" },
    { text: "Eu sou o caminho, a verdade e a vida.", ref: "João 14:6" },
    { text: "Busquem em primeiro lugar o Reino de Deus.", ref: "Mateus 6:33" },
    { text: "Sejam fortes e corajosos. Não tenham medo!", ref: "Josué 1:9" },
    { text: "A tua palavra é lâmpada para os meus pés.", ref: "Salmo 119:105" },
    { text: "Deem graças ao Senhor porque ele é bom.", ref: "Salmo 136:1" },
    { text: "Mas os que esperam no Senhor renovarão as suas forças.", ref: "Isaías 40:31" },
    { text: "E conhecereis a verdade, e a verdade vos libertará.", ref: "João 8:32" },
    { text: "Porque eu sei os planos que tenho para vocês, planos de prosperidade.", ref: "Jeremias 29:11" },
    { text: "O amor é paciente, o amor é bondoso.", ref: "1 Coríntios 13:4" },
    { text: "Não temas, porque eu sou contigo.", ref: "Isaías 41:10" },
    { text: "Lança o teu cuidado sobre o Senhor, e ele te susterá.", ref: "Salmo 55:22" }
];

// ============================================
// AVATARES DISPONÍVEIS
// ============================================
const AVATARS = [
    '😀', '😊', '🥰', '😎', '🤓', '🧐',
    '👦', '👧', '👨', '👩', '👴', '👵',
    '🦁', '🐑', '🕊️', '🐟', '🦅', '🐪',
    '👑', '⭐', '🌟', '💎', '🔥', '✝️',
    '📖', '🙏', '💪', '🎯', '🏆', '🌈'
];