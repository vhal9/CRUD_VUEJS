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

          <tr v-for="productList of products" :key="productList.id">

            <td>{{productList.name}}</td>
            <td>{{productList.quant}}</td>
            <td>{{productList.valor}}</td>
            <td>
              <button @click="editar(productList)" class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
              <button @click="remover(productList)" class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
            </td>

          </tr>

        </tbody>
      
      </table>
      

    </div>
    
  </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  
  export default{
    name: "App",

    computed: {
      ...mapGetters("produtosModule", ["products"]),
      ...mapGetters("produtoModule", ["product"])
    },
    mounted (){
      this.listar();
    },
    methods:{
      ...mapActions("produtosModule", ["getProductsAction", "setProductsAction"]),
      ...mapActions("produtoModule", ["saveProductAction", "setProductAction", "deleteProductAction"]),
      listar(){
        this.getProductsAction();
      },
      salvar(){
        this.saveProductAction(this.product)
        this.listar();
      },
      editar(productList){
        this.setProductAction(productList);
        this.listar();
      },
      remover(productList){
        this.deleteProductAction(productList);
        this.listar();
      }
    },
  };
</script>