import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { set } from './checkoutSlice'


const Payment = ({
  isActive,
  isReviewing,
  handleActiveStepChange
}) => {

  const dispatch = useDispatch()

  const status = useSelector((state) => state.checkout.payment.status)
  const data = useSelector((state) => state.checkout.payment.data)

  const checkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
  </svg>
  
  const defaultValues = data
    //Case 2: Active + Not Pending
    // Case 5: Reviewing + Not Pending
    ? data
    : {
      fullName: '',
      cardNumber: '',
      cardExpiration: '',
      cvv: ''
    }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues
  });

  const onSubmit = (data) => {
    console.log('Payment Data:', data);
    dispatch(set({
      key: "payment",
      value: data
    }));
    handleActiveStepChange("orderReview")
  }

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
            <h3>Payment</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name (as displayed in card)</label>
                    <input
                      type="text"
                      className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                      id="fullName"
                      placeholder="Enter full name"
                      {...register('fullName', { required: 'Full name is required' })}
                    />
                    {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                      id="cardNumber"
                      placeholder="Enter card number"
                      {...register('cardNumber', {
                        required: 'Card number is required',
                        pattern: { value: /^\d{16}$/, message: 'Enter a valid 16-digit card number' }
                      })}
                    />
                    {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber.message}</div>}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="cardExpiration">Card Expiration</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cardExpiration ? 'is-invalid' : ''}`}
                      id="cardExpiration"
                      placeholder="MM/YY"
                      {...register('cardExpiration', {
                        required: 'Card expiration is required',
                        pattern: { value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/, message: 'Enter a valid expiration date (MM/YY)' }
                      })}
                    />
                    {errors.cardExpiration && <div className="invalid-feedback">{errors.cardExpiration.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      className={`form-control ${errors.cvv ? 'is-invalid' : ''}`}
                      id="cvv"
                      placeholder="Enter CVV"
                      {...register('cvv', {
                        required: 'CVV is required',
                        pattern: { value: /^[0-9]{3}$/, message: 'Enter a valid 3-digit CVV' }
                      })}
                    />
                    {errors.cvv && <div className="invalid-feedback">{errors.cvv.message}</div>}
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-end py-3'>
                <button type="submit" className="btn btn-primary mt-1">Continue To Order Review</button>
              </div>
            </form>
          </>
        )
        : (
          status === "pending"
            // Case 3: Not Active + Pending  
            ? (
              <h3>Payment</h3>
            )
            // Case 4: Not Active + Not Pending
            : (
              <>
                <div className=' d-flex justify-content-between'>
                  <h3>Payment {checkIcon}</h3><a href="#" onClick={() => handleActiveStepChange("orderReview")}>Edit</a>
                </div>
                <div className=' d-flex flex-column' style={{ marginBottom: 20 }}>
                  <span className=' fw-semibold'>Payment Method</span>
                  <div>
                    <img src={require('../../assets/mastercard.png')} width={40} alt="" />
                    <span className=' ms-1'>{data.cardNumber.substring(data.cardNumber.length - 1, data.cardNumber.length - 5)}</span>
                    <span className=' ms-1'>{data.cardExpiration}</span>
                  </div>
                </div>
              </>
            )
        )}
    </div>
  )
}

export default Payment
