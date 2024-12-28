import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { set } from './checkoutSlice';
import { DevTool } from '@hookform/devtools';

const DeliveryOptions = ({
  isActive,
  isReviewing,
  handleActiveStepChange
}) => {

  const dispatch = useDispatch()

  const status = useSelector((state) => state.checkout.deliveryOptions.status)
  const data = useSelector((state) => state.checkout.deliveryOptions.data)

  const checkIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
  </svg>

  const defaultValues = data
    //Case 2: Active + Not Pending 
    // Case 5: Reviewing + Not Pending 
    ? data
    : {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      email: '',
      phoneNumber: '',
    }

  const { register, handleSubmit, control, formState: { errors, isValid, isDirty } } = useForm({
    mode: "onChange", // This will trigger validation on form field change
    defaultValues
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    dispatch(set({
      key: "deliveryOptions",
      value: data
    }));
    handleActiveStepChange("payment")
  };

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
            <h3>Delivery Options</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      placeholder="Enter first name"
                      {...register('firstName', { required: 'First name is required' })}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      placeholder="Enter last name"
                      {...register('lastName', { required: 'Last name is required' })}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName.message}</div>}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      id="address"
                      placeholder="Enter address"
                      {...register('address', { required: 'Address is required' })}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-4'>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                      id="city"
                      placeholder="Enter city"
                      {...register('city', { required: 'City is required' })}
                    />
                    {errors.city && <div className="invalid-feedback">{errors.city.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                      id="country"
                      placeholder="Enter country"
                      {...register('country', { required: 'Country is required' })}
                    />
                    {errors.country && <div className="invalid-feedback">{errors.country.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-4'>
                  <div className="form-group">
                    <label htmlFor="postalCode">Postal Code</label>
                    <input
                      type="text"
                      className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`}
                      id="postalCode"
                      placeholder="Enter postal code"
                      {...register('postalCode', { required: 'Postal code is required' })}
                    />
                    {errors.postalCode && <div className="invalid-feedback">{errors.postalCode.message}</div>}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      placeholder="Enter email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address' }
                      })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                      id="phoneNumber"
                      placeholder="Enter phone number"
                      {...register('phoneNumber', { required: 'Phone number is required' })}
                    />
                    {errors.phoneNumber && <div className="invalid-feedback">{errors.phoneNumber.message}</div>}
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-end py-3'>
                <button
                  type="submit"
                  className="btn btn-primary mt-1"
                  disabled={!isValid || !isDirty} // Disable button if form is not valid or not dirty
                >
                  Save & Continue
                </button>
              </div>
            </form>
          </>
        )
        : (
          status === "pending"
            // Case 3: Not Active + Pending  
            ? (
              <h3>Delivery Options</h3>
            )
            // Case 4: Not Active + Not Pending
            : (
              <>
                <div className=' d-flex justify-content-between'>
                  <h3>Delivery Options {checkIcon}</h3>
                  <a href="#" onClick={() => handleActiveStepChange("deliveryOptions")}>Edit</a>
                </div>
                <div className=' d-flex flex-column' style={{ marginBottom: 20 }}>
                  <span className=' fw-semibold'>Shipping Address</span>
                  <span>{data.firstName} {data.lastName}</span>
                  <span>{data.address}</span>
                  <span>{data.city}, {data.postalCode}, {data.country}</span>
                  <span>{data.email}</span>
                  <span>{data.phoneNumber}</span>
                </div>
              </>
            )
        )}
      <DevTool control={control} />
    </div>
  )
}

export default DeliveryOptions
