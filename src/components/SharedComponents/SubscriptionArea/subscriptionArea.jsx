import React from 'react';
// import subscription from "../../images/banner/COVER PAGE.jpg";
import "./subscriptionArea.css";
const subscriptionArea = () => {
    return (
        <section className="subscribe-main-area">
            <div className="subscribe-area">
                {/* <div className='overlay-subs'></div> */}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8 col-lg-6">
                            <div className="sub-text">
                                <h2>subscribe now for<br /> get every day tips</h2>
                                <p>A wonderful serenity has taken possession Far<br />1 away, behind the word mountains.</p>
                                <div className="search-box-area">
                                    <input type="email" placeholder="Enter Your Email" />
                                    <div className="btn-area">
                                        <button type="submit" className="search-btn button">Submit</button>
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