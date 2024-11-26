import React from 'react'
import PriceRanger from '../features/products/PriceRanger'
import { Link } from 'react-router-dom'

const MyFiltersAside = ({
    data
}) => {

    const [priceRange, setPriceRange] = React.useState([0, 100000])
    const prices = data ? data.map(item => item.price) : []
    const minPrice = prices ? Math.min(...prices) : 0
    const maxPrice = prices ? Math.max(...prices) : 100000

    const [priceSort, setPriceSort] = React.useState("")

    return (
        <aside className=' filters-aside d-none d-lg-block'>
            <h3>Browse by</h3>
            <ul>
                <li><Link to={'/shop-all'}>Shop all</Link></li>
                <li><Link to={'/electronincs'}>Electronincs</Link></li>
                <li><Link to={'/jewelery'}>Jewelery</Link></li>
                <li><Link to={'/men-clothing'}>Men's clothing</Link></li>
                <li><Link to={'/women-clothing'}>Women's clothing</Link></li>
            </ul>
            <h3>Filter by</h3>
            <PriceRanger onChange={setPriceRange} min={minPrice} max={maxPrice} />
        </aside>
    )
}

export default MyFiltersAside