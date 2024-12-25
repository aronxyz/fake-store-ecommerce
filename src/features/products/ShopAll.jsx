import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from './productsApiSlice';
import { resetPriceRangeFilter, resetSort, resetState, setProducts } from './productsSlice';
import MyFiltersAside from '../../components/MyFiltersAside';
import ProductsWrapper from './ProductsWrapper';
import MyToolbar from '../../components/MyToolbar';
import { useParams } from 'react-router-dom';

const ShopAll = () => {
    const dispatch = useDispatch();
    const priceRangerRef = useRef();
    const { category } = useParams();

    const replaceHyphenWithSpace = (str) => {
        return str.replace(/-/g, ' ');
    };

    const { data: products = [], isSuccess, isFetching } = useGetAllProductsQuery(replaceHyphenWithSpace(category));

    // Dispatch products to Redux store when the query is successful
    useEffect(() => {
        if (isSuccess && products) {
            dispatch(setProducts(products));
        }
    }, [isSuccess, products, category, dispatch]);

    // Reset sort and filter when the category changes
    useEffect(() => {
        if (priceRangerRef.current) {
            priceRangerRef.current.resetValues();
        }
        dispatch(resetPriceRangeFilter())
        dispatch(resetSort())
    }, [category, dispatch]);

    // Reset the price range filter
    const handlePriceRangeReset = () => {
        if (priceRangerRef.current) {
            priceRangerRef.current.resetValues();
        }
        dispatch(resetPriceRangeFilter());
    };

    // Determine the title based on the category
    const getTitle = (category) => {
        switch (category) {
            case 'shop-all':
                return "Shop all";
            case 'electronics':
                return "Electronics";
            case 'jewelery':
                return "Jewelery";
            case "men's-clothing":
                return "Men's clothing";
            case "women's-clothing":
                return "Women's clothing";
            default:
                return "Shop";
        }
    };

    const title = getTitle(category);

    return (
        <section className='d-flex text-start'>
            <MyFiltersAside ref={priceRangerRef} />
            <div className=' flex-grow-1'>
                <h1 className='text-start'>{title}</h1>
                <div className=' position-relative'>
                    <MyToolbar
                        ref={priceRangerRef}
                        handlePriceRangeReset={handlePriceRangeReset}
                    />
                    <ProductsWrapper />
                    <div className={` test ${isFetching ? 'd-block' : 'd-none'}`}></div>
                </div>
            </div>
        </section>
    );
};

export default ShopAll;
