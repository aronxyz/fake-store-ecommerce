import React from 'react'
import MyRating from '../../components/MyRating'
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({
    product
}) => {

    const navigate = useNavigate()

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

    const handleCLick = () => {
        navigate(`/product/${product.id}`)
    }

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div onClick={handleCLick} className=' product-card'>
            <img className=' ' src={product.image} alt="..."></img>
            <div className=' '>
                <span className=' fw-semibold' style={cardTitleStyles}>{product.title}</span>
                <span className=' ' style={cardTitleStyles}>{capitalizeFirstLetter(product.category)}</span>
                <span className=' fw-semibold'>{product.price}€</span>
                <MyRating rating={product.rating} />
            </div>
        </div>
    )
}

export default ProductCard