# Configuração

O Nuxt simplifica e abstrai as configurações do Vue. Estas são as configurações de interesse da nossa aplicação. Veja em `nuxt.config.js` . Tudo vem configurado por padrão, exceto o AXIOS. Compare seu arquivo de configuração e adicione o trecho que falta. Precisamos configurar a "url base" do backend.

```bash
  # CSS global aplicado. 
  # Aqui é possível incluir folhas de estilo personalizadas da aplicação
  # O estilo global do Vuetify vem incluído por padrão

  css: [
    'vuetify/src/stylus/main.styl'
  ]

  # Lista de plugins utilizados no projeto
  # Vuetify é incluído no projeto como um plugin

  plugins: [
    '@/plugins/vuetify'
  ]

  # Lista de módulos utilizados no projeto
  modules: [
    '@nuxtjs/axios'
  ]

  # Axios é a biblioteca para requisições ajax no backend
  axios: {
    baseURL: 'https://imoveis-app.herokuapp.com/api'
  }
```

::: danger 
O backend está hospedado em um servidor gratuito. Portanto, as requsições ao backend serão mais lentas que o normal.
:::

::: tip 
AXIOS é o pacote utilizado para fazer requisições ao backend.
:::

::: tip Configuração do NUXT
 [https://nuxtjs.org/guide/configuration](https://nuxtjs.org/guide/configuration)
:::