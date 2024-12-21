import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MobilePriceRanger from '../features/products/MobilePriceRanger';
import MobilePriceSorter from '../features/products/MobilePriceSorter';
import { 
  setPriceRangeFilter, 
  sortProducts, 
  resetPriceRangeFilter, 
  resetSort 
} from '../features/products/productsSlice';

const MyFiltersOffcanvas = () => {
  const dispatch = useDispatch();
  const borderStyles = '1px solid #dee2e6';

  const priceRange = useSelector((state) => state.products.priceRange);
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const mobilePriceRangerRef = useRef();

  const [tempFilterValue, setTempFilterValue] = useState({
    min: priceRange.min,
    max: priceRange.max,
  });

  const [tempSortValue, setTempSortValue] = useState("");

  const handleFilterChange = (newMin, newMax) => {
    setTempFilterValue({
      min: newMin !== undefined ? newMin : priceRange.min,
      max: newMax !== undefined ? newMax : priceRange.max,
    });
  };

  const handleSortChange = (value) => {
    setTempSortValue(value);
  };

  const handleApply = () => {
    dispatch(setPriceRangeFilter(tempFilterValue));
    dispatch(sortProducts({
      order: tempSortValue
    }));
    alert(tempSortValue)
  };

  const handleReset = () => {
    mobilePriceRangerRef.current.resetValues();
    setTempFilterValue({
      min: priceRange.min,
      max: priceRange.max,
    });
    setTempSortValue('');
    dispatch(resetPriceRangeFilter());
    dispatch(resetSort());
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasRight"
      aria-labelledby="offcanvasRightLabel"
    >
      <div
        className="offcanvas-header"
        style={{ borderBottom: borderStyles }}
      >
        <h5 className="offcanvas-title" id="offcanvasRightLabel">
          Filter & sort ({filteredProducts.length} products)
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Sort by
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <MobilePriceSorter tempSortValue={tempSortValue} onChange={handleSortChange} />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Price ({priceRange.min}€ - {priceRange.max}€)
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <MobilePriceRanger
                  ref={mobilePriceRangerRef}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row p-3"
        style={{ borderTop: borderStyles }}
      >
        <div className="col-6">
          <button
            className="btn btn-sm btn-outline-secondary w-100"
            onClick={handleReset}
          >
            Clear Filters
          </button>
        </div>
        <div className="col-6">
          <button
            className="btn btn-sm btn-secondary w-100"
            data-bs-dismiss="offcanvas"
            onClick={handleApply}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyFiltersOffcanvas;
