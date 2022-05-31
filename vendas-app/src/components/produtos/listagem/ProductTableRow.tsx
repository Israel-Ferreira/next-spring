import React, { Fragment } from 'react'
import Produto from 'models/produto'

interface ProductTableRowProps {
    produto: Produto
    onEdit: (produto : Produto) => void
    onDelete: (produto : Produto) => void
}


export const ProductTableRow : React.FC<ProductTableRowProps> = ({produto, onDelete, onEdit}) => {
    return (
        <Fragment>
            <tr>
                <td>{produto.id}</td>
                <td>{produto.sku}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>
                    <button onClick={e => onEdit(produto) } className='button is-success is-rounded is-small'>
                        Editar
                    </button>
                    <button onClick={e => onDelete(produto) } className='button is-danger is-rounded is-small'>
                        Excluir
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}