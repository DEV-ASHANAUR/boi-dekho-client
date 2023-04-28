import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToCart } from '../../features/Cart/CartSlice';
import toast, { Toaster } from 'react-hot-toast';
import { createhWishlist, resetMessage } from '../../features/wishlist/wishlistSlice';


const SingleBook = ({ book }) => {
    const { currentUser } = useSelector(state => state.auth);
    const { success,error,isError,isLoading } = useSelector(state => state.wishlist);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { _id, coverImage, bookTitle, author, discount, price } = book;
    const newPrice = price - price * (discount / 100);
    const handleViewProduct = (id) => {
        navigate(`/book/${id}`);
    }
    //handleAddToCart
    const handleAddToCart = (e) => {
        e.preventDefault();
        dispatch(addToCart(book));
    }
    //handleWishlist
    const handleWishlist = (productId) => {
        if(currentUser?._id){
            const data = {
                userId: currentUser._id,
                bookId: productId
            }
            dispatch(createhWishlist(data));
        }else{
            toast.error("Login Please!");
        }
    }

    if(!isLoading && success){
        toast.success("Book added to Wishlist!");
        dispatch(resetMessage());
    }
    if(!isLoading && isError){
        if(error == 'Request failed with status code 409'){
            toast.error("Already Exist!");
        }else{
            toast.error(error);
        }
        dispatch(resetMessage());
    }

    


    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-6">
            <div className="porduct-inner-box position-relative">
                <div className="icons position-absolute">
                    <Link
                        onClick={() => handleWishlist(_id)}
                        className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-heart"></i>
                    </Link>
                    <a
                        onClick={() => handleViewProduct(_id)}
                        className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-eye"></i>
                    </a>
                    <Link
                        onClick={handleAddToCart}
                        className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-cart-arrow-down"></i>
                    </Link>
                </div>

                <div className="onsale">
                    <span className="badge rounded-0">
                        <i className="fas fa-arrow-down"></i> {discount}%</span>
                </div>
                <div className="productImage">
                    <img src={coverImage} alt="img1" className="img-fluid" />
                </div>

                <div className="product-info">
                    <div className="product-name">
                        <h3>
                            <Link to="">{bookTitle}</Link>
                        </h3>
                    </div>
                    <div className="product-author">
                        <Link to="">{author}</Link>
                    </div>
                    <div className="product-price"><del>$ {price}</del> &nbsp;<span> $ {newPrice}</span>
                    </div>
                </div>
                <div className="cart-btn text-center mt-3">
                    <button onClick={() => handleViewProduct(_id)} className="btn btn-custom rounded-pill">
                        View Details
                    </button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SingleBook;