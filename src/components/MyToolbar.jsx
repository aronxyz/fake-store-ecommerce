import React from 'react'
import PriceSorter from '../features/products/PriceSorter'
import PriceRanger from '../features/products/PriceRanger'
import { useSelector } from 'react-redux'
import MyFiltersOffcanvas from './MyFiltersOffcanvas'

const MyToolbar = ({
    ref,
    handlePriceRangeReset
}) => {

    const priceRange = useSelector((state) => state.products.priceRange)
    const isFiltered = useSelector((state) => state.products.isFiltered)
    const products = useSelector((state) => state.products.products)
    const filteredProducts = useSelector((state) => state.products.filteredProducts)
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <>
            {/* Desktop */}
            <div className=' d-none d-lg-block'>
                {isFiltered
                    ? <span className=' bg-body-secondary px-2 py-1'>{priceRange.min}€-{priceRange.max}€ <span onClick={handlePriceRangeReset} className=' ms-2' style={{ cursor: 'pointer' }} aria-hidden="true">&times;</span></span>
                    : null
                }
                <div className=' d-flex justify-content-between align-items-center'>
                    <span>{displayProducts.length} products</span>
                    <PriceSorter />
                </div>
            </div>

            {/* Mobile */}
            <div className=' d-block d-lg-none'>
                {isFiltered
                    ? <span className=' bg-body-secondary px-2 py-1'>{priceRange.min}€-{priceRange.max}€ <span onClick={handlePriceRangeReset} className=' ms-2' style={{ cursor: 'pointer' }} aria-hidden="true">&times;</span></span>
                    : null
                }
                <div className=' d-flex d-lg-none justify-content-between align-items-center'>
                    <span>{displayProducts.length} products</span>
                    <button class="btn btn-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filter & sort</button>
                </div>
                <MyFiltersOffcanvas />
            </div>
        </>
    )
}

export default MyToolbar