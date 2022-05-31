import Produto from 'models/produto'
import React, { Fragment } from 'react'
import { ProductTableRow } from './ProductTableRow'


interface ProductsTableProps {
    products: Produto[]
    onEdit: (produto : Produto) => void
    onDelete: (produto : Produto) => void
}

export const ProductsTable : React.FC<ProductsTableProps> = ({products, onDelete, onEdit}) => {
    return (
        <Fragment>
            <table className="table is-fullwidth is-striped is-hoverable">
                <thead>
                    <th>Código</th>
                    <th>SKU</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th></th>
                </thead>
                <tbody>
                    {
                        products.map(product => <ProductTableRow onDelete={onDelete} onEdit={onEdit} key={product.id} produto={product} />)
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </Fragment>
    )
}
