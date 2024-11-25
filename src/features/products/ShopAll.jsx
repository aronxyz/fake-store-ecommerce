import React from 'react'
import { useGetAllProductsQuery } from './productsApiSlice'
import ProductCard from './ProductCard'

const ShopAll = () => {
    const { data: products, isSuccess } = useGetAllProductsQuery()
    return (
        <section className=' d-flex text-start'>
            <aside className=' filters-aside'>
                <h3>Browse by</h3>
            </aside>
            <div>
                <h1 className=' text-start'>All Products</h1>
    
                <div className=' d-flex justify-content-between align-items-center'>
                    <span>{isSuccess && products.length} products</span>
                    <select class="form-select sort-select" aria-label="Default select example">
                        <option selected>Default</option>
                        <option value="1">Price (low to high)</option>
                        <option value="2">Price (high to low)</option>
                    </select>
                </div>
    
                <div className='show-all-products-wrapper'>
                    {isSuccess && products.map((product) => (
                        <ProductCard product={product} />
                    ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ShopAll