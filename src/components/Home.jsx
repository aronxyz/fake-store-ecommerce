import React from 'react'
import { useGetAllProductsQuery } from '../features/products/productsApiSlice'
import BestSellers from '../features/products/BestSellers'
import { Link } from 'react-router-dom'

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

                <div className="thumb-wrapper">
                    <div className="electronics thumb">
                        <Link to="/products/electronics" className="btn btn-secondary">
                            Electronics
                        </Link>
                    </div>
                    <div className="jewelery thumb">
                        <Link to="/products/jewelery" className="btn btn-secondary">
                            Jewelery
                        </Link>
                    </div>
                    <div className="men-clothing thumb">
                        <Link to="/products/men's-clothing" className="btn btn-secondary">
                            Men's clothing
                        </Link>
                    </div>
                    <div className="women-clothing thumb">
                        <Link to="/products/women's-clothing" className="btn btn-secondary">
                            Women's clothing
                        </Link>
                    </div>
                </div>

            </section>
            <section>
                <h3>Best Sellers</h3>
                <BestSellers />
            </section>
        </div>
    )
}

export default Home