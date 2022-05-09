import Produto from 'models/produto'
import React, { ChangeEvent, Fragment, useState } from 'react'
import ProdutoField from './ProdutoField'

import {converterEmBigDecimal, formatReal} from 'app/utils/money'

import Link from 'next/link'
import * as yup from 'yup';

import { useProdutoService } from 'app/services'
import Input from 'components/common/Input'
import ActionButtonForm from './ActionButtonForm'
import Message, { Alert } from 'components/common/Mensagem'


interface FormProdutoProps {
    messages?: [Alert]
    setMessages?: (Alert) => void
}


const validationSchema = yup.object().shape({
    nome: yup.string().required(),
    sku: yup.string().required(),
    preco: yup.number().required(),
    descricao: yup.string().required()
})


const FormProduto: React.FC<FormProdutoProps> = ({setMessages,messages, ...props}) => {
    const [sku, setSku] = useState('12345')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState<number>(0.00)
    const [cadastro, setCadastro] = useState<string>("")

    const [price, setPrice] = useState(0.00)

    const { salvar, atualizar } = useProdutoService()

    const submit = async () => {
        const produto: Produto = {
            nome: productName,
            descricao: description,
            preco: converterEmBigDecimal(price),
            sku
        }


        validationSchema.validate(produto)
            .then(obj => {
                if(id){
                    atualizar(id, produto)
                        .then(_ => {
                            setMessages([
                                {
                                    msgType: "success",
                                    text: "Produto Atualizado com sucesso",
                                }
                            ])
                        })
                        .catch(err => {
                            setMessages([ 
                                {msgType: "danger", text: "", field: "" }
                            ])
                        })
                }else{
                    console.log(produto)
            
                    salvar(produto)
                        .then(resp => {
                            setId(resp.id ? resp.id : 0)
                            setCadastro(resp.dataCriacao ? resp.dataCriacao : "dd/MM/yyyy");
        
                            setMessages([{msgType: "success", text: "Produto criado com sucesso"}])
                        })
                        .catch(err => {
                            setMessages([{msgType: "danger", text: "Erro ao criar o usuário"}])
                        })
        
                }

            })
            .catch(err => {
                const field = err.path
                const { message} = err

                setMessages([
                    {msgType: "danger", text: message, field }
                ])


                console.log(JSON.parse(JSON.stringify(err)))
            })

    }


    return (
        <Fragment>
            <div className="FormProduto">
                {cadastro && id ? 
                    <div className="columns">
                        <Input labelText="Código:"
                            columnSize="is-half"
                            value={id}
                            id="inputId"
                            disabled
                        />

                        <Input labelText="Data Cadastro:"
                            columnSize="is-half"
                            value={cadastro}
                            id="inputDataCadastro"
                            disabled
                        />

                    </div> : <></>
                }


                <div className="columns">
                    <ProdutoField columnSize="6" value={sku} labelText="SKU" isNumeric={false} placeholder="Digite o sku" onChangeValue={setSku} />
                    <Input labelText="Preço" columnSize='6' placeholder='Digite o preço' onChange={setPrice} value={price}  currency maxLength={16} />
                </div>

                <div className="columns">
                    <ProdutoField labelText="Nome do Produto" isNumeric={false} placeholder="Digite o nome do produto..." onChangeValue={setProductName} />
                </div>

                <div className="columns">
                    <div className="field column is-full">
                        <label htmlFor="" className="label">Descrição</label>
                        <div className="control">
                            <textarea name="" id="" cols={30} rows={10} className="textarea" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                        </div>
                    </div>
                </div>



                <div className="field is-grouped">
                    <div className="control">
                        {id ? 
                            <ActionButtonForm label="Atualizar" onClick={submit} /> :
                            <ActionButtonForm label="Salvar" onClick={submit} />
                        }
                    </div>

                    <div className="control">
                        <button className="button is-danger">
                            <Link href="/">
                                voltar
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormProduto