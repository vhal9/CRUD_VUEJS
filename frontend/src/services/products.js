import {http} from './config'

export default{
    listar: () => {
        return http.get('products')
    },
    salvar: (product) => {
        return http.post('products',product)
    },
    atualizar:(product) => {
        return http.put(`products/${product.id}`, product)
    },
    apagar: (product) =>{
        return http.delete(`products/${product.id}`)
    }
}