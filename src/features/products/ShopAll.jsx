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
    const [priceRange, setPriceRange] = useState([0, 100000]);
    const [sortOption, setSortOption] = useState(""); // Sorting state

    const prices = products.map((item) => item.price);
    const minPrice = prices.length ? Math.min(...prices) : 0;
    const maxPrice = prices.length ? Math.max(...prices) : 100000;

    const isDefaultRange = useMemo(
        () => (priceRange[0] === minPrice || priceRange[0] === 0) && (priceRange[1] === maxPrice || priceRange[1] === 100000),
        [priceRange, minPrice, maxPrice]
    );

    const priceRangerRef = useRef();

    useEffect(() => {
        if (isSuccess && products) {
            dispatch(setProducts(products));
        }
    }, [isSuccess, products, dispatch]);

    useEffect(() => {
        // Apply filtering based on the price range
        const epsilon = 0.001;
        const filtered = products.filter(
            (product) =>
                Number(product.price) >= priceRange[0] - epsilon &&
                Number(product.price) <= priceRange[1] + epsilon
        );
        setFilteredProducts(filtered);
    }, [priceRange, products]);

    // Combine filtered and sorted data
    const sortedAndFilteredProducts = useMemo(() => {
        const data = filteredProducts.length ? filteredProducts : products;

        if (sortOption === "low-to-high") {
            return [...data].sort((a, b) => a.price - b.price);
        } else if (sortOption === "high-to-low") {
            return [...data].sort((a, b) => b.price - a.price);
        }
        return data;
    }, [sortOption, filteredProducts, products]);

    const handlePriceRangeReset = () => {
        setPriceRange([minPrice, maxPrice]);
        priceRangerRef.current.resetValues();
    };

    return (
        <section className="d-flex text-start">
            {/* Desktop Filters */}
            <MyFiltersAside
                ref={priceRangerRef}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
            />

            <div className="products-content">
                <h1 className="text-start">All Products</h1>

                {/* Mobile and Desktop Sorter */}
                <MySorterWrapper
                    data={sortedAndFilteredProducts}
                    setSortOption={setSortOption}
                    sortOption={sortOption}
                    setPriceRange={setPriceRange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                />

                {/* Products List */}
                <ProductsWrapper data={sortedAndFilteredProducts} />
            </div>
        </section>
    );
};

export default ShopAll;
