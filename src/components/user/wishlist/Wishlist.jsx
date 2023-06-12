import React, { useEffect } from 'react';
import './wishlist.css';
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';

import { useDispatch, useSelector } from 'react-redux';
import { fetchhWishlist, removeWishlist, resetMessage } from '../../../features/wishlist/wishlistSlice';
import Loading from '../../SharedComponents/Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';
import { addToCart } from '../../../features/Cart/CartSlice';
import { TbCurrencyTaka } from 'react-icons/tb';


const Wishlist = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { listItem, isLoading, isError,success } = useSelector(state => state.wishlist);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchhWishlist(currentUser._id));
    }, [dispatch, currentUser._id,removeWishlist]);
    //handleRemove
    const handleRemove = (productId) => {
        let userId = currentUser._id;
        dispatch(removeWishlist({productId,userId}));
    }

    if(!isLoading && success){
        toast.success("Book remove to the Wishlist!");
        dispatch(fetchhWishlist(currentUser._id));
        dispatch(resetMessage());
    }

    //handleAddToCart
    const handleAddToCart = (book) => {
        dispatch(addToCart(book));
    }

    //decide what to render
    let content = null;

    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <p className="bg-info text-white text-center p-2 d-block mt-5">Something Went Wrong!</p>
    }
    if (!isLoading && !isError && listItem[0]?.bookId?.length === 0) {
        content = <p className="bg-info text-white text-center p-2 d-block mt-5">Your wishlist is empty!</p>
    }
    if (!isLoading && !isError && listItem[0]?.bookId?.length > 0) {
        content = listItem[0].bookId.map((book, i) => (
            <div className="wishlist__wrapper" key={i}>
                <div className='wish__left__side'>
                    <div className="wishlist__image">
                        <img src={book.coverImage} alt="cover image" />
                    </div>
                    <div className="wishlist__title">
                        <h2>{book.bookTitle}</h2>
                        <p>Availability: <span className='text-success'>In Stock</span></p>
                    </div>
                </div>
                <div className='wishlist__price'>
                    <p><TbCurrencyTaka />{book.price}</p>
                </div>
                <button className='wish__add__to__cart' onClick={()=>handleAddToCart(book)}>add to cart</button>
                <button onClick={()=>handleRemove(book._id)} className='wish__remove'><i className="fas fa-trash"></i></button>
            </div>
        ))
    }
    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address__wrapper shadow-sm">
                                {
                                    content
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Wishlist