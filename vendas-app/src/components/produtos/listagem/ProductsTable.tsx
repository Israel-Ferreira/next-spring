import Produto from 'models/produto'
import React, { Fragment } from 'react'
import { ProductTableRow } from './ProductTableRow'


interface ProductsTableProps {
    products: Produto[]
}

export const ProductsTable : React.FC<ProductsTableProps> = ({products}) => {
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
                        products.map(product => <ProductTableRow key={product.id} produto={product} />)
                    }
                </tbody>
                <tfoot></tfoot>
            </table>
        </Fragment>
    )
}
