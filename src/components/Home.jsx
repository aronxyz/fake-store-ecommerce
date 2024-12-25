import React from 'react'
import { useGetAllProductsQuery } from '../features/products/productsApiSlice'
import BestSellers from '../features/products/BestSellers'
import { Link } from 'react-router-dom'
import ShopByCategory from '../features/products/ShopByCategory'

const Home = () => {

    const { data: products } = useGetAllProductsQuery()

    return (
        <div>
            <div className=' hero d-flex justify-content-start align-items-center'>
                <div
                    className=' text-start'
                    style={{
                        maxWidth: 576,
                        marginLeft: '7.5%'
                    }}>
                    <span className=' bg-danger text-white px-2'>Best prices</span>
                    <h1 className=' display-3'>Incredible Prices on All Your Favorite Items</h1>
                    <h4>Get more for less on selected brands</h4>
                    <div>
                        <Link to={"/products/shop-all"}>
                            <button
                                className=' btn btn-primary'
                                style={{ marginTop: 24 }}>Shop now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <section>
                <h3>Shop by Category</h3>
                <ShopByCategory />
            </section>
            <section>
                <h3>Best Sellers</h3>
                <BestSellers />
            </section>
        </div>
    )
}

export default Home