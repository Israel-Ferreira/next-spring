import React from 'react'
import Link from 'next/link'

import {Layout} from 'components/layout'

const ListagemProdutos : React.FC = props => {
    return (
        <Layout title='Produtos'>
            <Link href={'/cadastros/produtos'}>
                <button className='button is-warning'>
                    Novo Produto
                </button>
            </Link>

            <br />
        </Layout>
    )
}


export default ListagemProdutos