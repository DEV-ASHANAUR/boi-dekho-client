import React, { useEffect } from 'react';
import './orderdetails.css';
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'


import toast, { Toaster } from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb';
import Sidebar from '../../sidebar/Sidebar';


const OrderDetails = () => {


    //decide what to render
    // let content = null;

    // if (isLoading) {
    //     content = <Loading />
    // }
    // if (!isLoading && isError) {
    //     content = <p className="bg-info text-white text-center p-2 d-block mt-5">Something Went Wrong!</p>
    // }
    // if (!isLoading && !isError && listItem[0]?.bookId?.length === 0) {
    //     content = <p className="bg-info text-white text-center p-2 d-block mt-5">Your wishlist is empty!</p>
    // }
    // if (!isLoading && !isError && listItem[0]?.bookId?.length > 0) {
    //     content = listItem[0].bookId.map((book, i) => (
    //         <div className="wishlist__wrapper" key={i}>
    //             <div className='wish__left__side'>
    //                 <div className="wishlist__image">
    //                     <img src={book.coverImage} alt="cover image" />
    //                 </div>
    //                 <div className="wishlist__title">
    //                     <h2>{book.bookTitle}</h2>
    //                     <p>Availability: <span className='text-success'>In Stock</span></p>
    //                 </div>
    //             </div>
    //             <div className='wishlist__price'>
    //                 <p><TbCurrencyTaka />{book.price}</p>
    //             </div>
    //             <button className='wish__add__to__cart' onClick={()=>handleAddToCart(book)}>add to cart</button>
    //             <button onClick={()=>handleRemove(book._id)} className='wish__remove'><i className="fas fa-trash"></i></button>
    //         </div>
    //     ))
    // }
    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address__wrapper shadow-sm">
                                {/* testing code */}
                                <article className="card">
                                    <div className="card-body">
                                        <article className="card">
                                            <div className="card-body row" style={{ padding: "10px" }}>
                                                <div className="col-md-3">
                                                    <strong>Invoice No:</strong> <br /> #444IDDDL8
                                                </div>
                                                <div className="col-md-3"> <strong>Order Date:</strong> <br />22-14-2021 </div>
                                                {/* <div className="col-md-5"> <strong>Shipping By: Jishan</strong> <br /> Rangpur,Gaibandha,Sadullapur | <i className="fa fa-phone"></i> 01722260010</div> */}
                                                <div className="col-md-4"> <strong>Status:</strong> <br /> Picked by the courier </div>
                                                <div className="col-md-2"> <strong>Total: </strong> <br />৳ 500 </div>
                                            </div>
                                        </article>
                                        <div className="track">
                                            <div className="step active">
                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                <span className="text">Order Pending</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            <div className="step active">
                                                <span className="icon "><i className="fa fa-check"></i> </span>
                                                <span className="text">Order confirmed</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            <div className="step">
                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                <span className="text">Order Processing</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            <div className="step">
                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                <span className="text">Picked Order</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            <div className="step">
                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                <span className="text">Shipped Order</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            <div className="step">
                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                <span className="text">Delivered</span>
                                                <small className="text-danger">Date</small>
                                            </div>
                                            {/* for cancel order start */}
                                            {/* <div className="cancel done">
                                                <span className="icon "> <i className="fa fa-close "></i> </span>
                                                <span className="text">Order Pending</span>
                                            </div>
                                            <div className="cancel done">
                                                <span className="icon "><i className="fa fa-close"></i> </span>
                                                <span className="text">Order confirmed</span>
                                            </div>
                                            <div className="cancel done">
                                                <span className="icon"> <i className="fa fa-close"></i> </span>
                                                <span className="text">Order Processing</span>

                                            </div>
                                            <div className="cancel done">
                                                <span className="icon"> <i className="fa fa-close"></i> </span>
                                                <span className="text">Picked Order</span>

                                            </div>

                                            <div className="cancel done">
                                                <span className="icon"><i className="fa fa-close"></i> </span>
                                                <span className="text">Shipped Order</span>

                                            </div>
                                            <div className="cancel done">
                                                <span className="icon"> <i className="fa fa-close"></i></span>
                                                <span className="text">Delivered</span>

                                            </div> */}
                                            {/* for cancel order end */}

                                        </div>
                                        <div className="empty"></div>

                                        <hr />
                                        
                                    </div>
                                </article>
                                {/* testing code */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default OrderDetails