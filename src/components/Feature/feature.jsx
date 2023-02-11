import React from 'react';
import payment from '../../images/payment.svg';
import shipping from '../../images/shipping.svg';
import support from '../../images/support.svg';
import saving from '../../images/saving.svg';
import "./feature.css";
const feature = () => {
    return (
        <section class="feature-area">
            <div class="container">
                <div className="feature-wrappre box-shadow">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 my-5">
                            <div class="feature-box d-flex align-items-center">
                                <img className="img-fluid" src={payment} alt="img" />
                                <div class="text-box">
                                    <h4>Secure Payment</h4>
                                    <span>All Cards Accepted</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-5">
                            <div class="feature-box d-flex align-items-center">
                                <img className="img-fluid" src={shipping} alt="img" />
                                <div class="text-box">
                                    <h4>Free Shipping</h4>
                                    <span>On All Order</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-5">
                            <div class="feature-box d-flex align-items-center">
                                <img className="img-fluid" src={support} alt="img" />
                                <div class="text-box">
                                    <h4>Online Support</h4>
                                    <span>Technical 24/7</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 my-5">
                            <div class="feature-box d-flex align-items-center last">
                                <img className="img-fluid" src={saving} alt="img" />
                                <div class="text-box">
                                    <h4>Large Saving</h4>
                                    <span>Weeken Sales</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default feature;