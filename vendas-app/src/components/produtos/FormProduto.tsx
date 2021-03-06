import Produto from 'models/produto'
import React, { ChangeEvent, Fragment, useEffect, useState } from 'react'

import {converterEmBigDecimal, formatReal} from 'app/utils/money'

import Link from 'next/link'
import * as yup from 'yup';

import { useProdutoService } from 'app/services'
import Input from 'components/common/Input'
import ActionButtonForm from './ActionButtonForm'
import Message, { Alert } from 'components/common/Mensagem'


import {useRouter} from 'next/router'
import { MoneyInput } from 'components/common/input/MoneyInput';


interface FormProdutoProps {
    messages?: [Alert]
    setMessages?: (Alert) => void
}


interface FormErrors {
    sku?: string
    nome?: string
    preco?: string
    descricao?: string
}

const msg =  "Campo Obrigatorio";

const validationSchema = yup.object().shape({
    nome: yup.string().trim().required(msg),
    sku: yup.string().trim().required(msg),
    preco: yup.number().required(msg).moreThan(0, "O Valor deve ser maior que 0,00"),
    descricao: yup.string().trim().required(msg)
        .min(10, "Deve possuir dez caracteres")
})


const FormProduto: React.FC<FormProdutoProps> = ({setMessages,messages, ...props}) => {
    const [sku, setSku] = useState('12345')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')
    const [id, setId] = useState<number>(0.00)
    const [cadastro, setCadastro] = useState<string>("")
    const [errors, setErrors] = useState<FormErrors>({})

    const [price, setPrice] = useState('')
    const router = useRouter()

    const { id: productId }  = router.query;

    const { salvar, atualizar, getProduto } = useProdutoService()


    useEffect(() => {
        if(productId){
            const produto  = getProduto(productId)

            produto.then(prd => {
                setSku(prd.sku)
                setCadastro(prd.dataCriacao)
                setId(prd.id)

        
    
                setPrice(formatReal(`${prd.preco}`))
                setProductName(prd.nome)
                setDescription(prd.descricao)
            })
            
        }

    },[productId])


    const submit = async () => {
        const produto: Produto = {
            nome: productName,
            descricao: description,
            preco: converterEmBigDecimal(price),
            sku
        }


        validationSchema.validate(produto)
            .then(obj => {
                setErrors({})
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
                            setMessages([{msgType: "danger", text: "Erro ao criar o usu??rio"}])
                        })
        
                }

            })
            .catch(err => {
                const field = err.path
                const { message} = err

                setMessages([
                    {msgType: "danger", text: message, field }
                ])

                setErrors({
                    [field]: msg
                })


                console.log(JSON.parse(JSON.stringify(err)))
            })

    }


    return (
        <Fragment>
            <div className="FormProduto">
                {cadastro && id ? 
                    <div className="columns">
                        <Input labelText="C??digo:"
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
                    <Input columnSize='6' value={sku} labelText="SKU" placeholder="Digite o sku" onChange={e => setSku(e.target.value)} error={errors.sku} />
                    <MoneyInput  labelText="Pre??o" columnSize='6' placeholder='Digite o pre??o' onChange={e => setPrice(e.target.value)}  value={price} error={errors.preco}  maxLength={16} />
                    {/* <Input labelText="Pre??o" columnSize='6' placeholder='Digite o pre??o' onChange={e => setPrice(e.target.value)} formatter={formatReal} value={price} error={errors.preco}  maxLength={16} /> */}
                </div>

                <div className="columns">
                    <Input  value={productName} labelText='Nome do Produto' placeholder="Digite o nome do produto..." onChange={e => setProductName(e.target.value)} error={errors.nome} />
                </div>

                <div className="columns">
                    <div className="field column is-full">
                        <label htmlFor="" className="label">Descri????o</label>
                        <div className="control">
                            <textarea name="" id="" cols={30} rows={10} className="textarea" value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                            {errors.descricao && <p className='help is-danger'>{errors.descricao}</p>}
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
                        <Link href="/consultas/produtos">
                            <button className="button">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormProduto