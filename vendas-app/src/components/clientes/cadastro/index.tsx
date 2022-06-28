import { Layout } from 'components/layout'
import { Cliente } from 'models/cliente'
import React, { useState } from 'react'
import { ClientForm } from './form'

export const CadastroCliente : React.FC = () => {
    const [cliente, setCliente] = useState<Cliente>({})


    const handleSubmit = (cliente: Cliente) => {
        console.log(cliente)
    }

    return (
        <Layout title="Clientes">
            <ClientForm cliente={cliente}  onSubmit={handleSubmit} />
        </Layout>
    )
}