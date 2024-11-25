import React from 'react'
import MyRating from '../../components/MyRating'

const ProductCard = ({
    product
}) => {

    const cardTextStyles = {
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };

    const cardTitleStyles = {
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };


    return (
        <div className=' card product-card'>
            <img className=' card-img-top' src={product.image} class="card-img-top" alt="..."></img>
            <div className=' card-body'>
                <h5 className=' card-title' style={cardTitleStyles}>{product.title}</h5>
                <p className=' card-text text-body-secondary' style={cardTextStyles}>{product.description}</p>
                <span className=' fs-3'>{product.price}€</span>
                <MyRating rating={product.rating} />
            </div>
        </div>
    )
}

export default ProductCard