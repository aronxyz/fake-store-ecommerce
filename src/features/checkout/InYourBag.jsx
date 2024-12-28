import React from 'react'
import { useSelector } from 'react-redux';

const InYourBag = () => {

  const bagItems = useSelector((state) => state.bag.items);
  const bagTotal = useSelector((state) => state.bag.total);
  
  return (
    <>
      <h3>In your Bag</h3>
      <div>
        <div className=' d-flex flex-column pb-2'>
          <div className=' d-flex justify-content-between'>
            <span>Subtotal</span>
            <span>{bagTotal}€</span>
          </div>
          <div className=' d-flex justify-content-between'>
            <span>Estimated Delivery & Handling</span>
            <span>Free</span>
          </div>
        </div>
        <div className=' d-flex justify-content-between py-2'>
          <span>Total</span>
          <span>{bagTotal}€</span>
        </div>
      </div>
      <div className=' d-flex flex-column gap-3' style={{ marginTop: 20 }}>
        {bagItems.length
          ? (
            bagItems.map((item, index) => (
              <div key={index} className=' d-flex'>
                <div><img src={item.image} width={40} alt="" /></div>
                <div className=' d-flex flex-column' style={{ marginLeft: 20 }}>
                  <span className=' fw-semibold'>{item.title}</span>
                  <span>Qty: {item.quantity}</span>
                  <span>{item.amount}€</span>
                </div>
              </div>
            ))
          )
          : (
            ""
          )}
      </div>
    </>
  )
}

export default InYourBag