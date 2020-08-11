<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Produtos Front</a>
      </div>
    </nav>

    <div class="container">

      <form @submit.prevent="salvar">

          <label>Nome</label>
          <input type="text" placeholder="Nome" v-model="product.name">
          <label>Quantidade</label>
          <input type="number" placeholder="QTD" v-model="product.quant">
          <label>Valor</label>
          <input type="text" placeholder="Valor" v-model="product.valor">

          <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

      </form>

      <table>

        <thead>

          <tr>
            <th>NOME</th>
            <th>QTD</th>
            <th>VALOR</th>
            <th>OPÇÕES</th>
          </tr>

        </thead>

        <tbody>

          <tr v-for="product of products" :key="product.id">

            <td>{{product.name}}</td>
            <td>{{product.quant}}</td>
            <td>{{product.valor}}</td>
            <td>
              <button @click="editar(product)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(product)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>

    </div>

  </div>
</template>

<script>
  import Product from './services/products';
  export default{
    data(){
      return {
        products: [],
        product: {
          id:'',
          name:'',
          quant: '',
          valor: ''
        }
      }
    },
    mounted(){
      this.listar()
    },
    methods:{
      listar(){
        Product.listar().then(resposta => {
          this.products = resposta.data
        })
      },
      salvar(){
        if (!this.product.id){
          Product.salvar(this.product).then(()=>{
            this.product = {}
            alert('Salvo com sucesso!')
            this.listar()
          })
        }
        else{
          Product.atualizar(this.product).then(()=>{
            this.product = {}
            alert('Atualizado com sucesso!')
            this.listar()
          })
        }
      },
      editar(product){
        this.product = product
        this.listar()
      },
      remover(product){
        if (confirm('Deseja excluir o produto?')){
          Product.apagar(product).then(()=>{
            this.listar();
          })
        }
      }
    }
  };
</script>