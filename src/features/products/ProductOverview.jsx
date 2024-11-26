import React from 'react'
import { useGetProductQuery } from './productsApiSlice'
import { useParams } from 'react-router-dom'
import MyRating from '../../components/MyRating'

const ProductOverview = () => {

    const { id } = useParams()

    const {
        data: product, isSuccess
    } = useGetProductQuery(id)

    console.log(product)

    if (isSuccess) {
        return (
            <div className=' card product-overview'>
                <div className=' row'>
                    <div className=' col-12 col-md-6'><img className=' card-img' src={product.image} alt="" /></div>
                    <div className=' col-12 col-md-6'>
                        <div className=' card-body text-start'>
                            <h5 className=' card-title'>{product.title}</h5>
                            <p className=' card-text text-body-secondary'>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                            <p className=' card-text text-body-secondary'>{product.description}</p>
                            <span className=' fs-3'>{product.price}€</span>
                            <MyRating rating={product.rating} />
                        </div>
                    </div>
                </div>
                <div className=' card-footer text-start'>
                    <button className=' btn btn-primary'>Add to cart</button>
                </div>
            </div>
        )
    }
}

export default ProductOverview