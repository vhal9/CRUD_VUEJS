import {http} from './config'

const ProductServices = {
    listar: async () => {
        return http.get('products')
    },
    salvar: async (product) => {
        return http.post('products',product)
    },
    atualizar: async (product) => {
        return http.put(`products/${product.id}`, product)
    },
    apagar: async (product) =>{
        return http.delete(`products/${product.id}`)
    }
};
export default  ProductServices;