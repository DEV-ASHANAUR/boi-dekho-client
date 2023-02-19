import React from 'react';
import { Link } from 'react-router-dom';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <div class="contact_wrapper overflow-hidden" id="contact">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div class="container">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-12">
                                <div class="cart-text-area">
                                    <h2>Contact Us</h2>
                                    <div>
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li class="breadcrumb-item active">Contact</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        {/* <div class="col-12 text-center mb-5">
                            <h2 class="title_1">Contact Us</h2>
                            <p class="title_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        </div> */}
                        <div class="col-lg-5 col-xl-4 mt-5">
                            <aside>
                                <div class="address">
                                    <h4>Get in touch with us</h4>
                                    <ul>
                                        <li>
                                            <strong>Phone : </strong>
                                            <Link href="tel:900888707123">+900 888 707 123</Link>
                                        </li>
                                        <li>
                                            <strong>Email : </strong>
                                            <Link href="mailto:name@yoursite.com">name@yoursite.com</Link>
                                        </li>
                                        <li>
                                            <strong>Adress : </strong>
                                            <p>Pasar kambing 58 Suite X.110 Peterongan Semarang, USA</p>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div class="col-lg-7 col-xl-8 mt-5 text-center">
                            <form action="#" method="post">
                                <div class="row">
                                    <div class="col-md-6 form-group mb-3">
                                        <input type="text" name="name" class="inputBox form-control" placeholder="Your Name" />
                                    </div>
                                    <div class="col-md-6 form-group mb-3">
                                        <input type="email" name="email" class="inputBox form-control" placeholder="Your Email" />
                                    </div>
                                    <div class="col-md-12 form-group mb-3">
                                        <input type="text" name="subject" class="inputBox form-control" placeholder="Subject" />
                                    </div>
                                    <div class="col-md-12 form-group mb-3">
                                        <textarea name="message" class="textBox form-control" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="button" type="submit">Send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default Contact;