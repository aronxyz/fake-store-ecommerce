import React from 'react';
import PriceRanger from '../features/products/PriceRanger';
import { Link } from 'react-router-dom';

// Forward the ref to the PriceRanger component
const MyFiltersAside = React.forwardRef(({ setPriceRange, minPrice, maxPrice, }, ref) => {
    return (
        <aside className='filters-aside d-none d-lg-block'>
            <h3>Browse by</h3>
            <ul>
                <li><Link to={'/shop-all'}>Shop all</Link></li>
                <li><Link to={'/electronincs'}>Electronincs</Link></li>
                <li><Link to={'/jewelery'}>Jewelery</Link></li>
                <li><Link to={'/men-clothing'}>Men's clothing</Link></li>
                <li><Link to={'/women-clothing'}>Women's clothing</Link></li>
            </ul>
            <h3>Filter by</h3>
            <PriceRanger
                ref={ref}  // Pass ref to PriceRanger
                min={minPrice} max={maxPrice}
                onChange={setPriceRange}
            />
        </aside>
    );
});

export default MyFiltersAside;
