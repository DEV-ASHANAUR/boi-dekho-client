import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import moment from "moment/moment";
import "./productView.css";
import Review from "../../components/ProductView/Review/Review";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from "react-redux";
import { fetchBook } from "../../features/book/bookSlice";
import Loading from "../../components/SharedComponents/Loading/Loading";
import { Rating } from "@mui/material";
import { addToCartView } from "../../features/Cart/CartSlice";
import ReletedProduct from "./ReletedProduct";

const ProductView = () => {
    const [cartQuantity, setCartQuantity] = useState(1);
    const { book, isLoading } = useSelector(state => state.book);
    const { avgRating, totalRating } = useSelector(state => state.review);
    const { bookId } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBook(bookId))
    }, [dispatch, bookId])

    if (isLoading) {
        return <Loading />
    }

    const handleAddToCard = (e) => {
        e.preventDefault();
        let data = { ...book, cartQuantity }
        dispatch(addToCartView(data));
    }

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
                                        <h2>{book.bookTitle}</h2>
                                        <div className="rating-area d-flex align-items-center">
                                            <Rating
                                                name="simple-controlled"
                                                value={avgRating}
                                                precision={0.1}
                                                readOnly
                                            />
                                            <p className="mb-0">{avgRating}({totalRating} reviews)</p>
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
                                            <button onClick={() => setCartQuantity(prev => prev === 1 ? 1 : prev - 1)}>
                                                <AiOutlineMinus />
                                            </button>
                                            <span className="number-area">{cartQuantity}</span>
                                            <button onClick={() => setCartQuantity(prev => prev + 1)}>
                                                <AiOutlinePlus />
                                            </button>
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
                                        <Link to="#" onClick={handleAddToCard} className="add-cart button mt-3">
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

            <Review bookId={bookId} />
            <ReletedProduct bookId={bookId} categories={book.categories} />
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default ProductView;
