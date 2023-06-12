import React, { useEffect, useState } from 'react';
import reviewimg from "../../../images/avatar/1 (1).png";
import "./Review.css";
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReview, saveReview, clearSuccessMessage } from '../../../features/review/reviewSlice';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Review = ({ bookId }) => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState("");
    const { currentUser } = useSelector(state => state.auth);
    const { reviews, isCreateLoading, isSuccess, successMessage, isError, error } = useSelector(state => state.review);
    const isLoggedIn = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchReview(bookId))
    }, [dispatch, bookId])

    if (isSuccess && successMessage) {
        toast.success(successMessage);
        dispatch(clearSuccessMessage())
    }
    if (!isCreateLoading && isError) {
        toast.error(error);
        dispatch(clearSuccessMessage());
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            id: currentUser._id,
            username: currentUser.username,
            email: currentUser.email
        }

        const review = {
            user,
            bookId,
            reviewText: text,
            rating: value
        }
        dispatch(saveReview(review));
        setText("");
        setValue(0);
    }
    //handleGoTo
    const handleGoTo = () => {
        navigate("/login", { state: { from: {pathname:`/book/${bookId}`} } });
    }

    return (
        <div className="container">
            <Toaster />
            <div className='item-review-area mt-5'>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="review-tab-element bg-white box-shadow py-4 px-md-4 py-md-3">
                            <div className="box-area">
                                <h3>Customar Reviews</h3>
                                <div className='overflow-review'>
                                    {
                                        reviews?.length > 0 ? (
                                            reviews.map((item, i) => (

                                                <div className="review-box mt-5" key={i}>
                                                    <div className="inner">
                                                        <div className="media d-flex align-items-center">
                                                            <img className="me-4" src={item.user.id?.avater ? item.user.id?.avater : reviewimg} alt="img" />
                                                            <div className="media-body">
                                                                <h3>{item.user.username}</h3>
                                                                <p>December 28, 2020</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Rating
                                                        name="simple-controlled"
                                                        value={item.rating}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                    <br />
                                                    <span>{item.reviewText}</span>
                                                </div>
                                            ))
                                        ) : (
                                            <span className="bg-info text-white text-center p-2 d-block mt-5">No review found!</span>
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 mt-5">
                        <div className="review-tab-element py-4 px-md-4 py-md-3">
                            <div className="box-area">
                                <h3>Write A Reviews</h3>
                                <div>

                                    <div className="review-box mt-3">
                                        <div className="my-rating">
                                            <h4>Give A rating</h4>
                                            <Rating
                                                name="simple-controlled"
                                                value={value}
                                                precision={0.5}
                                                onChange={(event, newValue) => {
                                                    setValue(newValue);
                                                }}
                                            />
                                        </div>

                                        <form action="#" method="post" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-12 form-group my-3">
                                                    <textarea name="message" value={text} onChange={e => setText(e.target.value)} className="textBox form-control" placeholder="Write a review" required></textarea>
                                                </div>
                                                <div className="col-12">
                                                    {
                                                        isLoggedIn ? (
                                                            <button className="button" type="submit" disabled={isCreateLoading}>Post Review
                                                            </button>
                                                        ) : (
                                                            <button className="button" onClick={handleGoTo}>login
                                                            </button>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;