import React from 'react';
import { useSelector } from 'react-redux';
import BagItem from './BagItem';
import BestSellers from '../products/BestSellers'
import { useNavigate } from 'react-router-dom';

const Bag = () => {

    const navigate = useNavigate()

    const bagItems = useSelector((state) => state.bag.items);
    const bagTotal = useSelector((state) => state.bag.total);

    const borderBottomStyle = {
        borderBottom: "1px solid rgb(163, 163, 163)"
    }

    return (
        <>
            <section>
                <div className=' container' style={{ maxWidth: 768 }}>
                    <div className=' row g-4'>
                        <div className=' col-12 col-md-6'>
                            <h3>Bag</h3>
                            {bagItems.length
                                ? (
                                    bagItems.map((item, index) => (
                                        <BagItem key={index} item={item} />
                                    ))
                                )
                                : (
                                    "There is no items in your bag."
                                )}
                        </div>
                        <div className=' col-12 col-md-6 fw-semibold'>
                            <h3>Summary</h3>
                            <div className=' d-flex flex-column pb-2' style={borderBottomStyle}>
                                <div className=' d-flex justify-content-between'>
                                    <span>Subtotal</span>
                                    <span>{bagTotal}€</span>
                                </div>
                                <div className=' d-flex justify-content-between'>
                                    <span>Estimated Delivery & Handling</span>
                                    <span>Free</span>
                                </div>
                            </div>
                            <div className=' d-flex justify-content-between py-2' style={borderBottomStyle}>
                                <span>Total</span>
                                <span>{bagTotal}€</span>
                            </div>
                            <div className=' d-flex justify-content-end py-3'><button className="btn btn-primary mt-1" onClick={() => navigate("/checkout")}>Checkout</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>You Might Also Like</h3>
                <BestSellers />
            </section>
        </>
    );
};

export default Bag;
