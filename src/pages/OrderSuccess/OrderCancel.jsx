import React, { useEffect } from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./success.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/Cart/CartSlice';
// import CustomizedSteppers from '../../components/step/Step';
// import Lottie from "react-lottie";
// import animationData from "../../Assets/107043-success.json";
// import cencelImg from '../../images/cencel.png'
const OrderCancel = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(clearCart());
    },[dispatch])
    // const defaultOptions = {
    //     loop: false,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    // };
    return (
        <>
            <div className="checkout-main-area">
                <div className="order-banner mb-3" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Order Cancel</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">payment</Link></li>
                                            <li className="breadcrumb-item active">Cancel</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <CustomizedSteppers step={2} />
                </div> */}
                <div className="container">
                    {/* <Lottie options={defaultOptions} width={300} height={300} /> */}
                    {/* <div className='errorimgWrapper'>
                        <img src={cencelImg} className='img-fluid errorImg' alt="cencel" />
                    </div> */}
                    <h5 className="text-center bg-danger p-2 text-white mb-2">
                        Your order is Cancelled!
                    </h5>
                    <br />
                    <br />
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default OrderCancel;