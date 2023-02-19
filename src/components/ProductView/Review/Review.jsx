import React from 'react';
import reviewimg from "../../../images/avatar/1 (1).png";
import "./Review.css";
const Review = () => {
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
                                        <div class="my-rating d-flex align-items-center">
                                            <h4>Give A rating</h4>
                                            <div class="my-rating-wrapper">
                                                <div class="star-rating">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                </div>
                                            </div>
                                        </div>

                                        <form action="#" method="post">
                                            <div class="row">
                                                <div class="col-md-12 form-group my-3">
                                                    <textarea name="message" class="textBox form-control" placeholder="Write a review"></textarea>
                                                </div>
                                                <div class="col-12">
                                                    <button class="button" type="submit">Post Review
                                                    </button>
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