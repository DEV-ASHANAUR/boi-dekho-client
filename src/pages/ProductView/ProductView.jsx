import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import ReletedProduct from "./reletedProduct";
import moment from "moment/moment";
import "./productView.css";
import Review from "../../components/ProductView/Review/Review";
const ProductView = () => {
    const [quantity, setQuantity] = useState(1);
    const { bookId } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/api/v1/boikini/book/${bookId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setBook(data);
            });
    }, [bookId]);
    return (
        <>
            {/* <TopHeader />
            <Header /> */}
            <div className="item-view-area pt-5">
                <div className="container">
                    <div className="py-4 px-md-4 py-md-3 bg-white box-shadow">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-5 col-12 mt-5">
                                <div className="item">
                                    <div className="item-img">
                                        <Link>
                                            <img className="img-fluid" src={book.coverImage} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-7 col-12 mt-5">
                                <div className="product-deatils-wrapper">
                                    <Link className="back" to="/books">
                                        <i className="fas fa-arrow-left"></i>
                                        <span>Back To Product</span>
                                    </Link>
                                    <div className="name-area">
                                        <h2>Anti-septic Dry Hand Gel</h2>

                                        <div className="rating-area d-flex align-items-center">
                                            <div className="rating-icon">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="mb-0">4.4(328 reviews)</p>
                                        </div>
                                    </div>


                                    <div className="categories-area d-flex">
                                        <h5>Categories :</h5>
                                        {
                                            book.categories?.map((cat, i) => (
                                                <>
                                                    <Link to="" key={i}>{cat}</Link>
                                                </>
                                            ))
                                        }
                                    </div>

                                    <div className="product-details">
                                        <div className="d-flex align-items-center">
                                            <h6>Author/Translator : </h6>
                                            {
                                                book.authors?.map((author, i) => (
                                                    <>
                                                        <Link to="" key={i}>{author}</Link>
                                                    </>
                                                ))
                                            }
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Publisher : </h6>
                                            <Link className="link">{book.publisher}</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Version : </h6>
                                            <Link>{book.version}th published {moment(book.publishDate).format("MMM Do YYYY")}</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Cover : </h6>
                                            <Link>{book.coverType}</Link>
                                        </div>
                                    </div>



                                    <div className="price-area">
                                        <h5>Product Price</h5>
                                        <p>${book.price}</p>
                                    </div>
                                    <div className="quantity-area">
                                        <h5>Select Quantity</h5>
                                        <div className="select-quantity">
                                            <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
                                            <span className="number-area">{quantity}</span>
                                            <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                        </div>
                                    </div>
                                    <div className="cart-area-wrapper d-md-flex">
                                        <div className="shortPdf button d-flex mt-3">
                                            <p>Read Short-Pdf</p>
                                            <div className="shortPdf-icon">
                                                <div className="b-tn">
                                                    <i className="far fa-file"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to="#" className="add-cart button mt-3">
                                            Add To Cart
                                            <i className="fas fa-cart-arrow-down"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Review />
            <ReletedProduct />
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default ProductView;
