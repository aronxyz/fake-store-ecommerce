import React from 'react';
import PriceSorter from '../features/products/PriceSorter';
import PriceRanger from '../features/products/PriceRanger';

const MySorterWrapper = ({ data, sortOption, setSortOption, setPriceRange, minPrice, maxPrice }) => {

    return (
        <>
            {/* Desktop Version */}
            <div className="d-none d-lg-flex justify-content-between align-items-center">
                <span>{data && data.length} products</span>
                <PriceSorter onChange={setSortOption} />
            </div>

            {/* Mobile Version */}
            <div className="d-flex d-lg-none justify-content-between align-items-center">
                <span>{data && data.length} products</span>
                <button
                    className="btn btn-secondary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    Filter & sort
                </button>
            </div>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Filter & sort ({data && data.length} products)
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body d-flex flex-column justify-content-between">
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
                            <div id="flush-collapseOne" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <PriceSorter sortOption={sortOption} onChange={setSortOption} />
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
                                    Price ({minPrice}€ - {maxPrice}€)
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body">
                                    <PriceRanger
                                        onChange={setPriceRange}
                                        min={minPrice}
                                        max={maxPrice}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' d-flex gap-3 pt-3' style={{ borderTop: '1px solid #dee2e6' }}>
                        <button className=' btn btn-outline-secondary w-50' data-bs-dismiss="offcanvas">Clear filters</button>
                        <button className=' btn btn-secondary w-50' data-bs-dismiss="offcanvas">Apply</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MySorterWrapper;
