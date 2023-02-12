import React from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Header";
import NewProduct from "../../components/NewProduct/newProduct";
import TopHeader from "../../components/Topbar/TopHeader";
import Feature from "../../components/Feature/feature";
import BestOfferProduct from "../../components/BestOfferProduct/bestOfferProduct";
import SubscriptionArea from "../../components/SubscriptionArea/subscriptionArea";
import pimg1 from "../../images/product/mahfil-192x254.jpg";
import pimg2 from "../../images/product/Muslim-itihase-utthan-poton-192x254.jpg";
import pimg3 from "../../images/product/nari192x254.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Banner />
            <FeaturedProduct />
            <NewProduct />
            <section>
                <div className="container">
                    <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div class="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                            <h3 class="h5 fw-700 mb-0">
                                <span class="border-bottom border-primary pb-3 d-inline-block">
                                    Fiction
                                </span>
                            </h3>
                            <div>
                                <button className="btn btn-custome">View All</button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            OFF &nbsp; 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">
                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>
                                            </h3>
                                        </div>
                                        <div className="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div class="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                            <h3 class="h5 fw-700 mb-0">
                                <span class="border-bottom border-primary pb-3 d-inline-block">
                                    Non-Fiction
                                </span>
                            </h3>
                            <div>
                                <button className="btn btn-custome">View All</button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            OFF &nbsp; 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">
                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>
                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div class="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                            <h3 class="h5 fw-700 mb-0">
                                <span class="border-bottom border-primary pb-3 d-inline-block">
                                    Relegious (Isalm)
                                </span>
                            </h3>
                            <div>
                                <button className="btn btn-custome">View All</button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            OFF &nbsp; 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">
                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>
                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container">
                    <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div class="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                            <h3 class="h5 fw-700 mb-0">
                                <span class="border-bottom border-primary pb-3 d-inline-block">
                                    Childish
                                </span>
                            </h3>
                            <div>
                                <button className="btn btn-custome">View All</button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            OFF &nbsp; 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg1} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">

                                        <img src={pimg2} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>

                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div><div className="col-lg-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-inner-box position-relative">
                                    <div className="icons position-absolute">
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-heart"></i>
                                        </Link>
                                        <Link href="" className="text-decoration-none text-dark">
                                            <i className="fas fa-eye"></i>
                                        </Link>
                                    </div>


                                    <div className="onsale">
                                        <span className="badge rounded-0">
                                            <i className="fas fa-arrow-down"></i> 29%</span>
                                    </div>
                                    <div className="productImage">
                                        <img src={pimg3} alt="img1" className="img-fluid" />
                                    </div>

                                    <div className="product-info">
                                        <div className="product-name">
                                            <h3>
                                                <Link to="">Mahfil theke Mahfile</Link>
                                            </h3>
                                        </div>
                                        <div class="product-author">
                                            <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                        </div>
                                        <div className="product-price"><span>$ 189</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custome rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feature />
            <BestOfferProduct />
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default Home;
