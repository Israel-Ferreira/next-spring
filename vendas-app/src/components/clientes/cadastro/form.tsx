import React from 'react'
import { useFormik } from 'formik'

import { Cliente } from 'models/cliente'
import Input from 'components/common/Input'
import Link from 'next/link'


interface ClientFormProps {
    cliente: Cliente
    onSubmit: (cliente: Cliente) => void
}


const formScheme: Cliente = {
    cpf: '',
    dataCadastro: '',
    dataNascimento: '',
    email: '',
    endereco: '',
    nome: '',
    id: '',
    telefone: ''

}

export const ClientForm: React.FC<ClientFormProps> = ({ cliente, onSubmit }) => {
    const formik = useFormik<Cliente>({
        initialValues: { ...formScheme, ...cliente },
        onSubmit
    })


    return (
        <form onSubmit={formik.handleSubmit}>

            {
                formik.values.id ? 
                <div className="columns">
                    <Input labelText="Código:"
                        columnSize="is-half"
                        value={formik.values.id}
                        id="inputId"
                        disabled
                    />

                    <Input labelText="Data Cadastro:"
                        columnSize="is-half"
                        value={formik.values.dataCadastro}
                        id="inputDataCadastro"
                        disabled
                    />
                </div> : <></>

            }


            <div className="columns">
                <Input labelText="Nome"
                    id="nome" name="nome"
                    autoComplete="off"
                    required
                    onChange={formik.handleChange} value={formik.values.nome} />
            </div>
            <div className="columns">
                <Input labelText="CPF"
                    required
                    id="cpf" name="cpf"
                    columnSize='half'
                    autoComplete='off'
                    onChange={formik.handleChange} value={formik.values.cpf} />

                <Input labelText="Data de Nascimento"
                    required={true}
                    id="dataNascimento" name="dataNascimento"
                    type={'date'}
                    columnSize="half"
                    autoComplete='off'
                    onChange={formik.handleChange} value={formik.values.dataNascimento} />
            </div>
            <div className="columns">
                <Input labelText="Endereço"
                    id="endereco" name="endereco" autoComplete='off'
                    onChange={formik.handleChange}
                    value={formik.values.endereco} />
            </div>
            <div className="columns">
                <Input labelText="Email"
                    required
                    id="email" name="email"
                    columnSize='half'
                    autoComplete='off'
                    onChange={formik.handleChange} value={formik.values.email} />

                <Input labelText="Telefone"
                    id="telefone" name="telefone"
                    columnSize="half"
                    autoComplete='off'
                    onChange={formik.handleChange} value={formik.values.telefone} />
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button type="submit" className='button is-primary'>
                        {formik.values.id ? "Atualizar" : "Salvar"}
                    </button>
                </div>

                <div className="control">
                    <Link href="/consultas/produtos">
                        <button className="button">
                            Voltar
                        </button>
                    </Link>
                </div>

            </div>
        </form>
    )
}