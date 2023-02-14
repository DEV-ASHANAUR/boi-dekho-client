import React from 'react';
import TopHeader from '../SharedComponents/Topbar/TopHeader';
import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "../SharedComponents/SubscriptionArea/subscriptionArea";
import Footer from '../SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
import pimg1 from "../../images/product/mahfil-192x254.jpg";
const PreOrder = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <div className='pt-3'>
                <div className="all-preOrder-books">
                    <div className="container">

                        <div className="row">
                            <div class="d-flex mb-5 py-2 px-3 align-items-center justify-content-between border-bottom bg-white">
                                <h3 class="h5 fw-700 mb-0">
                                    <span class="d-inline-block">
                                        All Pre-Order Books
                                    </span>
                                </h3>
                                <div>
                                    <select class="form-select select-custome">
                                        <option selected value="1">Newest</option>
                                        <option value="2">Oldest</option>
                                        <option value="3">Price low to high</option>
                                        <option value="4">Price high to low</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-3 col-sm-4 col-6">
                                <div className="porduct-box position-relative">

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
                                        <div className="product-price"><del>$ 189</del> &nbsp;<span> $ 180</span>
                                        </div>
                                    </div>
                                    <div className="cart-btn text-center mt-3">
                                        <button className="btn btn-custom rounded-pill">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div class="col-md-12">
                                <div class="mt-4">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item">
                                            <Link class="page-link" to="#">Prev</Link>
                                        </li>
                                        <li class="page-item">
                                            <Link class="page-link active" to="#">1</Link>
                                        </li>
                                        <li class="page-item">
                                            <Link class="page-link" to="#">2</Link>
                                        </li>
                                        <li class="page-item">
                                            <Link class="page-link" to="#">...</Link>
                                        </li>
                                        <li class="page-item">
                                            <Link class="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default PreOrder;