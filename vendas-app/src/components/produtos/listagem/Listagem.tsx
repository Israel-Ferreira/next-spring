import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import {useRouter} from "next/router"

import {Layout} from 'components/layout'
import { ProductsTable } from './ProductsTable'
import Produto from 'models/produto'

import useSWR from 'swr'
import { httpClient } from 'app/client'
import { AxiosResponse } from 'axios'

import Loader from 'components/common/loader'
import { useProdutoService } from 'app/services'
import { Alert } from 'components/common/Mensagem'

const ListagemProdutos : React.FC = props => {
    const [messages, setMessages] = useState<Array<Alert>>([])

    const {deletar} = useProdutoService()
    const [lista, setLista] = useState<Produto[]>([])
    
    const router = useRouter()
    const { data : result, error } = useSWR<AxiosResponse<Produto[]>>('/api/produtos', url => httpClient.get(url) )

    const onEdit = (produto : Produto) => {
        const url =  `/cadastros/produtos?id=${produto.id}`

        router.push(url)
    }


    useEffect(() => {
        setLista(result?.data || [])
    }, [result])


    const onDelete = (produto: Produto) => {
        deletar(produto.id)
            .then(response => {
                setMessages([{
                    msgType: "success",
                    text: "Produto deletado com sucesso"
                }])

                const listaAtualizada : Produto[] = lista?.filter(prod => prod.id !== produto.id)
                setLista(listaAtualizada)
            })
            .catch(err => setMessages([{
                msgType: "danger",
                text: "Erro ao deletar o produto"
            }]))
    }


    return (
        <Layout title='Produtos' messages={messages}>
            <Link href={'/cadastros/produtos'}>
                <button className='button is-warning'>
                    Novo Produto
                </button>
            </Link>
            <br />
            <br />
            <Loader show={!result} />

            <ProductsTable products={lista} onDelete={onDelete} onEdit={onEdit} />
        </Layout>
    )
}


export default ListagemProdutos