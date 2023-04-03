import React, { useState } from 'react';
import reviewimg from "../../../images/avatar/1 (1).png";
import "./Review.css";
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
const Review = () => {
    const [value, setValue] = useState(0);
    const [text, setText] = useState("");
    const isLoggedIn = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(text);
    }


    return (
        <div className="container">
            <div className='item-review-area mt-5'>
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="review-tab-element bg-white box-shadow py-4 px-md-4 py-md-3">
                            <div className="box-area">
                                <h3>Customar Reviews</h3>
                                <div className='overflow-review'>

                                    <div className="review-box mt-5">
                                        <div className="inner">
                                            <div className="media d-flex align-items-center">
                                                <img className="me-4" src={reviewimg} alt="img" />
                                                <div className="media-body">
                                                    <h3>Tom Henry</h3>
                                                    <p>December 28, 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <Rating
                                            name="simple-controlled"
                                            value={4.5}
                                            precision={0.5}
                                            readOnly

                                        />
                                        <br />
                                        <span>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</span>
                                    </div>

                                    <div className="review-box mt-5">
                                        <div className="inner">
                                            <div className="media d-flex align-items-center">
                                                <img className="me-4" src={reviewimg} alt="img" />
                                                <div className="media-body">
                                                    <h3>Tom Henry</h3>
                                                    <p>December 28, 2020</p>
                                                </div>
                                            </div>
                                        </div>
                                        <span>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</span>
                                    </div>

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
                                                            <button className="button" type="submit">Post Review
                                                            </button>
                                                        ) : (
                                                            <button className="button" type="submit" disabled>You have to login!
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