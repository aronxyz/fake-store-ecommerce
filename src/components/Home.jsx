import React from 'react'
import { useGetAllProductsQuery } from '../features/products/productsApiSlice'
import { useGetAllCategoriesQuery } from '../features/categories/categoriesApiSlice'
import BestSellers from '../features/products/BestSellers'

const Home = () => {

    const { data: products } = useGetAllProductsQuery()
    const { data: categories } = useGetAllCategoriesQuery()

    console.log(products)
    console.log(categories)
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
                        <button
                            className=' btn btn-primary'
                            style={{ marginTop: 24 }}>Shop now</button>
                    </div>
                </div>
            </div>
            <section>
                <h3>Shop by Category</h3>
                <div className=' thumb-wrapper'>
                    <div className=' electronics thumb'>
                        <button className=' btn btn-secondary'>Electronics</button>
                    </div>
                    <div className=' jewelery thumb'>
                        <button className=' btn btn-secondary'>Jewelery</button>
                    </div>
                    <div className=' men-clothing thumb'>
                        <button className=' btn btn-secondary'>Men's clothing</button>
                    </div>
                    <div className=' women-clothing thumb'>
                        <button className=' btn btn-secondary'>Women's clothing</button>
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