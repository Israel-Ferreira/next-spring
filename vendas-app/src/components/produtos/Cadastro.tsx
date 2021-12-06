import React, { Fragment } from 'react'

import { Layout } from 'components'
import FormProduto from './FormProduto'


const Cadastro: React.FC = () => (
    <Fragment>
        <Layout title="Cadastro de Produtos">
            <FormProduto />
        </Layout>
    </Fragment>
)

export default Cadastro