import React from "react";
import { Link } from "react-router-dom";
// import Facebook from "../../../images/social-icon/facebook.png";
// import Git from "../../../images/social-icon/github.png";
// import Google from "../../../images/social-icon/google.png";
import img from "../../../images/banner/payment.jpg";
import "./Footer.css";
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <div className="footer_top ">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="social_icons">
                                <h5>BOI-KINI</h5>
                                <p className="mt-3">Boi-kini - is a leading book shop in Bangladesh. We offer thousands of islamic, general and academic books at a discounted price. We provide good packaging with low shipping cost all over the Bangladesh.</p>
                                <div className="contact-area-footer mt-4">
                                    <span className="phone">
                                        <i
                                            className="fas fa-phone rotate"
                                            style={{ marginRight: "8px" }}
                                        ></i> +8801770000000
                                    </span> <br />
                                    <span className="mail">
                                        <i
                                            className="fas fa-envelope"
                                            style={{ marginRight: "8px" }}
                                        ></i> example@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="d-lg-none col-md-6 col-12">
                            <div className="footer-box">
                                <h5>We Accept</h5>
                                <p className="mt-3">Boi-kini - is a leading book shop in Bangladesh. We offer thousands of islamic, general and academic books at a discounted price. We provide good packaging with low shipping cost all over the Bangladesh.</p>
                                <img className="payment-footer img-fluid" src={img} alt="img" />
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3">
                            <div className="widget_box">
                                <h5>Provide</h5>
                                <ul>
                                    <li>
                                        <span>Organic</span>
                                    </li>
                                    <li>
                                        <span>Always Punctual</span>
                                    </li>
                                    <li>
                                        <span>Health</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="widget_box">
                                <h5>Services</h5>
                                <ul>
                                    <li>
                                        <span>Free Delevery</span>
                                    </li>
                                    <li>
                                        <span>Quality Food</span>
                                    </li>
                                    <li>
                                        <span>Product Service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3">
                            <div className="widget_box">
                                <h5>ReadMe</h5>
                                <ul>
                                    <li>
                                        <span>About Us</span>
                                    </li>
                                    <li>
                                        <span>My Blogs</span>
                                    </li>
                                    <li>
                                        <span>Products</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 d-lg-block d-none">
                            <div className="footer-box">
                                <h5>We Accept</h5>
                                <p className="mt-3">Boi-kini - is a leading book shop in Bangladesh. We offer thousands of islamic, general and academic books at a discounted price. We provide good packaging with low shipping cost all over the Bangladesh.</p>
                                <img className="payment-footer img-fluid" src={img} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center text-sm-start">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <p className="text-light">
                                Copyright &copy; {year} All rights reserved.
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 text-sm-end">
                            <div className="icon-area">
                                <Link to="#">
                                    <i className="fab fa-instagram"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fab fa-facebook-f"></i>
                                </Link>
                                <Link to="#">
                                    <i className="fab fa-twitter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
