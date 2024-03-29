import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./Contact.css";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
        // console.log("first",form.current)
      emailjs
        .sendForm(process.env.REACT_APP_email_service_id, process.env.REACT_APP_email_template_id, form.current, {
          publicKey: process.env.REACT_APP_email_public_key,
        })
        .then(
          () => {
            toast.success("Message send SuccessFully!")
            form.current.reset();
            console.log('SUCCESS!');
          },
          (error) => {
            toast.error("Failed!")
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <>
            <div className="contact_wrapper overflow-hidden" id="contact">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Contact Us</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">Contact</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-12 text-center mb-5">
                            <h2 className="title_1">Contact Us</h2>
                            <p className="title_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        </div> */}
                        <div className="col-lg-5 col-xl-4 mt-5">
                            <aside>
                                <div className="address">
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
                        <div className="col-lg-7 col-xl-8 mt-5 text-center">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="text" name="user_name" className="inputBox form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mb-3">
                                        <input type="email" name="user_email" className="inputBox form-control" placeholder="Your Email" required />
                                    </div>
                                    {/* <div className="col-md-12 form-group mb-3">
                                        <input type="text" name="subject" className="inputBox form-control" placeholder="Subject" />
                                    </div> */}
                                    <div className="col-md-12 form-group mb-3">
                                        <textarea name="message" className="textBox form-control" placeholder="Message" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="button" type="submit">Send message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
            <SubscriptionArea />
        </>
    );
};

export default Contact;