import React from "react";
import Banner from "../../components/Banner/Banner";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Navbar/Header";
import NewProduct from "../../components/NewProduct/newProduct";
import TopHeader from "../../components/Topbar/TopHeader";
import Feature from "../../components/Feature/feature";
import BestOfferProduct from "../../components/BestOfferProduct/bestOfferProduct";
import SubscriptionArea from "../../components/SubscriptionArea/subscriptionArea";

const Home = () => {
    return (
        <>
            <TopHeader />
            <Header />
            <Banner />
            <FeaturedProduct />
            <NewProduct />
            <Feature />
            <BestOfferProduct />
            <SubscriptionArea />
            <Footer />
        </>
    );
};

export default Home;
