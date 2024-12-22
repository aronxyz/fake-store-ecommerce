import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavbarFilter from '../features/products/NavbarFilter';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const navbarBrand = <img src={require('../assets/brand.png')} alt="Brand" />;
    const cartShoppingIcon = (
        <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.95438 3.9002H21.288L19.0657 11.678H6.15098M20.1769 16.1224H6.84352L4.6213 1.67798H1.28796M7.95463 20.5669C7.95463 21.1805 7.45716 21.678 6.84352 21.678C6.22988 21.678 5.73241 21.1805 5.73241 20.5669C5.73241 19.9532 6.22988 19.4558 6.84352 19.4558C7.45716 19.4558 7.95463 19.9532 7.95463 20.5669ZM20.1769 20.5669C20.1769 21.1805 19.6794 21.678 19.0657 21.678C18.4521 21.678 17.9546 21.1805 17.9546 20.5669C17.9546 19.9532 18.4521 19.4558 19.0657 19.4558C19.6794 19.4558 20.1769 19.9532 20.1769 20.5669Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
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
            <nav className="bg-body-tertiary navbar-expand d-none d-lg-block">
                <div className="mynavbar-wrapper">
                    <div className="d-flex align-items-center justify-content-between pt-2">
                        <span onClick={() => navigate('/')}>{navbarBrand}</span>
                        <NavbarFilter />
                        <span>{cartShoppingIcon}</span>
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
            <nav className="bg-body-tertiary navbar d-block d-lg-none">
                <div className="container-fluid">
                    <span
                        aria-current={isActive('/') ? 'page' : undefined}
                        onClick={() => navigate('/')}
                    >
                        {navbarBrand}
                    </span>
                    <div className="d-flex align-items-center gap-3">
                        <span>{cartShoppingIcon}</span>
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
