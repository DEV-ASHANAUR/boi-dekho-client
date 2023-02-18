import React from 'react';
import { Link } from 'react-router-dom';

const SingleReletedProduct = ({ item }) => {
    const { img, title, author, orginalPrice, discount, offeredPrice } = item;
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className="porduct-inner-box position-relative">
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
                    <img src={img} alt="img1" className="img-fluid" />
                </div>

                <div className="product-info">
                    <div className="product-name">
                        <h3>
                            <Link to="">{title}</Link>

                        </h3>
                    </div>
                    <div className="product-author">
                        <Link to="">{author}</Link>
                    </div>
                    <div className="product-price"><del>$ {orginalPrice}</del> &nbsp;<span> $ {offeredPrice}</span>
                    </div>
                </div>
                <div className="cart-btn text-center mt-3">
                    <button className="btn btn-custom rounded-pill">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleReletedProduct;