import React from 'react';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./Checkout.css";
import { Link, useNavigate } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import CustomizedSteppers from '../../components/step/Step';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createShipping } from '../../features/shipping/shippingSlice';
import CartSummary from '../ShoppingCart/CartSummary';
const Checkout = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { register, watch, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            username: currentUser?.username || '',
            email: currentUser?.email || '',
            contactNumber: currentUser?.contactNumber || '',
            peakpoint: currentUser?.address || '',
            division: currentUser?.division || '',
            district: currentUser?.district || '',
            upazila: currentUser?.upazila || '',
            address: currentUser?.address || '',
        }
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const handleToPayment = () => {
    //     navigate('/payment');
    // }
    //
    const phoneNumberRegex = /^\d{11}$/; // Regular expression to match a 10-digit phone number

    //handlecheckoutInfo 
    const handleToPayment = async(data) => {
        // console.log("checout info",data)
        dispatch(createShipping(data));
        navigate('/payment');
    }

    return (
        <>
            <div className="checkout-main-area">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Billing Details</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">billing</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <CustomizedSteppers step={0} />
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <div className="address__wrapper shadow pt-4">
                                <h4 className='mb-4'>Shipping Address</h4>
                                <form onSubmit={handleSubmit(handleToPayment)}>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" className='form-control mt-2' name='username' placeholder='Enter Name' {...register("username", {
                                                required: "Name is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.username && <span className='error_message' role="alert">{errors.username?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Email</label>
                                            <input type="text" className='form-control mt-2' placeholder='Enter Email' {...register("email", {
                                                required: "Email is required!",
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: 'Please enter a valid email!',
                                                },
                                            })
                                            } />
                                            {errors.email && <span className='error_message' role="alert">{errors.email?.message}</span>}
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Contact Number</label>
                                            <input type="text" className='form-control mt-2' name='username' placeholder='Enter contact number' {...register("contactNumber", { required: true, pattern: phoneNumberRegex })} />
                                            {errors.contactNumber && <span className='error_message' role="alert">Enter a valid 11-digit phone number.</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Zip code</label>
                                            <input type="number" className='form-control mt-2' name='zipcode' placeholder='Enter Zipcode' {...register("zipcode", { required: false })} />
                                            {errors.zipcode && <span className='error_message' role="alert">Enter a zip code.</span>}
                                        </div>
                                    </div>

                                    <div class="row mt-5">
                                        <div class="col-md-6">
                                            <label htmlFor="">Division</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='division' placeholder='Enter division' {...register("division", {
                                                required: "Division is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.division && <span className='error_message' role="alert">{errors.division?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">District</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='district' placeholder='Enter district' {...register("district", {
                                                required: "District is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.district && <span className='error_message' role="alert">{errors.district?.message}</span>}
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Upazila</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='upazila' placeholder='Enter district' {...register("upazila", {
                                                required: "Upazila is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.upazila && <span className='error_message' role="alert">{errors.upazila?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Pick Point</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='peakpoint' placeholder='Enter Specific address' {...register("peakpoint", {
                                                required: "peakpoint is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 5!"
                                                }
                                            })} />
                                            {errors.address && <span className='error_message' role="alert">{errors.address?.message}</span>}
                                        </div>
                                    </div>
                                    <button className='btn btn-flat btn-dark d-block mt-5 ms-auto mb-3 text-capitalize' onClick={handleToPayment}>go to payment</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4 mt-5">
                            <div className="checkout-box-wrapper shadow">
                                <div className="checkout-box">
                                    <CartSummary />
                                    <div className="checkout-btn-area mt-5">
                                        <input type="text" className='form-control' placeholder='Have any cupon?' />
                                        <button className="button checkout-btn mt-3">apply cupon</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubscriptionArea />
        </>
    );
};

export default Checkout;