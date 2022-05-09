import React, { Fragment } from 'react'
import Produto from 'models/produto'

interface ProductTableRowProps {
    produto: Produto
}


export const ProductTableRow : React.FC<ProductTableRowProps> = ({produto}) => {
    return (
        <Fragment>
            <tr>
                <td>{produto.id}</td>
                <td>{produto.sku}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>
                    <button className='button is-success'>Editar</button>
                    <button className='button is-danger'>Excluir</button>
                </td>
            </tr>
        </Fragment>
    )
}