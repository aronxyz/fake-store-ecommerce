import React from 'react'
import ProductCard from './ProductCard'

const ProductsWrapper = ({
    data
}) => {
    return (
        <div className=' products-wrapper'>
            {data.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductsWrapper