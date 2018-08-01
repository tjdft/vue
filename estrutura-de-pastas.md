# Estrutura de Pastas

A estrutura inicial de pastas/arquivos é baseada no template inicial de projeto do **Nuxt**.

* **.nuxt:** _Não modifique_. Gerada dinamicamente pelo Nuxt. 
* **assets:** arquivos de estilo não compilados. ex: sass, less, stylus.
* **components**: componentes Vue da aplicação.
* **layouts**: o layout base da aplicação.
* **middleware**: definição de middlewares personalizados da aplicação.
* **node\_modules**: _Não modifique_. Gerada automaticamente pelo Yarn.
* **pages**: contém as páginas da aplicação \(rotas de entrada\).
* **plugins**: contém os plugins adicionais utilizados pela aplicação.
* **static**: arquivos estáticos,  ex: imagens.
* **store**: contém arquivos de Gerenciamento de Estados Avançado \(Vuex, não abordado neste manual\).

O arquivo `.gitignore` contém as pastas que não devem ser incluídas no repositório `git`, durante o _commit_. Pois, estas são geradas automaticamente quando o projeto é compilado em cada máquina.

```bash
# conteúdo do arquivo .gitignore
.nuxt
/node_modules
/dist
```

::: tip Saiba mais
[https://nuxtjs.org/guide/directory-structure](https://nuxtjs.org/guide/directory-structure)
:::