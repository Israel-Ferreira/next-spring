import React, { Fragment, useState } from 'react'

import { Layout } from 'components'
import FormProduto from './FormProduto'
import { Alert } from 'components/common/Mensagem'


const Cadastro: React.FC = () => {
    const [messages, setMessages] = useState<Array<Alert>>([])

    return (
        <Fragment>
            <Layout title="Cadastro de Produtos" messages={messages}>
                <FormProduto setMessages={setMessages} />
            </Layout>
        </Fragment>
    )
    
}
export default Cadastro