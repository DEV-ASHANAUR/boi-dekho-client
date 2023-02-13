import React from 'react';
import TopHeader from '../SharedComponents/Topbar/TopHeader';
import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "../SharedComponents/SubscriptionArea/subscriptionArea";
import Footer from '../SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
import catimg from "../../images/iwvoEIDLV6KFpO1bbyXYrAzEVERJvnH6I6pnSJiE.jpg";
import "./books.css"
const Books = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <section>
                <div className="all-books">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-5 col-12">
                                <div className="bg-white rounded shadow-sm books-side-cat-list">
                                    <div className="px-3 pt-3 books-filter text-start">
                                        <div className="mb-3 border-bottom">
                                            <h3 className="h5 fw-700 mb-0">
                                                <span className="border-bottom border-primary pb-3 d-inline-block">
                                                    All Categories
                                                </span>
                                            </h3>
                                        </div>
                                    </div>

                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="13" />
                                            <label for="13">Islamic</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="14" />
                                            <label for="14">Fiction</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Non-Fiction</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Childish</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>

                                    {/* <ul className="list-unstyled categories pb-2 mb-0 text-left">
                                        <li className="category-nav-element">
                                            <Link
                                                href="https://www.oofymart.com/category/home-appliances-4kvj1"
                                                className="text-truncate text-reset py-2 px-3 d-block"
                                            >
                                                <img
                                                    className="cat-image me-2 opacity-60"
                                                    src={catimg}
                                                    width="16"
                                                    alt=""
                                                />
                                                <span className="cat-name">
                                                    Islamic Books
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="category-nav-element">
                                            <Link
                                                to=""
                                                className="text-truncate text-reset py-2 px-3 d-block"
                                            >
                                                <img
                                                    className="cat-image me-2 opacity-60"
                                                    src={catimg}
                                                    width="16"
                                                    alt=""
                                                />
                                                <span className="cat-name">
                                                    Fiction Books
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="category-nav-element">
                                            <Link
                                                href="https://www.oofymart.com/category/electronic-devices-bdcwi"
                                                className="text-truncate text-reset py-2 px-3 d-block"
                                            >
                                                <img
                                                    className="cat-image me-2 opacity-60"
                                                    src={catimg}
                                                    width="16"
                                                    alt=""
                                                />
                                                <span className="cat-name">
                                                    Non-Fiction Books
                                                </span>
                                            </Link>
                                        </li>

                                        <li className="category-nav-element">
                                            <Link
                                                href="https://www.oofymart.com/category/health--beauty-bipdp"
                                                className="text-truncate text-reset py-2 px-3 d-block"
                                            >
                                                <img
                                                    className="cat-image me-2 opacity-60"
                                                    src={catimg}
                                                    width="16"
                                                    alt=""
                                                />
                                                <span className="cat-name">
                                                    Childish Books
                                                </span>
                                            </Link>
                                        </li>
                                    </ul> */}
                                </div>




                                <div className="bg-white rounded shadow-sm mt-3 books-side-pub-list">
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
                                            <input type="checkbox" id="13" />
                                            <label for="13">Lecture</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="14" />
                                            <label for="14">Jupitar</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Newton</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Okkhor-Potro</label>
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
                                            <input type="checkbox" id="13" />
                                            <label for="13">Arif-Ajad</label>
                                        </div>
                                        <p>(6)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="14" />
                                            <label for="14">Dr. Jahangir Kabir</label>
                                        </div>
                                        <p>(3)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Shahriar Subin</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                    <div class="check-inner">
                                        <div class="check-group">
                                            <input type="checkbox" id="15" />
                                            <label for="15">Jhankar Mahbub</label>
                                        </div>
                                        <p>(4)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-7 col-12">

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default Books;