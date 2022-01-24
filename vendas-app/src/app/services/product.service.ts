import {httpClient} from "app/client"
import { AxiosResponse } from "axios"

import Produto from "models/produto"

const resourceUrl : string =  "/api/produtos"

export const useProdutoService = () => {
    const salvar = async (produto : Produto) : Promise<Produto> =>  {
        const response : AxiosResponse<Produto> = await httpClient.post(resourceUrl, produto)
        return response.data
    }


    return {salvar}
}