import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./success.css";
import { Link } from 'react-router-dom';
import CustomizedSteppers from '../../components/step/Step';
import Lottie from "react-lottie";
import animationData from "../../Assets/107043-success.json";
const OrderSuccess = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <>
            <div className="checkout-main-area">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Order Success</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">Success</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CustomizedSteppers step={2} />
                </div>
                <div className="container">
                    <Lottie options={defaultOptions} width={300} height={300} />
                    <h5 className="text-center mb-2">
                        Your order is successful 😍
                    </h5>
                    <br />
                    <br />
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default OrderSuccess;