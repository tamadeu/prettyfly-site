export interface BlogBodyContent {
  intro: string;
  bullets?: { label: string; text: string }[];
  outro?: string;
}

export const blogBodyMap: { [slug: string]: BlogBodyContent } = {
  'fashion-kids-sunglasses': {
    intro:
      "Mantenha os pequenos estilosos e protegidos com estes óculos de sol redondos vintage, feitos para meninas e meninos. O modelo combina moda e funcionalidade em um visual retrô perfeito para crianças que gostam de se destacar.",
    bullets: [
      {
        label: 'Design',
        text: 'A armação redonda clássica dá aos óculos um estilo vintage moderno que combina com qualquer look.',
      },
      {
        label: 'Estrutura resistente',
        text: 'Feitos com materiais de alta qualidade, leves e adequados para crianças, eles resistem ao uso diário.',
      },
      {
        label: 'Proteção UV',
        text: 'As lentes UV400 bloqueiam os raios UVA e UVB nocivos, protegendo os olhos das crianças durante atividades ao ar livre.',
      },
      {
        label: 'Ajuste confortável',
        text: 'O formato ergonômico oferece um ajuste confortável para as crianças usarem os óculos durante todo o dia.',
      },
      {
        label: 'Cores versáteis',
        text: 'Disponíveis em várias cores alegres e vibrantes para combinar com a personalidade e o estilo da criança.',
      },
      {
        label: 'Faixa etária',
        text: 'Indicados para crianças de 3 a 10 anos.',
      },
    ],
    outro:
      'Para um dia na praia, uma brincadeira no parque ou para dar um toque especial ao look do dia a dia, estes óculos redondos vintage são o acessório ideal para os pequenos apaixonados por moda.',
  },

  'young-woman-red-glasses': {
    intro:
      'Transforme seu visual do dia a dia com nossa coleção de óculos de armação vermelha, que combina estilo marcante e conforto durante todo o dia. Feitos para mulheres modernas que gostam de expressar sua personalidade, eles são versáteis para qualquer ocasião.',
    bullets: [
      {
        label: 'Material da armação',
        text: 'Produzida em acetato leve de alta qualidade, a armação é resistente e confortável para usar o dia todo.',
      },
      {
        label: 'Qualidade das lentes',
        text: 'Lentes de alta qualidade com proteção UV400 contra os raios UVA e UVB nocivos.',
      },
      {
        label: 'Versatilidade de estilo',
        text: 'A armação vermelha combina com roupas casuais, profissionais e sociais, tornando-se um acessório muito versátil.',
      },
      {
        label: 'Ajuste confortável',
        text: 'As plaquetas ajustáveis e as hastes flexíveis proporcionam um encaixe seguro e personalizado para usar o dia todo.',
      },
      {
        label: 'Opções de cores',
        text: 'Disponíveis em vermelho clássico, rosé e bordô para combinar com diferentes tons de pele e estilos pessoais.',
      },
    ],
    outro:
      'Para ir ao trabalho, encontrar amigos para um brunch ou passear pela cidade, estes óculos são o toque final perfeito para qualquer look. Uma armação vermelha é um investimento atemporal no seu estilo pessoal.',
  },

  'cotton-floral-print': {
    intro:
      'Descubra a feminilidade descomplicada da nossa blusa de algodão com estampa floral, decote ombro a ombro e mangas com punhos franzidos. A peça combina uma estampa atemporal com uma silhueta moderna, oferecendo estilo e conforto em dias quentes.',
    bullets: [
      {
        label: 'Material',
        text: 'Confeccionada em algodão premium 100%, macio e respirável, ideal para dias quentes.',
      },
      {
        label: 'Estampa floral',
        text: 'A delicada estampa floral acrescenta um toque romântico e feminino a qualquer look.',
      },
      {
        label: 'Decote ombro a ombro',
        text: 'O decote elegante valoriza a região do colo e dos ombros, criando uma silhueta feminina.',
      },
      {
        label: 'Detalhe franzido',
        text: 'O franzido elástico no busto oferece um ajuste seguro e confortável que acompanha o formato do corpo.',
      },
      {
        label: 'Mangas com punhos',
        text: 'As mangas 3/4 com punhos franzidos dão um acabamento refinado e delicado à peça.',
      },
    ],
    outro:
      'Combine esta blusa versátil com uma calça jeans de cintura alta para um passeio descontraído ou com uma saia fluida para um visual romântico e feminino. Uma peça indispensável para a primavera e o verão.',
  },

  'summer-collection-trends': {
    intro:
      'O verão chegou trazendo tendências de moda que unem estilo e praticidade. De paletas de cores vibrantes a tecidos leves e respiráveis, a coleção desta estação tem opções para todos os gostos.',
    bullets: [
      {
        label: 'Paleta de cores',
        text: 'Tons intensos como coral, turquesa e amarelo girassol marcam a estação e trazem energia e otimismo para os looks.',
      },
      {
        label: 'Escolha de tecidos',
        text: 'Linho leve, algodão respirável e tecidos que absorvem a umidade ajudam você a se manter fresca e confortável no calor.',
      },
      {
        label: 'Silhuetas em destaque',
        text: 'Vestidos midi fluidos, calças de pernas largas e blusas de caimento solto são as peças que definem o estilo do verão.',
      },
      {
        label: 'Acessórios',
        text: 'Óculos de sol grandes, bolsas de palha trançada e sandálias de tiras completam o look perfeito para o verão.',
      },
      {
        label: 'Moda sustentável',
        text: 'Muitas das peças favoritas da estação são feitas com materiais ecológicos, promovendo um estilo mais consciente e sustentável.',
      },
    ],
    outro:
      'Aproveite a estação e incorpore essas tendências ao seu guarda-roupa. Seja para ir à praia, a uma festa no jardim ou a um passeio em uma noite de verão, elas ajudam você a criar looks elegantes sem esforço.',
  },

  'minimal-accessories-guide': {
    intro:
      'Na hora de criar um visual elegante e bem-acabado, menos é mais. Aprender a usar poucos acessórios pode transformar até os looks mais simples em produções especiais, deixando seu estilo e sua confiança em evidência.',
    bullets: [
      {
        label: 'Prefira qualidade à quantidade',
        text: 'Invista em alguns acessórios de alta qualidade e duráveis, em vez de acumular muitas peças baratas.',
      },
      {
        label: 'Destaque um acessório',
        text: 'Deixe uma única peça marcante brilhar: um colar chamativo, um relógio elegante ou uma bolsa bem-acabada.',
      },
      {
        label: 'Tons metálicos',
        text: 'Acessórios dourados e prateados são atemporais e versáteis, combinando com quase todas as paletas de cores e ocasiões.',
      },
      {
        label: 'Sobreposições delicadas',
        text: 'Ao sobrepor acessórios, escolha peças do mesmo tom metálico e varie os comprimentos para criar uma composição harmoniosa.',
      },
      {
        label: 'Considere as proporções',
        text: 'Equilibre o tamanho dos acessórios com o look: peças delicadas para ocasiões casuais e opções marcantes para eventos formais ou noturnos.',
      },
    ],
    outro:
      'A beleza do estilo minimalista é deixar você — e não os acessórios — em destaque. Comece com uma base simples, escolha peças que expressem sua personalidade e deixe sua confiança aparecer em cada look.',
  },

  'winter-wardrobe-essentials': {
    intro:
      'Quando as temperaturas caem, é hora de renovar o guarda-roupa com peças quentes e estilosas. Para montar o guarda-roupa de inverno ideal, não é preciso mudar tudo: bastam alguns itens essenciais que podem ser combinados com facilidade ao longo da estação.',
    bullets: [
      {
        label: 'Casaco clássico de lã',
        text: 'Um casaco de lã bem cortado, em uma cor neutra, é a base de qualquer guarda-roupa de inverno e nunca sai de moda.',
      },
      {
        label: 'Suéteres de cashmere',
        text: 'Invista em um ou dois suéteres de cashmere de qualidade: eles são muito macios e quentes e valorizam qualquer look.',
      },
      {
        label: 'Camadas térmicas',
        text: 'Peças térmicas de qualidade são essenciais para manter o corpo aquecido sem adicionar volume excessivo ao visual.',
      },
      {
        label: 'Botas de cano curto',
        text: 'Um par versátil de botas de cano curto combina com tudo, de jeans a vestidos, mantém os pés aquecidos e deixa o look elegante.',
      },
      {
        label: 'Cachecol marcante',
        text: 'Um cachecol luxuoso, com estampa ou textura especial, transforma um look simples e mantém você aquecida o dia todo.',
      },
    ],
    outro:
      'A versatilidade é a chave para um guarda-roupa de inverno funcional. Escolha peças que combinem entre si e com o que você já tem, criando uma seleção prática para ir do trabalho aos passeios de fim de semana.',
  },
};
