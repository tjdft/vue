# Axios

Axios é um cliente HTTP baseado em "promessas" que pode ser utilizado em aplicações de frontend. Nesta solução o Axios foi instalado como um módulo do Nuxt \(`axios-module`\)  e é injetado globalmente na instância Vue \(`this.$axios`\). Pode ser utilizada para realizar as operações básicas de uma API REST convencional:

```js
// GET  --> http://api.site.com/imoveis
this.$axios.get('/imoveis')

// GET  --> http://api.site.com/imoveis?city=Portland&bedrooms=3
this.$axios.get('/imoveis', {
    params: {
        city: 'Portland',
        bedrooms: 3
    }  
})

// POST 
this.$axios.post('/imoveis', {
    params: {
        title: 'My House',
        owner: 'Julia Roberts',
        city: 'Portland',
        bedrooms: 6
    }  
})
```

## Promessa

Uma chamada ao backend utilizando o Axios, tradicionalmente, retorna uma "promessa". Uma "promessa" garante que em determinado momento no tempo haverá um retorno, sem implicar em "pausa" nas linhas de código seguinte. Isto significa que o código javascript logo após  continuaria sendo executado normalmente \(linha1, linha2, linha3\), mesmo sem o retorno da resposta do backend. Em conjunto utilizamos o `then` para indicar que, no momento que houver resposta do backend, determina ação deve ser executada. Neste caso popular `this.moveis` com o retorno de dados, independente de quando houver a resposta do backend.

```vue
<script>
    export default{
        data() {
            return {
                imoveis: []
            }    
        },
        mounted(){
            this.$axios.get('/imoveis').then(response => {
                this.imoveis = response.data
            })
            // linha 1  -- continua a execução mesmo sem resposta do backend
            // linha 2
            // linha 3
        }
    }
</script>
```

## Async/await

Outra abordagem é utilizar `async/await`. Isto indica que a linha de código marcada com `await` é "pausada" até que haja resposta do backend. Note também que o método como um todo deve ser marcado com `async` .

```vue
<script>
    export default{
        data() {
            return {
                imoveis: []
            }    
        },
        async mounted(){
            let response = await this.$axios.get('/imoveis')
            this.imoveis = response.data

            // linha 1 -- nenhuma linha é executada até que chamada maracada com "await" seja finalizada
            // linha 2
            // linha 3
        }
    }
</script>
```



