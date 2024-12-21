import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortProducts } from './productsSlice';

const PriceSorter = () => {

    const dispatch = useDispatch()

    const handleSelectChange = (event) => {
        dispatch(sortProducts({
            order: event.target.value
        }))
    }

    return (
        <div className=' d-none d-lg-flex align-items-center gap-2'>
            <label htmlFor="price-sorter" style={{ whiteSpace: 'nowrap' }}>
                Sort by:
            </label>
            <select
                className="form-select sort-select"
                aria-label="Sort by price"
                onChange={handleSelectChange}
            >
                <option value="" selected>
                    Default (rating)
                </option>
                <option value="asc">Price (low to high)</option>
                <option value="desc">Price (high to low)</option>
            </select>
        </div>
    )
}

export default PriceSorter;
