import { useDispatch } from "react-redux";
import { addItem } from "./bagSlice";
import { useNavigate } from "react-router-dom";

export const AddToBagButton = ({ item }) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cardTitleStyles = {
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
    };

    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    
    const handleAddToBag = () => {
        dispatch(addItem(item))
    }

    return (
        <>
            <button
                className="btn btn-primary mt-3"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                onClick={handleAddToBag}
            >
                Add to bag
            </button>

            <div
                className="offcanvas offcanvas-end"
                style={{ height: "fit-content" }}
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="offcanvas-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                    </svg>
                    <h5 className="offcanvas-title ms-1" id="offcanvasRightLabel">
                        Added to bag
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src={item.image} width={96} alt={item.title} />
                            </div>
                            <div className="col d-flex flex-column">
                                <span className="fw-semibold" style={cardTitleStyles}>
                                    {item.title}
                                </span>
                                <span>{capitalizeFirstLetter(item.category)}</span>
                                <span className="fw-semibold">{item.price}€</span>
                            </div>
                            <button data-bs-dismiss="offcanvas" className="btn btn-primary mt-1"onClick={() => navigate("/bag")} >View bag</button>
                            <button data-bs-dismiss="offcanvas" className="btn btn-secondary mt-1">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
