import React, { ChangeEvent, Fragment, useState } from 'react'
import ProdutoField from './ProdutoField'



const FormProduto: React.FC = props => {
    const [sku, setSku] = useState('12345')
    const [productName, setProductName] = useState('')
    const [description, setDescription] = useState('')

    const [price, setPrice] = useState(0.00)

    const changeSkuValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        console.log(`Valor Atual: ${sku}, Valor Futuro: ${value}`)
        setSku(value)
    }

    const changeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log(e.target.value)
        setSku(e.target.value)
    }

    const changePriceValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        if (parseFloat(value)) {
            let priceVal = parseFloat(value)
            setPrice(priceVal)
        } else {
            alert()
        }

    }


    return (
        <Fragment>
            <div className="FormProduto">

                <div className="columns">
                    <ProdutoField columnSize="6" labelText="SKU" isNumeric={false} placeholder="Digite o sku" onChangeValue={changeSkuValue} />
                    <ProdutoField columnSize="6" labelText="Preço" placeholder="Digite o preço" isNumeric={true} onChangeValue={e => console.log(e.target.value)} />
                </div>

                <div className="columns">
                    <ProdutoField labelText="Nome do Produto" isNumeric={false} placeholder="Digite o nome do produto..." onChangeValue={e => console.log(e.target.value)} />
                </div>

                <div className="columns">
                    <div className="field column is-full">
                        <label htmlFor="" className="label">Descrição</label>
                        <div className="control">
                            <textarea name="" id="" cols={30} rows={10} className="textarea" onChange={changeDescription} ></textarea>
                        </div>
                    </div>
                </div>



                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link" onClick={e => console.log(`${productName} - ${price}`)} >Salvar</button>
                    </div>

                    <div className="control">
                        <button className="button is-danger">Voltar</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FormProduto