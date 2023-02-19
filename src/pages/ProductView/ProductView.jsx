import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../SharedComponents/Footer/Footer";
// import Header from "../SharedComponents/Navbar/Header";
// import TopHeader from "../SharedComponents/Topbar/TopHeader";
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import ReletedProduct from "./reletedProduct";
import pimg1 from "../../images/product/mahfil-192x254.jpg";
import "./productView.css";
import Review from "../../components/ProductView/Review/Review";
const ProductView = () => {
    return (
        <>
            {/* <TopHeader />
            <Header /> */}
            <div className="item-view-area pt-5">
                <div className="container">
                    <div className="py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-5 col-12 mt-5">
                                <div className="item">
                                    <div className="item-img">
                                        <Link>
                                            <img className="img-fluid" src={pimg1} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-7 col-12 mt-5">
                                <div className="product-deatils-wrapper">
                                    <Link className="back" to="/books">
                                        <i className="fas fa-arrow-left"></i>
                                        <span>Back To Product</span>
                                    </Link>
                                    <div className="name-area">
                                        <h2>Anti-septic Dry Hand Gel</h2>

                                        <div className="rating-area d-flex align-items-center">
                                            <div className="rating-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="mb-0">4.4(328 reviews)</p>
                                        </div>
                                    </div>


                                    <div className="categories-area d-flex">
                                        <h5>Categories :</h5>
                                        <Link>Assisories</Link>
                                    </div>

                                    <div className="product-details">
                                        <div className="d-flex align-items-center">
                                            <h6>Author : </h6>
                                            <Link className="link">Moniruzzaman</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Publisher : </h6>
                                            <Link className="link">Lecture</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Version : </h6>
                                            <Link>1st published 2023</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Cover : </h6>
                                            <Link>Hard Cover</Link>
                                        </div>
                                    </div>



                                    <div className="price-area">
                                        <h5>Product Price</h5>
                                        <p>$12.00</p>
                                    </div>
                                    <div className="size-area">
                                        <div>
                                            <h5>Select Quantity</h5>
                                            <div className="number-area">
                                                <input className="form-control quantity" type="number" min="0" value="1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-area-wrapper d-md-flex">
                                        <div className="shortPdf button d-flex mt-3">
                                            <p>Read Short-Pdf</p>
                                            <div className="shortPdf-icon">
                                                <div className="b-tn">
                                                    <i className="far fa-file"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="#" className="add-cart button mt-3">
                                            Add To Cart
                                            <i className="fas fa-cart-arrow-down"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Review />
            <ReletedProduct />
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default ProductView;
