import React from 'react'
import Link from 'next/link'

import {Layout} from 'components/layout'
import { ProductsTable } from './ProductsTable'
import Produto from 'models/produto'

const ListagemProdutos : React.FC = props => {

    const produtos : Produto[] = [
        {id: 2, nome: "Televisão Samsung QLED 75 Pol. Smart Tv Tizen 8K", sku: "ZXNQ490", descricao: "", preco: 8000},
        {id: 3, nome: "Televisão Samsung QLED 75 Pol. Smart Tv Tizen 8K", sku: "ZXNQ490", descricao: "", preco: 8000},
        {id: 4, nome: "Televisão Samsung QLED 75 Pol. Smart Tv Tizen 8K", sku: "ZXNQ490", descricao: "", preco: 8000},
        {id: 5, nome: "Televisão Samsung QLED 75 Pol. Smart Tv Tizen 8K", sku: "ZXNQ490", descricao: "", preco: 8000}
    ]

    return (
        <Layout title='Produtos'>
            <Link href={'/cadastros/produtos'}>
                <button className='button is-warning'>
                    Novo Produto
                </button>
            </Link>
            <br />

            <ProductsTable products={produtos} />
        </Layout>
    )
}


export default ListagemProdutos