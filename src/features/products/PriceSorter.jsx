import React from 'react';

const PriceSorter = ({ onChange }) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className=' d-flex align-items-center gap-2'>
            <label htmlFor="price-sorter" style={{ whiteSpace: 'nowrap' }}>
                    Sort by:
                </label>
            <select
                className="form-select sort-select"
                aria-label="Sort by price"
                onChange={handleChange}
            >
                <option value="" selected>
                    Default
                </option>
                <option value="low-to-high">Price (low to high)</option>
                <option value="high-to-low">Price (high to low)</option>
            </select>
        </div>
    );
};

export default PriceSorter;
