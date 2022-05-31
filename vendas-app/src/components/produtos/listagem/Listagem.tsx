import React from 'react'
import Link from 'next/link'

import {Layout} from 'components/layout'
import { ProductsTable } from './ProductsTable'
import Produto from 'models/produto'

import useSWR from 'swr'
import { httpClient } from 'app/client'
import { AxiosResponse } from 'axios'

import Loader from 'components/common/loader'

const ListagemProdutos : React.FC = props => {

    const { data : result, error } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', url => httpClient.get(url) )


    return (
        <Layout title='Produtos'>
            <Link href={'/cadastros/produtos'}>
                <button className='button is-warning'>
                    Novo Produto
                </button>
            </Link>
            <br />
            <Loader show={!result} />

            <ProductsTable products={result?.data || []} />
        </Layout>
    )
}


export default ListagemProdutos