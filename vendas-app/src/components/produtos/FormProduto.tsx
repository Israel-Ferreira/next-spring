import Produto from 'models/produto'
import React, { ChangeEvent, Fragment, useState } from 'react'
import ProdutoField from './ProdutoField'

import {converterEmBigDecimal, formatReal} from 'app/utils/money'

import Link from 'next/link'
import { useProdutoService } from 'app/services'
import Input from 'components/common/Input'
import ActionButtonForm from './ActionButtonForm'


const FormProduto: React.FC = props => {
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

        if(id){
            atualizar(id, produto)
                .then(_ => console.log("Produto Atualizado com sucesso"))
                .catch(err => console.log(`Erro ao atualizar o produto: ${err}`))
        }else{
            console.log(produto)
    
            const produtoResponse = await salvar(produto)

            console.log(converterEmBigDecimal(`${produto.preco}`))
    
            setId(produtoResponse.id ? produtoResponse.id : 0)
            setCadastro(produtoResponse.dataCriacao ? produtoResponse.dataCriacao : "dd/MM/yyyy");
    
            console.log(produtoResponse)
        }

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