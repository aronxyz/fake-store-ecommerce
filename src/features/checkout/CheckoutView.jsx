import React, { useState } from 'react'
import DeliveryOptions from './DeliveryOptions';
import Payment from './Payment';
import OrderReview from './OrderReview';
import InYourBag from './InYourBag';

const CheckoutView = () => {

    const [activeStep, setActiveStep] = useState("deliveryOptions")
    const handleActiveStepChange = (nextStep) => { setActiveStep(nextStep) }

    const borderBottomStyle = {
        borderBottom: "1px solid rgb(163, 163, 163)"
    }

    return (
        <section>
            <h3 className=' text-center'>Checkout</h3>
            <div className=' container' style={{ maxWidth: 992 }}>
                <div className=' row g-4'>
                    <div className=' col-12 col-lg-8'>
                        <DeliveryOptions
                            isActive={activeStep === "deliveryOptions"}
                            isReviewing={activeStep === "orderReview"}
                            handleActiveStepChange={handleActiveStepChange} />
                        <Payment
                            isActive={activeStep === "payment"}
                            isReviewing={activeStep === "orderReview"}
                            handleActiveStepChange={handleActiveStepChange} />
                        <OrderReview
                            isActive={activeStep === "orderReview"}
                            handleActiveStepChange={handleActiveStepChange} />
                    </div>
                    <div className=' col-12 col-md-4'>
                        <InYourBag />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CheckoutView