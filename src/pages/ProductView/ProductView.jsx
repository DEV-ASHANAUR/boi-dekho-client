import React from "react";
import { Link } from "react-router-dom";
// import Footer from "../SharedComponents/Footer/Footer";
// import Header from "../SharedComponents/Navbar/Header";
// import TopHeader from "../SharedComponents/Topbar/TopHeader";
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import ReletedProduct from "./reletedProduct";
import pimg1 from "../../images/product/mahfil-192x254.jpg";
import "./productView.css";
const ProductView = () => {
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
                                            <img className="img-fluid" src={pimg1} alt="img" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-7 col-12 mt-5">
                                <div className="product-deatils-wrapper">
                                    <Link className="back" to="">
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
                                        <Link>Assisories</Link>
                                    </div>

                                    <div className="product-details">
                                        <div className="d-flex align-items-center">
                                            <h6>Author : </h6>
                                            <Link className="link">Moniruzzaman</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Publisher : </h6>
                                            <Link className="link">Lecture</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Version : </h6>
                                            <Link>1st published 2023</Link>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <h6>Cover : </h6>
                                            <Link>Hard Cover</Link>
                                        </div>
                                    </div>



                                    <div className="price-area">
                                        <h5>Product Price</h5>
                                        <p>$12.00</p>
                                    </div>
                                    <div className="size-area">
                                        <div>
                                            <h5>Select Quantity</h5>
                                            <div className="number-area">
                                                <input className="form-control quantity" type="number" min="0" value="1" />
                                            </div>
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


                            {/* <div className="col-lg-3 d-lg-block d-none">
                            <div className="bg-white rounded shadow-sm mb-3">
                                <div className="p-3 border-bottom fs-16 fw-600">
                                    Top Selling Products
                                </div>
                                <div className="p-3">
                                    <ul className="list-group list-group-flush">
                                        <li className="py-3 px-0 list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <Link to="">
                                                        <img className="img-fluid" src={pimg1} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="col-8">
                                                    <h5 className="product-name">
                                                        <Link to="">Mahfil theke Mahfile</Link>
                                                    </h5>
                                                    <div className="product-author">
                                                        <Link to="">লাইফ উইথ আল্লাহ টিম</Link>
                                                    </div>
                                                    <div className="mt-2">
                                                        <span className="fw-700">৳120.00</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end item view area -->
            <!-- start item discription area --> */}
            {/* <div className="item-discription-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mt-5">
                            <div className="discription-tab-link">
                                <div className="nav flex-column nav-pills" id="v-pills-tab">
                                    <Link className="nav-link active" id="v-pills-home-tab" data-toggle="pill" to="#v-pills-dis">Description</Link>
                                    <Link className="nav-link" id="v-pills-profile-tab" data-toggle="pill" to="#v-pills-review">Reviews</Link>
                                    <Link className="nav-link" id="v-pills-messages-tab" data-toggle="pill" to="#v-pills-info">Product Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 mt-5">
                            <div className="discription-tab-element">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-dis">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="box-area">
                                                    <h3>Anti-septic Dry Hand Gel</h3>
                                                    <p className="mt-5">Hills Science Plan Healthy Development Puppy Food Large Breed with Chicken is specifically formulated to meet the nutritional
                                                        needs of your large breed puppy to help support its growth and development.
                                                    </p>
                                                    <p className="mt-5">Made from high quality ingredients including a minimum of 34% chicken, Hills Science Plan Canine Puppy Large Breed is infused with:</p>
                                                    <p className="mt-5"> Controlled Fat and Calories – to help large breed puppies grow at the proper rate;</p>
                                                    <p className="mt-3">Controlled Calcium – for healthy joint and bone development;</p>
                                                    <p className="mt-3">High Quality Protein – to support healthy growth and strong muscles;</p>
                                                    <p className="mt-3">Minerals – provides the optimum amount for growth and development;</p>
                                                    <p className="mt-5">The crunchy kibble will help aid your puppys dental health through the natural crunching process, promoting dental care from a young age</p>
                                                    <p className="mt-5">Suitable for puppies from weaning up to 1 year old whose adult body weight will exceed 25kg.</p>
                                                    <p className="mt-5">Hills Science Plan Canine Puppy Large Breed is part of the Pets at Home Nutrition Centre.</p>
                                                    <p className="mt-5"> Approximate Dimensions (Product): 42 x 15 x 20cm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-review">
                                        <div className="row">
                                            <div className="box-area">
                                                <h3>Customar Reviews</h3>
                                                <div className="review-box mt-5">
                                                    <div className="inner">
                                                        <div className="media align-items-center">
                                                            <img className="mr-4 lazy-load" src="img/client.jpg" alt="img" />
                                                            <div className="media-body">
                                                                <h3>Tom Henry</h3>
                                                                <p>December 28, 2020</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy. </span>
                                                </div>
                                                <div className="review-box mt-5">
                                                    <div className="inner">
                                                        <div className="media align-items-center">
                                                            <img className="mr-4 lazy-load" src="img/client.jpg" alt="img" />
                                                            <div className="media-body">
                                                                <h3>Tom Henry</h3>
                                                                <p>December 28, 2020</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence. </span>
                                                </div>
                                                <div className="review-box mt-5">
                                                    <div className="inner">
                                                        <div className="media align-items-center">
                                                            <img className="mr-4 lazy-load" src="img/client.jpg" alt="img" />
                                                            <div className="media-body">
                                                                <h3>Tom Henry</h3>
                                                                <p>December 28, 2020</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </span>
                                                </div>
                                                <div className="add-reviw-area mt-5 contact-area">
                                                    <Link className="btn-write" data-toggle="collapse" to="#collapsewrite">
                                                        <i className="fal fa-edit"></i>
                                                        <span>Write a review</span>
                                                    </Link>
                                                    <div className="collapse" id="collapsewrite">
                                                        <div className="my-rating d-flex mt_20">
                                                            <h4>Your rating</h4>
                                                            <div className="my-rating-wrapper">
                                                                <div className="star-rating">
                                                                    <input type="radio" id="5-stars" name="rating" value="5" />
                                                                    <label for="5-stars" className="star">&#9733;</label>
                                                                    <input type="radio" id="4-stars" name="rating" value="4" />
                                                                    <label for="4-stars" className="star">&#9733;</label>
                                                                    <input type="radio" id="3-stars" name="rating" value="3" />
                                                                    <label for="3-stars" className="star">&#9733;</label>
                                                                    <input type="radio" id="2-stars" name="rating" value="2" />
                                                                    <label for="2-stars" className="star">&#9733;</label>
                                                                    <input type="radio" id="1-star" name="rating" value="1" />
                                                                    <label for="1-star" className="star">&#9733;</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <form className="needs-validation" novalidate="">
                                                            <div className="row">
                                                                <div className="col-md-6 mt-5">
                                                                    <div className="review_input_group">
                                                                        <input className="form-control" type="text" placeholder="Your name" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 mt-5">
                                                                    <div className="review_input_group">
                                                                        <input className="form-control" type="email" placeholder="Your email" required="" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="review_input_group">
                                                                        <textarea className="form-control" placeholder="Message" required=""></textarea>
                                                                    </div>
                                                                </div>
                                                                <div className="btn-area">
                                                                    <button type="submit" className="button">Submit</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-info">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="box-area">
                                                    <h3>Product Details :</h3>
                                                    <div className="deatils-wrapper mt-5">
                                                        <div className="deatils">
                                                            <p>Brand :</p>
                                                            <span>Cheetos</span>
                                                        </div>
                                                        <div className="deatils">
                                                            <p>Publisher :</p>
                                                            <span>pearson education(mar.1st,2012)</span>
                                                        </div>
                                                        <div className="deatils">
                                                            <p>Language :</p>
                                                            <span>English</span>
                                                        </div>
                                                        <div className="deatils">
                                                            <p>Dimensions :</p>
                                                            <span>8.40* 10.70*0.90 inches</span>
                                                        </div>
                                                        <div className="deatils">
                                                            <p>ISBN-13 :</p>
                                                            <span>9780321793911</span>
                                                        </div>
                                                        <div className="deatils">
                                                            <p>Categories :</p>
                                                            <span>Assisories, Medical</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}


            <ReletedProduct />
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default ProductView;
