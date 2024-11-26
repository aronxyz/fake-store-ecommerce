import React from 'react'
import PriceSorter from '../features/products/PriceSorter'

const MySorterWrapper = ({
    data
}) => {

    const [priceSort, setPriceSort] = React.useState("")
    
    return (
        <div className=' d-flex justify-content-between align-items-center'>
            <span>{data && data.length} products</span>
            <PriceSorter onChange={setPriceSort} />
        </div>
    )
}

export default MySorterWrapper