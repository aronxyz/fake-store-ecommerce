import React, { useState } from 'react'
import { useGetAllCategoriesQuery } from '../features/categories/categoriesApiSlice'
import { Link, useLocation } from 'react-router-dom'
import NavbarFilter from '../features/products/NavbarFilter'

const Navbar = () => {
    const { data: categories, isSuccess } = useGetAllCategoriesQuery()
    const [activeLink, setActiveLink] = useState("");

    const navbarBrand = <img src={require('../assets/brand.png')} alt="" />
    const menuIcon = <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.44025 1.67798H28.1069M1.44025 11.678H28.1069M1.44025 21.678H28.1069" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    const cartShoppingIcon = <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.95438 3.9002H21.288L19.0657 11.678H6.15098M20.1769 16.1224H6.84352L4.6213 1.67798H1.28796M7.95463 20.5669C7.95463 21.1805 7.45716 21.678 6.84352 21.678C6.22988 21.678 5.73241 21.1805 5.73241 20.5669C5.73241 19.9532 6.22988 19.4558 6.84352 19.4558C7.45716 19.4558 7.95463 19.9532 7.95463 20.5669ZM20.1769 20.5669C20.1769 21.1805 19.6794 21.678 19.0657 21.678C18.4521 21.678 17.9546 21.1805 17.9546 20.5669C17.9546 19.9532 18.4521 19.4558 19.0657 19.4558C19.6794 19.4558 20.1769 19.9532 20.1769 20.5669Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const location = useLocation()
    console.log(location.pathname)
    return (
        <>
            <nav className=' bg-body-tertiary d-none d-lg-block'>
                <div className=' mynavbar-wrapper'>
                    <div className=' d-flex align-items-center justify-content-between'>
                        <span>{navbarBrand}</span>
                        <NavbarFilter />
                        <span>{cartShoppingIcon}</span>
                    </div>
                    <div className=' mynavbar-links'>
                        <ul>
                            <li>
                                <Link
                                    to="/shop-all"
                                    className={activeLink === "Shop all" ? " active" : ""}
                                    onClick={() => setActiveLink("Shop all")}
                                >
                                    Shop all
                                </Link>
                            </li>
                            {isSuccess && (
                                categories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className={
                                                activeLink === category ? "active" : ""
                                            }
                                            onClick={() => setActiveLink(category)}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <nav className=' bg-body-tertiary d-block d-lg-none'>
                    <div className=' mynavbar-mobile-wrapper'>
                        <div className=' d-flex align-items-center justify-content-between'>
                            <span>{navbarBrand}</span>
                            <div className=' d-flex gap-3'>
                                <span>{cartShoppingIcon}</span>
                                <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">{menuIcon}</span>
                            </div>
                        </div>
                        <NavbarFilter />
                    </div>
                </nav>
                <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <span class="offcanvas-title" id="offcanvasTopLabel">{navbarBrand}</span>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className=" offcanvas-body mynavbar-mobile-links">
                        <ul>
                            <li>
                                <Link
                                    to="/shop-all"
                                    className={activeLink === "Shop all" ? " active" : ""}
                                    onClick={() => setActiveLink("Shop all")}
                                >
                                    Shop all
                                </Link>
                            </li>
                            {isSuccess && (
                                categories.map((category) => (
                                    <li key={category.id}>
                                        <Link
                                            to={`/category/${category.id}`}
                                            className={
                                                activeLink === category ? "active" : ""
                                            }
                                            onClick={() => setActiveLink(category)}
                                        >
                                            {category.charAt(0).toUpperCase() + category.slice(1)}
                                        </Link>
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar