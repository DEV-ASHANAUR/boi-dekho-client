import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SubscriptionArea from "../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import banner from "../../images/banner/CoverPage.jpg"
import "./ShoppingCart.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, dereaseCart, getTotals, removeCartItem } from '../../features/Cart/CartSlice';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { TbCurrencyTaka } from 'react-icons/tb';

import { Toaster, toast } from 'react-hot-toast';
import CartSummary from './CartSummary';

const ShoppingCart = () => {
    const { cartItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    },[dispatch,cartItems])
    // console.log("cartitem",cartItems);

    const handleShop = () =>{
        toast.error("Your bag is Empty!");
    }
    return (
        <>
            <div className="main-cart-area">
                <div className="order-banner mb-5" style={{ backgroundImage: `url(${banner})` }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-12">
                                <div className="cart-text-area">
                                    <h2>Shopping Cart</h2>
                                    <div>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                            <li className="breadcrumb-item active">Cart</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mt-3">
                            <div className="cart-item-box-wrapper px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                                {
                                    cartItems?.length > 0 ? (

                                        cartItems.map((item, i) => (
                                            <div className="cart-box" key={i}>
                                                <div className="product">
                                                    <div className="media">
                                                        <img className="me-4 lazy-load" src={item.coverImage} alt="img" />
                                                        <div className="media-body">
                                                            <h4>{item.bookTitle}</h4>
                                                            <p>{item.categories?.map((cat)=>(
                                                                cat +" "
                                                            ))}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="price"> <TbCurrencyTaka />{item.price} * {item.cartQuantity}</div>
                                                <div className="cart__quantity__area">
                                                    <button className='btn_min' onClick={() => dispatch(dereaseCart(item))}><AiOutlineMinus /></button>
                                                    <span className='quantity_value'>{item.cartQuantity}</span>
                                                    <button className='btn_plus' onClick={() => dispatch(addToCart(item))}><AiOutlinePlus /></button>
                                                </div>
                                                <div className='remove_cart_btn'>
                                                    <Link href="#" className="close-item" onClick={() => dispatch(removeCartItem(item))}>
                                                        <i className="fas fa-trash"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))

                                    ) : (
                                        <h1 className='empty_cart'>Your Cart is empty!</h1>
                                    )
                                }

                                <div className="row mt-5">
                                    <div className='mb-4'>
                                        <Link to="/books" className="continue_btn">Continue Shopping</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mt-3">
                            <div className="checkout-box-wrapper">
                                <div className="checkout-box">
                                    <CartSummary />
                                    <div className="checkout-btn-area mt-5">
                                        {
                                            cartItems?.length > 0 ? (
                                                <Link to="/check-out" className="button checkout-btn">Proceed To Checkout</Link>
                                            ):(
                                                <button className="button checkout-btn" onClick={handleShop}>Proceed To Checkout</button>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
            <SubscriptionArea />
        </>
    );
};

export default ShoppingCart;