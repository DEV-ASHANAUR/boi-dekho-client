import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import paymentImg from "../../images/banner/payment.jpg"
import banner from "../../images/banner/CoverPage.jpg"
import "./Checkout.css";
import { Link } from 'react-router-dom';
import CustomizedSteppers from '../../components/step/Step';
const Checkout = () => {
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
                        <div className="col-md-8">
                            <div className="address__wrapper shadow">
                                <h4>Shipping Address</h4>
                                <form action="">
                                    <div class="row mt-5">
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
                                    <button type="submit" className='btn btn-flat btn-primary d-block mt-5 w-25 ms-auto mb-3'>payment</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            information
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default Checkout;