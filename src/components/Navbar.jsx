import React from 'react'
import { useGetAllCategoriesQuery } from '../features/categories/categoriesApiSlice'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const { data: categories, isSuccess } = useGetAllCategoriesQuery()
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src={require('../assets/brand.png')} alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/shop-all'} className="nav-link" href="#">Shop all</Link>
                        </li>
                        {isSuccess && (
                            categories.map((cat, index) => (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href="#">{cat.charAt(0).toUpperCase() + cat.slice(1)}</a>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar