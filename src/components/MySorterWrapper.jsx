import React from 'react'
import PriceSorter from '../features/products/PriceSorter'
import PriceRanger from '../features/products/PriceRanger'

const MySorterWrapper = ({
    data
}) => {

    const [priceRange, setPriceRange] = React.useState([0, 100000])
    const prices = data ? data.map(item => item.price) : []
    const minPrice = prices ? Math.min(...prices) : 0
    const maxPrice = prices ? Math.max(...prices) : 100000
    const [priceSort, setPriceSort] = React.useState("")
    const filterIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
        <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
    </svg>



    return (
        <>
            <div className=' d-none d-lg-flex justify-content-between align-items-center'>
                <span>{data && data.length} products</span>
                <PriceSorter onChange={setPriceSort} />
            </div>
            <div className=' d-flex d-lg-none justify-content-between align-items-center'>
                <span>{data && data.length} products</span>
                <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Filter & sort {filterIcon}</button>
            </div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Filter & sort ({data && data.length} products)</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Sort by
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Default
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Low to high
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            High to low
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Price ({minPrice}€ - {maxPrice}€)
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    <PriceRanger onChange={setPriceRange} min={minPrice} max={maxPrice} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MySorterWrapper