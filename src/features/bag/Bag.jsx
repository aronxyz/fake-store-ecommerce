import React from 'react';
import { useSelector } from 'react-redux';
import BagItem from './BagItem';
import BestSellers from '../products/BestSellers'

const Bag = () => {

    const bagItems = useSelector((state) => state.bag.items);
    const bagTotal = useSelector((state) => state.bag.total);

    const borderBottomStyle = {
        borderBottom: "1px solid rgb(163, 163, 163)"
    }

    return (
        <div>
            <section>
                <div className=' container' style={{ maxWidth: 768 }}>
                    <div className=' row'>
                        <div className=' col'>
                            <h3>Bag</h3>
                            {bagItems.length
                                ? (
                                    bagItems.map((item, index) => (
                                        <BagItem key={index} item={item} />
                                    ))
                                )
                                : (
                                    ""
                                )}
                        </div>
                        <div className=' col fw-semibold'>
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
                            <div className=' d-flex justify-content-end py-3'><button className="btn btn-primary mt-1">Checkout</button></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h3>You Might Also Like</h3>
                <BestSellers />
            </section>
        </div>
    );
};

export default Bag;
