import React from 'react'

const OrderReview = ({
  isActive
}) => {
  const borderBottomStyle = {
    borderBottom: "1px solid rgb(163, 163, 163)",
    marginBottom: 20
  }
  return (
    <div style={borderBottomStyle}>
      {isActive
        ? (
          // Case 1: Active + Pending
          // Case 2: Active + Not Pending
          <>
            <h3>Order Review</h3>
            <div className=' alert alert-primary'>
              <p className=' fw-semibold'>Is all the information correct?</p>
              <p>Before you submit payment, please take a moment to review your shipping information,
                billing information, and bag summary.</p>
            </div>
            <div className='d-flex justify-content-end py-3'>
              <button type="submit" className="btn btn-primary mt-1">Submit Payment</button>
            </div>
          </>
        )
        : (
          <h3>Order Review </h3>
        )
      }
    </div>
  )
}

export default OrderReview