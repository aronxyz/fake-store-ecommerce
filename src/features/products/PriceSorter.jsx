import React from 'react';

const PriceSorter = ({ sortOption, onChange }) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className="d-flex flex-column gap-2">
            <label className="fw-bold">Sort by:</label>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="priceSort"
                    id="default"
                    value=""
                    checked={sortOption === ""}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="default">
                    Default
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="priceSort"
                    id="lowToHigh"
                    value="low-to-high"
                    checked={sortOption === "low-to-high"}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="lowToHigh">
                    Price (Low to High)
                </label>
            </div>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="priceSort"
                    id="highToLow"
                    value="high-to-low"
                    checked={sortOption === "high-to-low"}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="highToLow">
                    Price (High to Low)
                </label>
            </div>
        </div>
    );
};

export default PriceSorter;
