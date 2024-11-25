import React from 'react'
import { useGetBestSellersQuery } from './productsApiSlice'
import ProductCard from './ProductCard'

const BestSellers = () => {
    const { data: bestSellers, isSuccess } = useGetBestSellersQuery()

    return (
        <div className=' best-sellers-wrapper'>
            {isSuccess && (
                bestSellers.map((bestSeller) => (
                    <ProductCard product={bestSeller} />
                ))
            )}
        </div>
    )
}

export default BestSellers