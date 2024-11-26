import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from './productsApiSlice';
import { setProducts } from './productsSlice';
import MyFiltersAside from '../../components/MyFiltersAside';
import MySorterWrapper from '../../components/MySorterWrapper';
import ProductsWrapper from './ProductsWrapper';

const ShopAll = () => {
    const dispatch = useDispatch();
    const { data: products, isSuccess } = useGetAllProductsQuery();

    useEffect(() => {
        if (isSuccess && products) {
            dispatch(setProducts(products));
        }
    }, [isSuccess, products, dispatch]);

    return (
        <section className='d-flex text-start'>
            <MyFiltersAside data={products ? products : []} />

            <div>
                <h1 className='text-start'>All Products</h1>
                <MySorterWrapper data={products ? products : []} />
                <ProductsWrapper data={products ? products : []} />
            </div>
        </section>
    );
};

export default ShopAll;
