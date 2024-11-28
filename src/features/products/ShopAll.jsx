import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from './productsApiSlice';
import { setProducts } from './productsSlice';
import MyFiltersAside from '../../components/MyFiltersAside';
import MySorterWrapper from '../../components/MySorterWrapper';
import ProductsWrapper from './ProductsWrapper';

const ShopAll = () => {

    const dispatch = useDispatch();

    const { data: products = [], isSuccess } = useGetAllProductsQuery();
    const [filteredProducts, setFilteredProducts] = useState([]);

    const [priceRange, setPriceRange] = React.useState([0, 100000])
    const prices = products ? products.map(item => item.price) : []
    const minPrice = prices ? Math.min(...prices) : 0
    const maxPrice = prices ? Math.max(...prices) : 100000

    const isDefaultRange = useMemo(
        () => (priceRange[0] === minPrice || priceRange[0] === 0) && (priceRange[1] === maxPrice || priceRange[1] === 100000),
        [priceRange, minPrice, maxPrice]
    )

    const priceRangerRef = useRef();

    useEffect(() => {
        if (isSuccess && products) {
            dispatch(setProducts(products));
        }
    }, [isSuccess, products, dispatch]);

    useEffect(() => {
        if (!isDefaultRange) {
            const epsilon = 0.001
            const newValues = products.filter(
                (product) =>
                    Number(product.price) >= priceRange[0] - epsilon &&
                    Number(product.price) <= priceRange[1] + epsilon
            );
            setFilteredProducts(newValues)
        } else {
            setFilteredProducts([])
        }
    }, [priceRange, products, isDefaultRange]);


    const handlePriceRangeReset = () => {
        setPriceRange([minPrice, maxPrice])
        priceRangerRef.current.resetValues();
        setFilteredProducts([])
    }


    const xIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>

    console.log("priceRange:", priceRange)

    return (
        <section className='d-flex text-start'>
            <MyFiltersAside
                ref={priceRangerRef}
                setPriceRange={setPriceRange}
                minPrice={minPrice} maxPrice={maxPrice} />
            <div>
                <h1 className='text-start'>All Products</h1>
                {isDefaultRange
                    ? null
                    : <span className=' bg-body-secondary px-2 py-1'>{priceRange[0]}€-{priceRange[1]}€ <span onClick={handlePriceRangeReset} className=' ms-2' style={{ cursor: 'pointer' }} aria-hidden="true">&times;</span></span>
                }
                <MySorterWrapper data={filteredProducts.length ? filteredProducts : products} />
                <ProductsWrapper data={filteredProducts.length ? filteredProducts : products} />
            </div>
        </section>
    );
};

export default ShopAll;
