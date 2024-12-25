import { useGetProductQuery } from './productsApiSlice';
import { useParams } from 'react-router-dom';
import MyRating from '../../components/MyRating';
import { AddToBagButton } from '../bag/AddToBagButton';
import MyLoader from '../../components/MyLoader';

const ProductOverview = () => {
  const { id } = useParams();
  const { data: product, isFetching } = useGetProductQuery(id);

  return (
    <section>
      {isFetching ? (
        <MyLoader />
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
                <AddToBagButton item={product} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductOverview;
