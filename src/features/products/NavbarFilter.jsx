import React, { useState } from 'react'
import { useGetAllProductsQuery } from './productsApiSlice'
import { useNavigate } from 'react-router-dom';

const NavbarFilter = () => {

    const { data, isSuccess } = useGetAllProductsQuery()
    const titles = isSuccess ? data.map((product) => product.title) : [];
    const [filter, setFilter] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        const matchedProduct = data?.find((product) => product.title === filter);
        navigate(`/product/${matchedProduct.id ? matchedProduct.id : 0}`)
    }

    const handleChange = (event) => {
        setFilter(event.target.value)
    };

    const xIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
    const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>

    return (
        <div className=' navbar-filter'>
            <div className=' input-group'>
                <input
                    className="form-control"
                    list="navbar-filter-list"
                    id="navbar-filter-datalist"
                    placeholder="Type to search..."
                    value={filter || ''}
                    onChange={handleChange}
                    style={{
                        minWidth: 256
                    }}
                />
                {filter
                ? (
                    <button onClick={() => setFilter("")} className=' btn btn-light'>{xIcon}</button>
                )
                : null}
                <button onClick={handleSearch} className=' btn btn-primary'>{searchIcon}</button>
            </div>
            <datalist id="navbar-filter-list">
                {titles.map((opt, index) => {
                    return <option key={index} value={opt} />;
                })}
            </datalist>
        </div>
    )
}

export default NavbarFilter