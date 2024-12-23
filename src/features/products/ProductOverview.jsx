import React, { useEffect } from 'react';
import { useGetProductQuery } from './productsApiSlice';
import { useParams, useLocation } from 'react-router-dom';
import MyRating from '../../components/MyRating';
import BestSellers from './BestSellers';

const ProductOverview = () => {
  const { id } = useParams();
  const location = useLocation(); // Get the current location
  const { data: product, isFetching } = useGetProductQuery(id);

  return (
    <div key={location.pathname}>
      <section>
        {isFetching ? (
          <div
            className="w-100 d-flex justify-content-center align-items-center"
            style={{ minHeight: 256 }}
          >
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="product-overview">
            <div className="row">
              <div className="col-12 col-md-6 text-center">
                <img className="card-img" src={product.image} alt={product.title} />
              </div>
              <div className="col-12 col-md-6">
                <div className="text-start">
                  <h5>{product.title}</h5>
                  <p className="text-body-secondary">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </p>
                  <p className="text-body-secondary">{product.description}</p>
                  <span className="fs-3">{product.price}€</span>
                  <MyRating rating={product.rating} />
                  <button className="btn btn-primary mt-3">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductOverview;
