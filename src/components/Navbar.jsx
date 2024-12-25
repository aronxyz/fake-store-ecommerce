import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarFilter from '../features/products/NavbarFilter';
import BagButton from '../features/bag/BagButton';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navbarBrand = <img src={require('../assets/brand.png')} alt="Brand" />;

    const cartShoppingIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
    );

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { label: 'Shop all', path: '/products/shop-all' },
        { label: 'Electronics', path: '/products/electronics' },
        { label: 'Jewelery', path: '/products/jewelery' },
        { label: "Men's clothing", path: "/products/men's-clothing" },
        { label: "Women's clothing", path: "/products/women's-clothing" },
    ];

    return (
        <>
            {/* Desktop */}
            <nav className=" bg-white navbar-expand d-none d-lg-block" style={{ paddingInline: 10 }}>
                <div className="mynavbar-wrapper">
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <span onClick={() => navigate('/')}>{navbarBrand}</span>
                        <NavbarFilter />
                        <BagButton />
                    </div>
                    <ul className="nav nav-underline">
                        {navLinks.map(({ label, path }) => (
                            <li key={path} className="nav-item">
                                <a
                                    className={`nav-link ${isActive(path) ? 'active' : ''}`}
                                    aria-current={isActive(path) ? 'page' : undefined}
                                    onClick={() => navigate(path)}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* Mobile */}
            <nav className="bg-white navbar d-block d-lg-none">
                <div className="container-fluid">
                    <span
                        aria-current={isActive('/') ? 'page' : undefined}
                        onClick={() => navigate('/')}
                    >
                        {navbarBrand}
                    </span>
                    <div className="d-flex align-items-center gap-3">
                        <BagButton />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navLinks.map(({ label, path }) => (
                                <li key={path} className="nav-item">
                                    <a
                                        className={`nav-link ${isActive(path) ? 'active' : ''}`}
                                        aria-current={isActive(path) ? 'page' : undefined}
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        onClick={() => navigate(path)}
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className=' mt-2 mx-2'><NavbarFilter /></div>
            </nav>
        </>
    );
};

export default Navbar;
