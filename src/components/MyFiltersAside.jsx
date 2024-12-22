import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PriceRanger from '../features/products/PriceRanger';

const MyFiltersAside = React.forwardRef(({ }, ref) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="filters-aside d-none d-lg-block">
            <div>
                <h3>Browse by</h3>
                <ul className=" nav nav-pills flex-column">
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive('/products/shop-all') ? 'active' : ''}`}
                            to="/products/shop-all"
                        >
                            Shop all
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive('/products/electronics') ? 'active' : ''}`}
                            to="/products/electronics"
                        >
                            Electronics
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive('/products/jewelery') ? 'active' : ''}`}
                            to="/products/jewelery"
                        >
                            Jewelery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/products/men's-clothing") ? 'active' : ''}`}
                            to="/products/men's-clothing"
                        >
                            Men's clothing
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className={`nav-link ${isActive("/products/women's-clothing") ? 'active' : ''}`}
                            to="/products/women's-clothing"
                        >
                            Women's clothing
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=' mt-3'>
                <h3>Filter by</h3>
                <PriceRanger ref={ref} />
            </div>
        </aside>
    );
});

export default MyFiltersAside;
