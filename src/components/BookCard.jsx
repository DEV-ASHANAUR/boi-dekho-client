import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
    const navigate = useNavigate();
    const { _id, coverImage, bookTitle, author, discount, price } = book;
    const newPrice = price-price*(discount/100);
    const handleViewProduct = (id) => {
        navigate(`/book/${id}`);
    }
    return (
        <div className="col-xl-2 col-md-3 col-sm-4 col-6">
            <div className="porduct-inner-box position-relative">
                <div className="icons position-absolute">
                    <Link
                        href=""
                        className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-heart"></i>
                    </Link>
                    <Link
                        href=""
                        className="text-decoration-none text-dark"
                    >
                        <i className="fas fa-eye"></i>
                    </Link>
                    <Link
                        href=""
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
                    <button  onClick={() => handleViewProduct(_id)} className="btn btn-custom rounded-pill">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookCard;