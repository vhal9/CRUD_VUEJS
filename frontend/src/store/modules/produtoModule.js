import * as mutationTypes from "../mutation_types";
import ProductServices from "../../services/products"


const state = {
    product: {
        id :  null,
        name: null,
        quant: null,
        valor: null
    }
};

const getters = {
    product: (state) =>{
        return state.product;
    }
};

const mutations = {
    [mutationTypes.SET_STORE_PRODUCT] (state, objeto){
        state.product = objeto
    },
    [mutationTypes.CLEAN_PRODUCTS_ACTION] (state){
        state.product = {
            id :  null,
            name: null,
            quant: null,
            valor: null
        }
    }
};

const actions = {
    saveProductAction({commit}, data){
        if (data.id === null){
            return new Promise((resolve, reject)=> {
                ProductServices.salvar(data)
                    .then(response => {
                        if(response.status === 200){
                            console.log("salvo com sucesso");
                        }
                        commit(mutationTypes.CLEAN_PRODUCTS_ACTION);
                        resolve();
                })
                .catch(erro => {
                    console.log(erro);
                    reject();
                })
            })
            
        }else{
            return new Promise((resolve, reject)=> {
                ProductServices.atualizar(data)
                    .then(response => {
                        if(response.status === 200){
                            console.log("salvo com sucesso");
                        }
                        commit(mutationTypes.CLEAN_PRODUCTS_ACTION);
                        resolve();
                })
                .catch(erro => {
                    console.log(erro);
                    reject();
                })
            });
        }
        
    },
    setProductAction({ commit }, data){
        commit(mutationTypes.SET_STORE_PRODUCT, data);
    },
    deleteProductAction({commit}, data){
        return new Promise((resolve, reject)=> {
            ProductServices.apagar(data)
                .then(response => {
                    if(response.status === 200){
                        console.log("deletado com sucesso");
                    }
                    commit(mutationTypes.CLEAN_PRODUCTS_ACTION);
                    resolve();
            })
            .catch(erro => {
                console.log(erro);
                reject();
            })
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}