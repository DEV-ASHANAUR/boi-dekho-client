import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import paymentImg from "../../images/banner/payment.jpg"
import banner from "../../images/banner/CoverPage.jpg"
import "./Checkout.css";
import { Link } from 'react-router-dom';
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
                <form className="needs-validation billing-form" noValidate="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    <div className="col-md-12 mt-4">
                                        <div className="input_group">
                                            <label>Email address *</label>
                                            <input className="form-control" type="email" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>First name *</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>Last name *</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>

                                    <div className="col-md-12 mt-4">
                                        <div className="input_group">
                                            <label>Street address *</label>
                                            <input className="form-control" type="text" placeholder="House number and street name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-2">
                                        <div className="input_group">
                                            <input className="form-control" type="text" placeholder="Apartment,suite,unit etc(optional)" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>Town/City *</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>Postcode *</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>Country(optional)</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <div className="input_group">
                                            <label>Phone *</label>
                                            <input className="form-control" type="text" required="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 mt-4">
                                        <div className="input_group">
                                            <label>Aditional information(optional)</label>
                                            <textarea className="form-control" placeholder="Notes about your order" required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-5">
                                <div className="order-place-wrapper">
                                    <div className="box">
                                        <h2>Your Order</h2>
                                        <div className="label common-checkout">
                                            <p>Product</p>
                                            <p>Subtotal</p>
                                        </div>
                                        <div className="p-name common-checkout">
                                            <p>Anti-septic Dry Hand Gel</p>
                                            <span>$120.00</span>
                                        </div>
                                        <div className="p-name common-checkout">
                                            <p>Surgical Latex Glovex</p>
                                            <span>$80.65</span>
                                        </div>
                                        <div className="sub-t common-checkout">
                                            <p>Subtotal</p>
                                            <span>$814.85</span>
                                        </div>
                                        <div className="ship common-checkout">
                                            <p>Shipping</p>
                                            <span>$10.00</span>
                                        </div>
                                        <div className="total common-checkout">
                                            <p>Total</p>
                                            <p>814.85</p>
                                        </div>
                                        <div className="payment-img b-none common-checkout">
                                            <div className="check-group paypal">
                                                <input className="form-check-input" type="checkbox" id="pa" required="" />
                                                <label className="form-check-label" for="pa">
                                                    Paypal
                                                    <img className="lazy-load" src={paymentImg} alt="img" />
                                                </label>
                                            </div>
                                        </div>
                                        <div className="condition b-none common-checkout">
                                            <div className="check-group">
                                                <input className="form-check-input" type="checkbox" id="co" required="" />
                                                <label className="form-check-label" for="co">I have read and agree to the website terms and conditions *</label>
                                            </div>
                                        </div>
                                        <div className="btn-area">
                                            <button type="submit" className="button">Place order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default Checkout;