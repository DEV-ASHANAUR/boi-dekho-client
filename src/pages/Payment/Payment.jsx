import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
// import "./Checkout.css";
import "./payment.css";
import { Link, useNavigate } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import CustomizedSteppers from '../../components/step/Step';
const Payment = () => {
    const navigate = useNavigate();
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
                                    <input className="form-check-input" type="radio" name="paytype" id="pay1" checked />
                                    <label className="form-check-label" for="pay1">
                                        SSL Payment
                                    </label>
                                </div>
                                <div className="form-check mt-3">
                                    <input className="form-check-input" type="radio" name="paytype" id="pay2" />
                                    <label className="form-check-label" for="pay2">
                                        Cash on Delivery
                                    </label>
                                </div>
                                <button className='btn btn-flat btn-dark d-block mt-5 ms-auto mb-3 text-capitalize' onClick={goto}>pay now</button>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="checkout-box-wrapper shadow">
                                <div className="checkout-box">
                                    <div className="b-1">
                                        <div className="order-total sm-box d-flex justify-content-between">
                                            <p className='text-capitalize m-0'>subTotal :</p>
                                            <span><b><TbCurrencyTaka />20,000</b></span>
                                        </div>
                                        <div className="shipping-item sm-box d-flex justify-content-between">
                                            <p className='text-capitalize m-0'>Shipping :</p>
                                            <span><b><TbCurrencyTaka />20.00</b></span>
                                        </div>
                                        <div className="shipping-item sm-box d-flex justify-content-between">
                                            <p className='text-capitalize m-0'>Discount :</p>
                                            <span><b>-</b></span>
                                        </div>
                                    </div>
                                    <div className="subtotal-box sm-box d-flex justify-content-between">
                                        <p className='text-capitalize m-0'><b>Grandtotal :</b></p>
                                        <span><b><TbCurrencyTaka />140.00</b></span>
                                    </div>
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