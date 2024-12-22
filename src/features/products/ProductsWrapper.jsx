import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';

const ProductsWrapper = () => {

    const products = useSelector((state) => state.products.products);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);

    // Decide whether to use filtered products or fetched products
    const displayProducts = filteredProducts.length > 0 ? filteredProducts : products;

    return (
        <div className=' products-wrapper mt-3'>
            {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsWrapper;
