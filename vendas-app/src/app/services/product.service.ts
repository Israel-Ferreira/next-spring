import {httpClient} from "app/client"
import { AxiosResponse } from "axios"

import Produto from "models/produto"

const resourceUrl : string =  "/api/produtos"

export const useProdutoService = () => {
    const salvar = async (produto : Produto) : Promise<Produto> =>  {
        const response : AxiosResponse<Produto> = await httpClient.post(resourceUrl, produto)
        return response.data
    } 

    const atualizar = async (id: number, produto: Produto) : Promise<void> => {
        const updateUri =  `${resourceUrl}/${id}`
        await httpClient.put(updateUri, produto)
    }


    const getProduto = async (id) : Promise<Produto>  => {
        const response : AxiosResponse<Produto> = await httpClient.get(`${resourceUrl}/${id}`)
        return await response.data
    }

    const deletar = async (id) : Promise<void> => {
        const response : AxiosResponse<Produto> = await httpClient.delete(`${resourceUrl}/${id}`)
        await response
    }
    

    return {salvar, atualizar, getProduto, deletar}
}