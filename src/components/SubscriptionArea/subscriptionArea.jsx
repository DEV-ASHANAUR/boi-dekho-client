import React from 'react';
// import subscription from "../../images/banner/COVER PAGE.jpg";
import "./subscriptionArea.css";
const subscriptionArea = () => {
    return (
        <section>
            <div class="subscribe-area">
                {/* <div className='overlay-subs'></div> */}
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 col-lg-6">
                            <div class="sub-text">
                                <h2>subscribe now for<br /> get every day tips</h2>
                                <p>A wonderful serenity has taken possession Far<br />1 away, behind the word mountains.</p>
                                <div class="search-box-area">
                                    <input type="email" placeholder="Enter Your Email" />
                                    <div class="btn-area">
                                        <button type="submit" class="search-btn button">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default subscriptionArea;