# Introdução prática ao VUE

Esta documentação foi construída com [VUEPRESS](https://vuepress.vuejs.org/). Utiliza *markdown* para gerar documentação com páginas estáticas.

## Instalação

Instale o VUEPRESS globalmente
```bash
yarn global add vuepress 
```

Clone este repositório
```bash
git clone https://github.com/tjdft/vue-introducao.git
```

Inicie o servidor local e começe a escrever

```bash
cd docs && 
vuepress dev
```

## Deploy

1. Commit e push as alterações nos documentos para este repositório do Github
1. Para publicar a documentação, execute o script `deploy.sh`
1. Automaticamente estará disponível em [https://tjdft.github.io/vue](https://tjdft.github.io/vue)