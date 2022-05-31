import React from 'react'
import Link from 'next/link'

import {Layout} from 'components/layout'
import { ProductsTable } from './ProductsTable'
import Produto from 'models/produto'

import useSWR from 'swr'
import { httpClient } from 'app/client'
import { AxiosResponse } from 'axios'

const ListagemProdutos : React.FC = props => {

    const { data : result, error } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', url => httpClient.get(url) )

    if(!result){
        return <div>Carregando</div>
    }

    return (
        <Layout title='Produtos'>
            <Link href={'/cadastros/produtos'}>
                <button className='button is-warning'>
                    Novo Produto
                </button>
            </Link>
            <br />

            <ProductsTable products={result.data} />
        </Layout>
    )
}


export default ListagemProdutos