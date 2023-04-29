import React, { useState } from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
// import "./Checkout.css";
import "./payment.css";
import { Link, useNavigate } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import CustomizedSteppers from '../../components/step/Step';
import CartSummary from '../ShoppingCart/CartSummary';
const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('cash');
    const navigate = useNavigate();
    const changePaymentMethod = (method) => {
        setPaymentMethod(method);
    }
    const goto = () => {
        navigate('/order-success');
    }
    return (
        <>
            <div className="checkout-main-area">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Payment Details</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">Payment</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CustomizedSteppers step={1} />
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <div className="address__wrapper shadow pt-4">
                                <h4 className='mb-5'>Choses Payment Option</h4>

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="paytype" id="pay1" onClick={() => changePaymentMethod('sslpayment')} checked={(paymentMethod == 'sslpayment') && true} />
                                    <label className="form-check-label" for="pay1">
                                        SSL Payment
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="radio" name="paytype" id="pay2" onClick={() => changePaymentMethod('cash')} checked={(paymentMethod == 'cash') && true} />
                                    <label className="form-check-label" for="pay2">
                                        Cash on Delivery
                                    </label>
                                </div>
                                {
                                    paymentMethod == 'cash' ? (
                                        <button className='btn btn-flat btn-success d-block mt-5 ms-auto mb-3 text-capitalize' onClick={goto}>Confirm Order</button>
                                    ) : (
                                        <button className='btn btn-flat btn-primary d-block mt-5 ms-auto mb-3 text-capitalize' onClick={goto}>pay now</button>
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="checkout-box-wrapper shadow">
                                <div className="checkout-box">
                                    <CartSummary />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default Payment;