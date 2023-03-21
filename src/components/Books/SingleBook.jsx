import React from 'react';
import { Link } from 'react-router-dom';

const SingleBook = ({ book }) => {
    const { _id, coverImage, bookTitle, author, discount, price } = book;
    const newPrice = price-price*(discount/100);
    return (
        <div className="col-xl-3 col-md-4 col-sm-6 col-6">
            <div className="porduct-box position-relative">

                <div className="icons position-absolute">
                    <Link href="" className="text-decoration-none text-dark">
                        <i className="fas fa-heart"></i>
                    </Link>
                    <Link href="" className="text-decoration-none text-dark">
                        <i className="fas fa-eye"></i>
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
                    <button className="btn btn-custom rounded-pill">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;