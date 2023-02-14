import React from 'react';
import TopHeader from '../SharedComponents/Topbar/TopHeader';
import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "../SharedComponents/SubscriptionArea/subscriptionArea";
import Footer from '../SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
import pimg1 from "../../images/product/mahfil-192x254.jpg";
import "./books.css"
const Books = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <div className='pt-3'>
                <div className="all-books">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-5 col-12">

                                <div className="bg-white rounded shadow-sm books-side-pub-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    All Publishers
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="1" />
                                            <label for="1">Lecture</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="2" />
                                            <label for="2">Jupitar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="3" />
                                            <label for="3">Newton</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="4" />
                                            <label for="4">Okkhor-Potro</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="5" />
                                            <label for="5">Technical</label>
                                        </div>
                                        <p>(9)</p>
                                    </div>
                                </div>


                                <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    Islamic Categories
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="13" />
                                            <label for="13">Serat and Sunnah</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="6" />
                                            <label for="6">Sahih Hadis</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="7" />
                                            <label for="7">Sistacar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="8" />
                                            <label for="8">Dua and Jikir</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="9" />
                                            <label for="9">Lifestyle of Sahabi</label>
                                        </div>
                                        <p>(1)</p>
                                    </div>
                                </div>



                                <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    Fiction Categories
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="10" />
                                            <label for="10">Serat and Sunnah</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="11" />
                                            <label for="11">Sahih Hadis</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="12" />
                                            <label for="12">Sistacar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="13" />
                                            <label for="13">Dua and Jikir</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="14" />
                                            <label for="14">Lifestyle of Sahabi</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                </div>



                                <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    Non-Fcction Categories
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Serat and Sunnah</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="16" />
                                            <label for="16">Sahih Hadis</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="17" />
                                            <label for="17">Sistacar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="18" />
                                            <label for="18">Dua and Jikir</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="19" />
                                            <label for="19">Lifestyle of Sahabi</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                </div>


                                <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    Childish Categories
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="20" />
                                            <label for="20">Serat and Sunnah</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="21" />
                                            <label for="21">Sahih Hadis</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="22" />
                                            <label for="22">Sistacar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="23" />
                                            <label for="23">Dua and Jikir</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="24" />
                                            <label for="24">Lifestyle of Sahabi</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                </div>



                                <div className="bg-white rounded shadow-sm mt-3 books-side-author-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    All Authors
                                                </span>
                                            </h3>
                                        </div>
                                    </div>



                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="25" />
                                            <label for="25">Arif-Ajad</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="26" />
                                            <label for="26">Dr. Jahangir Kabir</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="27" />
                                            <label for="27">Shahriar Subin</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="28" />
                                            <label for="28">Jhankar Mahbub</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-7 col-12">
                                <div class="d-flex mb-5 py-2 px-3 align-items-center justify-content-between border-bottom bg-white">
                                    <h3 class="h5 fw-700 mb-0">
                                        <span class="d-inline-block">
                                            All Books
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
                                <div className="row">
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                                    <div className="col-xl-3 col-md-4 col-sm-6 col-6">
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
                </div>
            </div>
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default Books;