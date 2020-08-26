import * as mutationTypes from "../mutation_types";
import ProductServices from "../../services/products"


const state = {
    products: []
};

const getters = {
    products: (state) =>{
        return state.products;
    }
};

const mutations = {
    [mutationTypes.GET_STORE_PRODUCTS] (state, objetos){
        state.products = objetos
    }
};

const actions = {
    getProductsAction({ commit }){
        return new Promise((resolve) => {
            ProductServices.listar()
                .then((resposta) => {
                    console.log("chamou mutation!");
                    commit(mutationTypes.GET_STORE_PRODUCTS, resposta.data);
                    console.log("Resposta recebida", resposta);
                    resolve();
                })
                .catch(erro => {
                    console.log("Deu erro", erro);
                })
        })
    },
    setProductsAction({ commit }, products){
        commit(mutationTypes.GET_STORE_PRODUCTS, products);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}