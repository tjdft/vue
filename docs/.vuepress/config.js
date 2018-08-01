module.exports = {
  title: 'Introdução prática ao VUE',
  description: 'Proposta de arquitetura para SPA',
  markdown: {
    lineNumbers: true
  },
  base: '/vue-introducao/',
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/tjdft' },
    ],
    sidebar: [
      {
        title: 'GET STARTED',
        children: [
          '/',
          '/instalacao',
          '/projeto',
        ]
      },
      {
        title: 'NUXT',
        children: [
          '/estrutura-de-pastas',
          '/configuracao',
        ]
      },
      {
        title: 'CONCEITOS BÁSICOS',
        children: [
          '/navegacao',
          '/componentes',
          '/paginas',
        ]
      },
      {
        title: 'VUETIFY',
        children: [
          '/vuetify/componentes-estilizados',
        ]
      },
      {
        title: 'VUE',
        children: [
          '/vue/sintaxe',
          '/vue/componentes',
          '/vue/ciclo-de-vida',
        ]
      },
      {
        title: 'AVANÇADO',
        children: [
          '/avancado/axios',
          '/avancado/autenticacao',
          '/avancado/deploy',
        ]
      },
    ]
  }
}