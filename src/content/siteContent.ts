export interface ContentFlag {
  isPlaceholder?: boolean
  isExample?: boolean
  note?: string
  sourceNote?: string
}

export interface HeroContent {
  cityLabel: string
  displayTitle: string
  lines: string[]
  primaryCta: string
  secondaryCta: string
  scrollHint: string
}

export interface StorylineContent {
  title: string
  lines: string[]
}

export interface OnlinePhoto extends ContentFlag {
  src: string
  alt: string
  credit: string
}

export interface ScrollMoment {
  id: string
  index: string
  kicker: string
  title: string
  body: string
  imagePosition: string
  imageSrc?: string
  imageAlt?: string
  credit?: string
  facts?: string[]
}

export interface TrainingArea extends ContentFlag {
  id: string
  index: string
  title: string
  description: string
}

export interface BenefitItem {
  index: string
  title: string
  description: string
}

export interface CommunityContent {
  eyebrow: string
  title: string
  description: string
}

export interface GalleryItem extends ContentFlag {
  id: string
  src: string
  alt: string
  label: string
  credit?: string
  objectPosition?: string
}

export interface MembershipPlan extends ContentFlag {
  id: string
  name: string
  price: string
  period: string
  highlight?: string
  features: string[]
  featured?: boolean
}

export interface LocationField extends ContentFlag {
  label: string
  value: string
}

export interface ClubContent extends ContentFlag {
  id: string
  name: string
  locationLabel: string
  description: string
  fields: LocationField[]
  schedule: LocationField[]
  mapDescription: string
  mapUrl: string
  mapUrlConfirmed: boolean
  imageSrc?: string
  imageAlt?: string
  imagePosition?: string
}

export interface FaqItem extends ContentFlag {
  id: string
  question: string
  answer: string
}

export const siteContent = {
  brand: {
    name: 'H12 GYM',
    locationShort: 'ALGARVE',
    instagramUrl: 'https://www.instagram.com/h12_gym/',
    facebookUrl: 'https://www.facebook.com/profile.php?id=100077128833099',
  },
  hero: {
    cityLabel: 'MESSINES + ARMAÇÃO DE PÊRA',
    displayTitle: 'H12',
    lines: ['TREINA.', 'EVOLUI.', 'VOLTA.'],
    primaryCta: 'CONHECER O H12',
    secondaryCta: 'VER PLANOS',
    scrollHint: 'SCROLL TO ENTER',
  } satisfies HeroContent,
  story: {
    title: 'UM H12.\nDUAS LOCALIZAÇÕES.',
    lines: ['ESPAÇO PARA TREINAR.', 'EQUIPA PRESENTE.', 'AMBIENTE QUE PUXA POR TI.'],
  } satisfies StorylineContent,
  media: {
    h12Interior: {
      src: '/media/h12-source/h12-source-01.jpg',
      alt: 'Fotografia pública do interior do H12 Gym em São Bartolomeu de Messines.',
      credit: 'Fonte: csmarketglasses.com',
      sourceNote:
        'Imagem pública usada apenas como referência no protótipo. Substituir por assets aprovados pelo H12 antes de publicação final.',
    } satisfies OnlinePhoto,
    h12Floor: {
      src: '/media/h12-source/h12-source-02.jpg',
      alt: 'Fotografia pública do H12 Gym com relva, cardio e zona de máquinas.',
      credit: 'Fonte: csmarketglasses.com',
      sourceNote:
        'Imagem pública usada apenas como referência no protótipo. Substituir por assets aprovados pelo H12 antes de publicação final.',
    } satisfies OnlinePhoto,
  },
  scrollMoments: [
    {
      id: 'space',
      index: '01',
      kicker: 'ENTRA NO H12',
      title: 'TREINA\nÀ TUA MANEIRA.',
      body: 'Informação pública do mockup H12: Messines, Armação de Pêra e uma experiência focada em treino completo.',
      imagePosition: 'center center',
      imageSrc: '/media/h12-source/h12-source-02.jpg',
      imageAlt: 'Vista pública do espaço H12 com relva, máquinas e cardio.',
      credit: 'csmarketglasses.com',
      facts: ['MESSINES', 'ARMAÇÃO DE PÊRA', '@h12_gym'],
    },
    {
      id: 'turf',
      index: '02',
      kicker: 'O ESPAÇO',
      title: 'UM ESPAÇO\nPARA TREINAR.',
      body: 'Relva, cardio, máquinas e zonas abertas dão leitura real ao percurso pelo ginásio.',
      imagePosition: 'left center',
      imageSrc: '/media/h12-source/h12-source-02.jpg',
      imageAlt: 'Fotografia pública do H12 com relva lateral e equipamentos.',
      credit: 'csmarketglasses.com',
      facts: ['CARDIO', 'RELVA', 'MÁQUINAS'],
    },
    {
      id: 'machines',
      index: '03',
      kicker: 'TREINO COMPLETO',
      title: 'MUSCULAÇÃO.\nFUNCIONAL.\nAULAS.',
      body: 'A estrutura de conteúdo passa a introduzir serviços logo no início da caminhada 3D.',
      imagePosition: 'center center',
      imageSrc: '/media/h12-source/h12-source-01.jpg',
      imageAlt: 'Fotografia pública do interior H12 com máquinas e teto técnico.',
      credit: 'csmarketglasses.com',
      facts: ['MUSCULAÇÃO', 'TREINO FUNCIONAL', 'ACOMPANHAMENTO'],
    },
  ] satisfies ScrollMoment[],
  space: {
    title: 'UM ESPAÇO.\nVÁRIAS FORMAS\nDE EVOLUIR.',
    description:
      'As listagens públicas descrevem a marca H12 com espaços de treino no Algarve, incluindo Messines e Armação de Pêra, com foco em musculação, máquinas e acompanhamento no terreno.',
    areas: [
      {
        id: 'strength',
        index: '01',
        title: 'MUSCULAÇÃO',
        description: 'Máquinas, pesos livres e treino de força como base do espaço.',
        sourceNote: 'Referido em listagens e avaliações públicas.',
      },
      {
        id: 'classes',
        index: '02',
        title: 'AULAS DE GRUPO',
        description: 'Aulas em grupo mencionadas publicamente como parte da experiência H12.',
        sourceNote: 'Modalidades concretas ainda por confirmar oficialmente.',
      },
      {
        id: 'cardio',
        index: '03',
        title: 'CARDIO',
        description: 'Zona cardiovascular visível em fotografia pública do espaço.',
        isPlaceholder: true,
        note: 'Confirmar lista real de equipamentos cardio.',
      },
      {
        id: 'coaching',
        index: '04',
        title: 'ORIENTAÇÃO',
        description: 'Avaliações públicas referem staff disponível e instrutores atentos.',
        isPlaceholder: true,
        note: 'Confirmar formato oficial de acompanhamento/PT.',
      },
    ] satisfies TrainingArea[],
  },
  benefits: {
    title: 'PORQUÊ H12?',
    items: [
      {
        index: '01',
        title: 'PRESENÇA LOCAL',
        description: 'O H12 aparece publicamente associado a mais do que uma localização no Algarve.',
      },
      {
        index: '02',
        title: 'MUSCULAÇÃO E MÁQUINAS',
        description: 'A base de treino passa por equipamento de musculação e máquinas.',
      },
      {
        index: '03',
        title: 'EQUIPA NO TERRENO',
        description: 'As avaliações destacam profissionais prestáveis e presentes.',
      },
      {
        index: '04',
        title: 'AMBIENTE ACOLHEDOR',
        description: 'A leitura pública aponta para um ginásio limpo, próximo e sem pose.',
      },
    ] satisfies BenefitItem[],
  },
  coaching: {
    title: 'ENTRA.\nPERGUNTA.\nTREINA MELHOR.',
    body: 'O H12 deve comunicar a presença da equipa sem prometer serviços específicos que ainda não foram confirmados.',
    cta: 'SABER MAIS',
    isPlaceholder: true,
    note: 'Confirmar serviços de PT, avaliações e acompanhamento antes de publicar como oferta oficial.',
  },
  community: {
    eyebrow: 'THE H12 PEOPLE',
    title: 'O ESPAÇO IMPORTA.\nA EQUIPA E AS PESSOAS\nFAZEM O RESTO.',
    description:
      'A perceção pública do H12 é próxima: staff prestável, ambiente acolhedor e uma comunidade local que aparece para treinar.',
  } satisfies CommunityContent,
  clubs: [
    {
      id: 'messines',
      name: 'H12 MESSINES',
      locationLabel: 'São Bartolomeu de Messines',
      description:
        'Clube com fotografia pública do interior, descrito em listagens como espaço grande e acolhedor, com musculação, aulas de grupo e profissionais certificados.',
      fields: [
        {
          label: 'Morada',
          value: 'R. do Grés 15, 8375-009 São Bartolomeu de Messines',
          sourceNote:
            'Também existem listagens antigas com Rua do Rebolo/Aldeia Ruiva; R. do Grés 15 surge em várias fontes recentes.',
        },
        {
          label: 'Telefone',
          value: '+351 964 447 770',
          sourceNote: 'Telefone encontrado em várias listagens públicas.',
        },
        {
          label: 'Perfil',
          value: 'Facebook público encontrado',
          sourceNote: 'Confirmar se é o canal oficial atual antes de publicação final.',
        },
      ],
      schedule: [
        {
          label: 'SEG — SEX',
          value: '06:30 — 13:00 / 16:00 — 21:00',
          sourceNote: 'Horário comum em Cylex e Guia Empresas; há pequenas variações noutras fontes.',
        },
        {
          label: 'SÁB',
          value: '08:00 — 13:00',
          sourceNote: 'Horário comum em Cylex e Guia Empresas.',
        },
        {
          label: 'DOM',
          value: 'Fechado',
          sourceNote: 'Consistente nas listagens consultadas.',
        },
      ],
      mapDescription: 'São Bartolomeu de Messines',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=H12%20Gym%20R.%20do%20Gr%C3%A9s%2015%208375-009%20S%C3%A3o%20Bartolomeu%20de%20Messines',
      mapUrlConfirmed: true,
      imageSrc: '/media/h12-source/h12-source-02.jpg',
      imageAlt: 'Fotografia pública do interior do H12 Gym Messines.',
      imagePosition: 'center center',
      sourceNote: 'Informação alinhada com Ginasios.Fitness, Cylex, Guia Empresas e Top-Rated.',
    },
    {
      id: 'armacao',
      name: 'H12 ARMAÇÃO DE PÊRA',
      locationLabel: 'Armação de Pêra',
      description:
        'Localização descrita publicamente como compacta, central e bem equipada para treino de força funcional, com máquinas e pesos livres.',
      fields: [
        {
          label: 'Morada',
          value: 'R. Dom João II 16 G, 8365-138 Armação de Pêra',
          sourceNote: 'Morada encontrada em páginas Wanderlog públicas.',
        },
        {
          label: 'Contacto',
          value: 'A confirmar',
          isPlaceholder: true,
          sourceNote: 'As páginas consultadas apontam para redes sociais, mas sem contacto oficial claro.',
        },
      ],
      schedule: [
        {
          label: 'SEG — DOM',
          value: '06:00 — 23:00',
          sourceNote: 'Horário indicado em páginas Wanderlog; confirmar oficialmente.',
        },
      ],
      mapDescription: 'Armação de Pêra',
      mapUrl:
        'https://www.google.com/maps/search/?api=1&query=H12%20Gym%20R.%20Dom%20Jo%C3%A3o%20II%2016%20G%208365-138%20Arma%C3%A7%C3%A3o%20de%20P%C3%AAra',
      mapUrlConfirmed: true,
      imageSrc: '/media/h12-source/h12-armacao-wanderlog.jpg',
      imageAlt: 'Fotografia pública do interior do H12 Gym Armação de Pêra.',
      imagePosition: 'center center',
      sourceNote:
        'Informação alinhada com páginas Wanderlog públicas; dados comerciais finais devem ser confirmados pelo H12.',
    },
  ] satisfies ClubContent[],
  gallery: [
    {
      id: 'gallery-1',
      src: '/media/h12-source/h12-source-02.jpg',
      alt: 'Fotografia pública do H12 Gym com relva, cardio e máquinas.',
      label: 'RELVA / CARDIO',
      credit: 'csmarketglasses.com',
      objectPosition: 'center center',
      sourceNote: 'Imagem pública local extraída do mockup de referência.',
    },
    {
      id: 'gallery-2',
      src: '/media/h12-source/h12-source-01.jpg',
      alt: 'Fotografia pública do interior do H12 Gym com máquinas e zona de treino.',
      label: 'MÁQUINAS',
      credit: 'csmarketglasses.com',
      objectPosition: 'center center',
      sourceNote: 'Imagem pública local extraída do mockup de referência.',
    },
    {
      id: 'gallery-3',
      src: '/media/h12-source/h12-source-02.jpg',
      alt: 'Crop da fotografia pública do H12 Gym com foco na relva.',
      label: 'ESPAÇO',
      credit: 'csmarketglasses.com',
      objectPosition: 'left center',
      sourceNote: 'Crop de imagem pública local para protótipo.',
    },
    {
      id: 'gallery-4',
      src: '/media/h12-source/h12-source-01.jpg',
      alt: 'Crop da fotografia pública do H12 Gym com foco em máquinas.',
      label: 'TREINO COMPLETO',
      credit: 'csmarketglasses.com',
      objectPosition: 'right center',
      sourceNote: 'Crop de imagem pública local para protótipo.',
    },
  ] satisfies GalleryItem[],
  memberships: {
    title: 'PLANOS',
    disclaimer:
      'Valores meramente demonstrativos. Consultar condições reais junto do H12 Gym.',
    plans: [
      {
        id: 'essential',
        name: 'ESSENTIAL',
        price: '29,90 €',
        period: '/ mês',
        isExample: true,
        features: ['Ginásio', 'Aulas', 'Acesso base'],
      },
      {
        id: 'h12',
        name: 'H12',
        price: '34,90 €',
        period: '/ mês',
        highlight: 'MAIS ESCOLHIDO',
        isExample: true,
        featured: true,
        features: ['Ginásio', 'Aulas', 'Acompanhamento', 'Sem fidelização'],
      },
      {
        id: 'flex',
        name: 'FLEX',
        price: '39,90 €',
        period: '/ mês',
        isExample: true,
        features: ['Ginásio', 'Aulas', 'Horário flexível'],
      },
    ] satisfies MembershipPlan[],
  },
  location: {
    title: 'H12\nALGARVE',
    fields: [
      {
        label: 'Morada',
        value: 'R. do Grés 15, 8375-009 São Bartolomeu de Messines',
        sourceNote: 'Morada encontrada em várias listagens públicas; confirmar oficialmente.',
      },
      {
        label: 'Telefone',
        value: '+351 964 447 770',
        sourceNote: 'Telefone encontrado em várias listagens públicas; confirmar oficialmente.',
      },
      { label: 'Instagram', value: 'A confirmar', isPlaceholder: true },
      {
        label: 'Facebook',
        value: 'Perfil público encontrado',
        sourceNote: 'URL encontrado em listagem pública; confirmar se é o canal oficial atual.',
      },
    ] satisfies LocationField[],
    mapLabel: 'LOCALIZAÇÃO',
    mapDescription: 'São Bartolomeu de Messines',
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=H12%20Gym%20R.%20do%20Gr%C3%A9s%2015%208375-009%20S%C3%A3o%20Bartolomeu%20de%20Messines',
    mapUrlConfirmed: true,
    sourceNote:
      'Dados de morada e horários recolhidos em diretórios públicos. Confirmar com o H12 antes de publicar como informação oficial.',
    schedule: [
      {
        label: 'SEG — SEX',
        value: '06:30 — 13:00 / 16:00 — 21:00',
        sourceNote: 'Horário comum em Cylex e Guia Empresas; há variações noutras fontes.',
      },
      {
        label: 'SÁB',
        value: '08:00 — 13:00',
        sourceNote: 'Horário comum em Cylex e Guia Empresas; confirmar oficialmente.',
      },
      {
        label: 'DOM',
        value: 'Fechado',
        sourceNote: 'Consistente nas listagens consultadas.',
      },
    ] satisfies LocationField[],
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        id: 'faq-trial',
        question: 'Posso experimentar o ginásio antes de me inscrever?',
        answer: 'Informação provisória. Confirmar condições por clube com a equipa H12.',
        isPlaceholder: true,
      },
      {
        id: 'faq-guidance',
        question: 'Existe acompanhamento?',
        answer:
          'As avaliações públicas referem profissionais disponíveis para ajudar. O formato oficial de acompanhamento ainda deve ser confirmado.',
        isPlaceholder: true,
      },
      {
        id: 'faq-signup',
        question: 'Como posso fazer a inscrição?',
        answer: 'Processo de inscrição a confirmar junto do clube.',
        isPlaceholder: true,
      },
      {
        id: 'faq-modalities',
        question: 'Que modalidades estão disponíveis?',
        answer:
          'Aulas de grupo são mencionadas publicamente, mas a lista oficial de modalidades ainda não está confirmada.',
        isPlaceholder: true,
      },
      {
        id: 'faq-location',
        question: 'Onde fica o H12?',
        answer:
          'As listagens públicas apontam para H12 em São Bartolomeu de Messines e Armação de Pêra. Confirmar dados oficiais antes de publicação final.',
        isPlaceholder: true,
      },
    ] satisfies FaqItem[],
  },
  finalCta: {
    title: ['READY?', 'YOUR NEXT', 'WORKOUT', 'STARTS HERE.'],
    subtitle: 'H12 GYM · ALGARVE',
    button: 'COMEÇAR',
  },
  footer: {
    text: 'H12 GYM — Protótipo web alinhado com informação pública. Dados operacionais sujeitos a confirmação oficial.',
  },
}

export type SiteContent = typeof siteContent
