import { Search, Monitor, Smartphone, Home as HomeIcon } from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
  intro: string;
  body: string[];
  features: string[];
  conclusion: string;
  actionLink: string;
}

export const categories = [
  { name: 'Tecnologia', icon: <Monitor size={18} /> },
  { name: 'Casa Inteligente', icon: <HomeIcon size={18} /> }
];

export const articles: Article[] = [
  {
    id: "guia-compra-pc-gamer-2026",
    title: "Guia de Compra: Como Escolher um Setup PC Gamer Completo em 2026",
    category: "Tecnologia",
    date: "19 de Maio de 2026",
    author: "Equipe Mais&Menos",
    readTime: "8 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1200",
    intro: "Montar ou comprar um PC Gamer completo exige cuidado não apenas com o processador e a placa de vídeo, mas também com a harmonia entre todos os componentes. Em 2026, com o avanço de tecnologias de Ray Tracing e inteligência artificial voltada para games, escolhas eficientes garantem não só desempenho, mas também longevidade e excelente custo-benefício.",
    body: [
      "## O Coração do Setup: Desempenho em Jogos e Multitarefas",
      "No cenário atual, um processador de no mínimo 6 a 8 núcleos é indispensável para evitar gargalos, principalmente quando pareado com placas de vídeo de nova geração capazes de rodar títulos em 1440p ou 4K com taxas de quadros fluidas. Além do mais, a memória RAM não pode ser deixada de lado. O padrão atual exige pelo menos 16GB com frequências altas, ou até 32GB se o foco também for a criação de conteúdo e streaming, garantindo que o sistema operacional e os jogos respirem sem travamentos.",
      "## Armazenamento e Resfriamento",
      "Outro pilar de um bom setup é o armazenamento. Um SSD NVMe M.2 não é mais luxo, é necessidade. Ele diminui consideravelmente as telas de carregamento e melhora a responsividade de todo o sistema operacional. Paralelo a isso, o resfriamento (Air Cooler ou Water Cooler) deve estar dimensionado corretamente para manter as temperaturas estáveis sob alta carga térmica gerada durantes horas ininterruptas de jogo.",
    ],
    features: [
      "Processadores otimizados para multitarefa intensa",
      "Placas de vídeo com suporte a Ray Tracing e DLSS 4/FSR 3",
      "Memória RAM DDR5 para melhor largura de banda",
      "SSD NVMe PCIe 4.0 para máxima performance de leitura",
      "Fontes com selo 80 Plus Gold ou superior"
    ],
    conclusion: "Escolher um PC Gamer não precisa ser uma dor de cabeça se você equilibrar o orçamento entre as peças certas, evitando gargalos de desempenho e permitindo upgrades futuros com facilidade. Lembre-se, o setup ideal é aquele que atende à sua biblioteca de jogos e necessidades diárias com estabilidade.",
    actionLink: "https://s.shopee.com.br/3g0d5pzLED"
  },
  {
    id: "robo-aspirador-inteligente-dia-a-dia",
    title: "Vale a Pena? Analisamos a Eficiência do Robô Aspirador Inteligente no Dia a Dia",
    category: "Casa Inteligente",
    date: "18 de Maio de 2026",
    author: "Equipe Mais&Menos",
    readTime: "6 min de leitura",
    imageUrl: "https://loremflickr.com/1200/800/roomba",
    intro: "A automação doméstica tem deixado de ser apenas conforto para se tornar uma necessidade no cotidiano apressado. Os robôs aspiradores prometem manter a casa organizada com o mínimo de esforço. Neste artigo, abordamos a eficiência real desses dispositivos analisando mapeamento inteligente, bateria e sucção.",
    body: [
      "## Autonomia de Bateria e Mapeamento Inteligente",
      "O grande diferencial das gerações recentes está na navegação espacial. Diferente dos antigos aparelhos que apenas batiam nos móveis, os sensores avançados via laser (LiDAR) criam plantas tridimensionais precisas da casa. Isso permite criar barreiras virtuais pelo aplicativo de smartphone, além de fazer com que o aparelho otimize o trajeto economizando valiosos minutos da sua bateria.",
      "Falando em autonomia da bateria, modelos eficientes operam entre 90 a 150 minutos. Se a bateria estiver baixa durante o ciclo, a inteligência integrada comanda o robô para voltar espontaneamente à base de recarga, reiniciando o trabalho do ponto exato onde havia parado, o que é brilhante para residências e apartamentos de maior metragem.",
      "## Praticidade na Limpeza Doméstica",
      "Na rotina familiar com animais de estimação, o poder de sucção junto às escovas laterais trabalha na captura de pelos, poeira e detritos sólidos. Muitos vêm equipados com suporte acoplável para passar pano, unificando a varrição e a lavagem superficial numa única rotina autônoma programada para quando você sequer está em casa."
    ],
    features: [
      "Mapeamento por sensor a laser de alta precisão",
      "Controle total através de aplicativos de celular iOS e Android",
      "Autonomia média de mais de 100 minutos contínuos",
      "Sensores antiqueda para evitar acidentes em degraus e escadas",
      "Recarga automática com retorno inteligente"
    ],
    conclusion: "Com a redução de preços das tecnologias centrais de navegação autônoma, adotar um robô aspirador tornou-se uma decisão financeiramente racional para quem prioriza tempo livre em vez de faxinas repetitivas diárias, tornando-o imprescindível no lar atual.",
    actionLink: "https://s.shopee.com.br/gN1WUSilu"
  },
  {
    id: "smartphone-poco-analise",
    title: "Review Completo: O Smartphone POCO e o Equilíbrio Perfeito Entre Potência e Preço",
    category: "Gadgets",
    date: "15 de Maio de 2026",
    author: "Equipe Mais&Menos",
    readTime: "7 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?auto=format&fit=crop&q=80&w=1200",
    intro: "A linha POCO conquistou os consumidores ao entregar o que antes era impensável: hardwares dignos de flagship por uma fração expressiva do custo. Nesta análise, detalhamos por que este aparelho é apontado, repetidamente, como um dos campeões definitivos em custo-benefício, com destaque para a evolução notável no seu bloco de câmeras.",
    body: [
      "## Processamento Para Jogos Pesados",
      "O grande foco dos usuários em busca desse dispositivo está no chip empregado. Os processadores robustos embarcados contam com núcleos de altíssimo desempenho, rodando tranquilamente jogos com gráficos exigentes como os títulos do momento. Combinados a sistemas de refrigeração inovadores que estabilizam as temperaturas sob estresse contínuo, a perda de frames devido ao aquecimento é praticamente nula.",
      "## Tela Fluída e Entretenimento Imersivo",
      "A taxa de atualização da tela superou a antiga barreira dos 60Hz. Com painéis fluidos (normalmente em 120Hz ou mais) de painel AMOLED, toda a interface rola de maneira excepcionalmente sedosa e responsiva. O tempo de resposta para comandos via toque beneficia tanto a produtividade com multitarefa fluída quanto, crucialmente, os reflexos dinâmicos necessários durante jogos em ritmo competitivo.",
      "## Avanços no Sistema de Câmeras",
      "Historicamente, a linha focava quase 100% em processador e deixava as câmeras em segundo plano. O cenário mudou: o sensor principal de 64MP entrega fotos extremamente detalhadas na luz do dia. O Modo Noturno recebeu aprimoramentos de software robustos, que resgatam textura em ambientes de pouquíssima luz. Já a câmera frontal de 16MP foi otimizada para chamadas de vídeo limpas e selfies prontas para as redes sociais, sem filtros de embelezamento exagerados.",
      "Além do display incrível, baterias monstruosas de 5000mAh garantem que todas essas características de topo de linha não esgotem o aparelho no meio da tarde, e o carregador ultrarrápido na caixa leva a bateria de 0 a 100% em inacreditáveis 42 minutos."
    ],
    features: [
      "Chipset super escalável e com gerenciamento de temperatura inteligente",
      "Bateria robusta e suporte ao carregamento rápido ou ultra-rápido",
      "Displays AMOLED com altos valores de nits para legibilidade no sol",
      "Taxas de atualização imersivas não inferiores a 120Hz",
      "Motores de vibração háptica premium"
    ],
    conclusion: "Entregando performance esmagadoramente superior ao que seu preço em prateleira normalmente indicaria, o aparelho é feito para o usuário pesado (power user) que se recusa a pagar o 'imposto' cobrado nas marcas premium de grife, concentrando cada real investido integralmente na pura capacidade de execução rápida.",
    actionLink: "https://s.shopee.com.br/3g0d67SdO5"
  },
  {
    id: "ecossistema-ios-vantagens",
    title: "Ecossistema iOS: As Vantagens Práticas do iPhone para Produtividade e Criação de Conteúdo",
    category: "Gadgets",
    date: "10 de Maio de 2026",
    author: "Equipe Mais&Menos",
    readTime: "10 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=1200",
    intro: "O iPhone vai muito além do símbolo de status. Para profissionais do mercado digital e criadores de conteúdo ao redor de todo o globo, a estabilidade e previsibilidade de execução de software justificam o valor como uma fundamental ferramenta de trabalho.",
    body: [
      "## Desempenho das Câmeras Profissionais",
      "O domínio do iOS nas redes sociais se deve em grande parte ao fato dos aplicativos estarem nativamente otimizados de forma contínua e dedicada ao hardware das câmeras da maçã. A gravação em formatos de imenso padrão cinematográfico, aliados aos estabilizadores físicos no próprio sensor de movimentação, fornecem captura com aspecto profissional imediato sem precisar de edição externa adicional de vídeo.",
      "As transições de balanço das cores entre lentes de ângulo tradicional, a ultra angular e o modelo teleobjetiva, ocorrem sem discrepâncias cromáticas, resultando em publicações ou filmagens corporativas muito mais nítidas e precisas.",
      "## Estabilidade do Sistema e Longevidade",
      "Adotando um ciclo vertical próprio onde fabricam tanto seus hardwares internos e chips quanto a fundação de código do iOS, as atualizações garantem estabilidade para rodar dezenas de tarefas com transições fluidas por longos anos. Ao invés da rápida degradação por falta de suporte oficial que vemos comumente no mercado paralelo de smartphones, aparelhos de 3 ou 4 gerações atrás operam as mais recentes arquiteturas de segurança da companhia, o que protege dados contábeis em ambientes de produtividade corporativa sem sustos ou lentidão severa."
    ],
    features: [
      "Foco na privacidade nativa e chaves de bloqueio para todos os dados",
      "Ecossistema fluido que conversa imediatamente com laptops e tablets",
      "Garantia de atualizações completas de sistema ao longo dos anos",
      "Processadores Bionic incrivelmente potentes para renderização instantânea",
      "Cores de câmera extremamente fiéis à reprodução da vida real"
    ],
    conclusion: "Trabalhar em um ecossistema fechado garante que o celular trabalhe ininterruptamente sem gargalos criativos quando o profissional mais precisar. Para vloggers, fotógrafos nas ruas, ou diretores corporativos atarefados, a tranquilidade do sistema rodando impecavelmente paga a cota de entrada, gerando lucro sustentável.",
    actionLink: "https://s.shopee.com.br/9fHqFEQ2x5"
  },
  {
    id: "monitor-mancer-23-8",
    title: "Imersão de Tela: O Impacto de um Monitor Mancer de 23.8\" no Trabalho e nos Jogos",
    category: "Tecnologia",
    date: "5 de Maio de 2026",
    author: "Equipe Mais&Menos",
    readTime: "5 min de leitura",
    imageUrl: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1200",
    intro: "Muitas vezes investe-se tanto na máquina que acabamos desvalorizando a janela onde efetivamente vemos todo o trabalho e entretenimento: o monitor. Com 23.8 polegadas, modelos acessíveis como o Mancer mostram que boas tecnologias em painéis não pesam mais nos bolsos dos consumidores que buscam uma experiência híbrida decente.",
    body: [
      "## O Tamanho Ideal para Mesas Domésticas",
      "Para montagens compactas em setup de casa que atendem um período de trabalho remoto mas que viram centros de jogos noite adentro, os formatos 23.8\" operam o balanço do espaço físico frente a uma visibilidade de interface gigantesca. Neste dimensionamento, trabalhar em edições usando Full HD confere grande densidade por pixel, tornando os caracteres de leitura bastante delineados, evitando as frustrantes vistas cansadas em jornadas excessivas frente à radiação azulada do monitor (que na maioria destes modelos, há um filtro eficaz configurável para proteger a córnea).",
      "## Taxas de Resposta e Cores Vivas",
      "Para os games, buscar baixas taxas em milissegundos afasta os borrões escuros em movimento de câmera, aprimorando muito o visual. O design moderno do invólucro plástico tem uma grande tendência a ter bordas absurdamente finas hoje em dia, que propiciam adicionar uma segunda tela colada ao equipamento no futuro mantendo foco central visual perfeito entre abas que exigem mais de uma área livre e sem interferências de moldura no meio."
    ],
    features: [
      "Ergonomia visual projetada visando o conforto dos olhos",
      "Ângulos e bases ajustáveis se integrando confortavelmente",
      "Conexões rápidas e polivalentes com DisplayPort e HDMI simultâneos",
      "Sustentação dos painéis garantindo a ausência de rastros virtuais (ghosting)",
      "Bordas minimalistas propiciando imersão máxima total e panorâmica"
    ],
    conclusion: "Proporcionar a si mesmo uma visão aprimorada frente ao display muda em absoluto a experiência que temos com o computador diário, tanto no prazer de entretenimento quanto na velocidade e menos erro cometidos durante a produção de planilhas. Este aparelho em particular apresenta esse alinhamento perfeitamente de forma barata e estilosa.",
    actionLink: "https://s.shopee.com.br/10zrvNz93C"
  }
];

export interface Offer {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  content: string[];
  features: string[];
  actionText: string;
  premiumBody: string[];
}

export const offers: Record<string, Offer> = {
  "Topo": {
    id: "produtividade-2026",
    title: "Super Produtividade em 2026",
    subtitle: "Descubra o ecossistema de ferramentas que está multiplicando resultados sem causar burnout.",
    imageUrl: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80",
    content: [
      "## A Nova Era da Eficiência Profissional",
      "Trabalhar mais horas deixou de ser sinônimo de maior produtividade. Em 2026, a verdadeira chave para multiplicar seus resultados — sem sacrificar sua saúde mental — reside na delegação inteligente de tarefas burocráticas para sistemas de automação integrados.",
      "## O Novo Ecossistema Integrado",
      "Hoje, ecossistemas inteiros de software conversam entre si. Sistemas de gestão preveem gargalos antes que eles ocorram, ajustando cronogramas com base no ritmo histórico da equipe. Além disso, a gestão de caixa de entrada parou de consumir horas do seu dia: algoritmos de linguagem agora sintetizam threads longas e sugerem rascunhos completos."
    ],
    features: [
      "Automação silenciosa de planilhas complexas",
      "Filtros inteligentes que priorizam clientes e urgências",
      "Integração total com calendários e gerenciadores de tempo"
    ],
    actionText: "Acessar Guia de Ferramentas",
    premiumBody: [
      "## O Fim do Trabalho 'Braçal' Digital",
      "Um dos maiores erros dos profissionais contemporâneos é gastar inteligência com tarefas lógicas e repetitivas que não exigem criatividade. Modelos de IA não apenas escrevem textos, eles estruturam fluxos de ponta a ponta. A adoção de plataformas de integração sem código permite que você desenhe um sistema onde a simples prospecção aprovada de um cliente gere automaticamente contratos e pastas no seu Drive.",
      "## Como Implementar a Auditoria de Tempo",
      "Antes de contratar dezenas de plataformas, o primeiro passo indispensável é a auditoria de 3 dias. Anote meticulosamente onde seu tempo é gasto. Você inevitavelmente descobrirá que 40% do seu dia é consumido fazendo triagem de mensagens."
    ]
  },
  "Meio do Artigo": {
    id: "casa-inteligente-pro",
    title: "Automação Residencial Nível 2",
    subtitle: "Como criar rotinas invisíveis que cuidam do seu bem-estar, do clima à segurança.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    content: [
      "## Além das Lâmpadas: Um Lar que Pensa",
      "Muitos iniciam na automação apenas controlando a iluminação, mas o verdadeiro impacto no dia a dia vem com o desenvolvimento de 'cenas contextuais'. Um lar inteligente de verdade não precisa de comandos de voz o tempo todo; ele antecipa as suas necessidades baseado em geolocalização, horários e condições climáticas.",
      "## Integração Total: Climatização e Segurança",
      "O ecossistema perfeito lê a previsão do tempo e aciona as persianas e o ar-condicionado minutos antes de você abrir a porta de casa. Ao mesmo tempo, ele cruza dados das câmeras externas com padrões de reconhecimento de presença. Isso significa ausência total de alarmes falsos."
    ],
    features: [
      "Sensores climáticos centralizados no hub principal",
      "Mecanismo de Despertar Natural sincronizado com a luz",
      "Segurança reativa inteligente que discerne pessoas de pets"
    ],
    actionText: "Conhecer Hubs Profissionais",
    premiumBody: [
      "## Criando Cenas Dinâmicas Contextuais",
      "A transição de uma casa com 'gadgets soltos' para uma verdadeira casa inteligente exige um Hub controlador robusto. Em vez de dizer 'ligar televisão' ou 'desligar luz', você programa a cena 'Modo Relaxamento'. Com um único gesto, as luzes da sala reduzem para 10% na cor âmbar e a fechadura é trancada.",
      "## Segurança Proativa (Prevenção Inteligente)",
      "Esqueça alarmes que apenas tocam quando sua casa já foi invadida. A automação Nível 2 cruza dados: se o sensor de perímetro detecta alguém por muito tempo nas imediações do seu portão, o sistema acende as luzes de presença simulando atividade."
    ]
  },
  "Sidebar": {
    id: "ergonomia-setup",
    title: "Ergonomia de Alto Nível",
    subtitle: "Proteja sua coluna e invista no seu foco nas sessões maratonas no PC.",
    imageUrl: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    content: [
      "## A Ciência Base da Postura Perfeita",
      "Nenhum hardware poderoso importa se você não consegue se sentar na frente do computador. Investir em uma cadeira ergonômica ajustável — com um bom conjunto de travas sincrônicas e suporte lombar dinâmico — significa investir na capacidade de se concentrar e prevenir danos irreparáveis de estresse na coluna.",
      "## Standing Desks (Mesas Ajustáveis)",
      "Estudos mostram que alternar entre posições de trabalho de pé e sentado eleva a oxigenação cerebral e diminui a fadiga nas pernas. Com os motores duplos modernos, você possui memórias prontas. Basta um toque no painel para que a área de trabalho se eleve silenciosamente enquanto você contínua sua reunião ou edição."
    ],
    features: [
      "Mecanismos de apoio lombar flexível automático",
      "Mesas motorizadas com memória customizável",
      "Braços ergonômicos e descansos para o pescoço 4D"
    ],
    actionText: "Ver Ofertas de Ergonomia",
    premiumBody: [
      "## O Impacto Oculto da Elevação do Monitor",
      "Muito se fala sobre cadeiras para lombar, mas a causa número um de tensão e dores cervicais frequentes é o monitor posicionado incorretamente. O topo da sua tela deve estar perfeitamente alinhado com a altura dos seus olhos. Se você usa predominantemente um laptop sem suporte ou display externo, suas vértebras cervicais estão recebendo o peso equivalente a 20 quilos todos os dias, drenando energia vital durante toda a tarde.",
      "## Iluminação Biológica e Bias Lighting",
      "O cansaço visual que você sente às 16h muitas vezes é causado pelo contraste violento entre o brilho da tela e o fundo da parede escura. Ambientar a mesa de trabalho utilizando 'Bias Lighting' (uma fita LED discreta ou luminária emitindo uma luz suave fixada atrás do monitor direcionada à parede) reduz absurdamente a fadiga ocular, aumentando sua resistência atenta para longas rodadas de concentração ininterrupta."
    ]
  }
};
