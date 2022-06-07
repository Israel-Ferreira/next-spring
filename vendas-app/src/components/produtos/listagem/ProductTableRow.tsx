import React, { Fragment, useState } from 'react'
import Produto from 'models/produto'

interface ProductTableRowProps {
    produto: Produto
    onEdit: (produto : Produto) => void
    onDelete: (produto : Produto) => void
}


export const ProductTableRow : React.FC<ProductTableRowProps> = ({produto, onDelete, onEdit}) => {

    const [deletando, setDeletando] = useState<boolean>(false)
    
    const onDeleteClick = e => {
        if(deletando){
            onDelete(produto)
            setDeletando(false)
        }else{
            setDeletando(true)
        }
    }


    const cancelDelete = _ => setDeletando(false)

    return (
        <Fragment>
            <tr>
                <td>{produto.id}</td>
                <td>{produto.sku}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
                <td>
                    {!deletando && 
                        <button onClick={e => onEdit(produto) } className='button is-success is-rounded is-small'>
                            Editar
                        </button>
                    }

                    <button onClick={onDeleteClick} className='button is-danger is-rounded is-small'>
                        Excluir
                    </button>


                    {deletando && 
                        <button onClick={cancelDelete} className='button is-warning is-rounded is-small'>
                            Cancelar
                        </button>
                    }
                </td>
            </tr>
        </Fragment>
    )
}