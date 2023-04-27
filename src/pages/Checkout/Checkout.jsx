import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./Checkout.css";
import { Link, useNavigate } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import CustomizedSteppers from '../../components/step/Step';
const Checkout = () => {
    const navigate = useNavigate();
    const handleToPayment = () => {
        navigate('/payment');
    }
    return (
        <>
            <div className="checkout-main-area">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Billing Details</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">billing</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CustomizedSteppers step={0} />
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <div className="address__wrapper shadow pt-4">
                                <h4>Shipping Address</h4>
                                <form action="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" class="form-control mt-2" placeholder="Full Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Email</label>
                                            <input type="email" class="form-control mt-2" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Contact Number</label>
                                            <input type="text" class="form-control mt-2" placeholder="Contact Number" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Zip code</label>
                                            <input type="text" class="form-control mt-2" placeholder="Contact Number" />
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <input type="checkbox" id="daddress" className='form-check-input me-2' />
                                        <label htmlFor="daddress"> Use default Address</label>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Division</label>
                                            <input type="text" class="form-control mt-2" placeholder="Division" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">District</label>
                                            <input type="email" class="form-control mt-2" placeholder="District" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Upazila</label>
                                            <input type="text" class="form-control mt-2" placeholder="Upazila Number" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Address</label>
                                            <input type="email" class="form-control mt-2" placeholder="Full Address" />
                                        </div>
                                    </div>
                                    <button className='btn btn-flat btn-dark d-block mt-5 ms-auto mb-3 text-capitalize' onClick={handleToPayment}>go to payment</button>
                                </form>
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
                                    <div className="checkout-btn-area mt-5">
                                        <input type="text" className='form-control' placeholder='Have any cupon?' />
                                        <button className="button checkout-btn mt-3">apply cupon</button>
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

export default Checkout;