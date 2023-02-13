import React from "react";
import { Link } from "react-router-dom";


import TopHeader from "../SharedComponents/Topbar/TopHeader";
import Header from "../SharedComponents/Navbar/Header";
import SubscriptionArea from "../SharedComponents/SubscriptionArea/subscriptionArea";
import Footer from "../SharedComponents/Footer/Footer";


import Banner from "./Banner/Banner";
import Services from "./Services/services";
import BestOfferProduct from "./BestOfferProduct/bestOfferProduct";
import NewArrivalBooks from "./NewArrival/newArrival";
import BestSellingBooks from "./BestSelling/bestSelling";
import IslamicBooks from "./Islamic/islamic";
import FictionBooks from "./Fiction/fiction";
import NonFictionBooks from "./Non-Fiction/nonFiction";
import ChildishBooks from "./Childish/childish";


import fiction from "../../images/fiction.jpg";
import nonFiction from "../../images/non-fiction.jpg";
import islamic from "../../images/islamic.jpg";
import childish from "../../images/childish.jpg";




const Home = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Banner />
            <BestSellingBooks />
            <NewArrivalBooks />

            <section id="fetcher">
                <div class="container text-center">
                    <div className="px-2 py-4 bg-white box-shadow">
                        <div class="row m-0">
                            <div class="col-lg-3 col-sm-6 col-12 py-md-3">
                                <Link to="#">
                                    <figure className="snip1104 red">
                                        <img src={islamic} alt="" />
                                        <figcaption>
                                            <h2>Islamic  <span>Books</span></h2>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12 py-md-3">
                                <Link to="#">
                                    <figure className="snip1104 red">
                                        <img src={fiction} alt="" />
                                        <figcaption>
                                            <h2>Fiction  <span>Books</span></h2>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12 py-md-3">
                                <Link to="#">
                                    <figure className="snip1104 green">
                                        <img src={nonFiction} alt="" />
                                        <figcaption>
                                            <h2>Non-Fiction  <span>Books</span></h2>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                            <div class="col-lg-3 col-sm-6 col-12 py-md-3">
                                <Link to="#">
                                    <figure className="snip1104 blue">
                                        <img src={childish} alt="" />
                                        <figcaption>
                                            <h2>Childish  <span>Books</span></h2>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <IslamicBooks />
            <FictionBooks />
            <NonFictionBooks />
            <ChildishBooks />



            <Services />
            <BestOfferProduct />
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default Home;
