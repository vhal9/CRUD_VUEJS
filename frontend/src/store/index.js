import Vue from "vue";
import Vuex from "vuex";
import produtosModule from "./modules/produtosModule";
import produtoModule from "./modules/produtoModule";
Vue.use(Vuex);

export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    modules:{
        produtosModule,
        produtoModule

    }
});