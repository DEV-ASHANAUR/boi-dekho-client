import React from "react";
import { Link } from "react-router-dom";

import catimg from "../../images/iwvoEIDLV6KFpO1bbyXYrAzEVERJvnH6I6pnSJiE.jpg";
import banner1 from "../../images/banner/CoverPage.jpg";
import banner2 from "../../images/banner/banner-1.webp";
import "./Banner.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
    return (
        <div className="home-banner-area pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 d-lg-block d-none">
                        <div className="bg-white rounded shadow-sm side-cat-list">
                            <div className="px-3 pt-3 bg-soft-primary all-category rounded-top text-left">
                                <div className="mb-3 border-bottom">
                                    <h3 className="h5 fw-700 mb-0">
                                        <span className="border-bottom border-primary pb-3 d-inline-block">
                                            All Categories
                                        </span>
                                    </h3>
                                </div>
                            </div>

                            <ul className="list-unstyled categories py-2 mb-0 text-left">
                                <li
                                    className="category-nav-element"
                                    data-id="112"
                                >
                                    <Link
                                        to=""
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Electronic Accessories
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className="category-nav-element"
                                    data-id="113"
                                >
                                    <Link
                                        href="https://www.oofymart.com/category/electronic-devices-bdcwi"
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Electronic Devices
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className="category-nav-element"
                                    data-id="111"
                                >
                                    <Link
                                        href="https://www.oofymart.com/category/home-appliances-4kvj1"
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Home Appliances
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className="category-nav-element"
                                    data-id="110"
                                >
                                    <Link
                                        href="https://www.oofymart.com/category/health--beauty-bipdp"
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Health &amp; Beauty
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className="category-nav-element"
                                    data-id="109"
                                >
                                    <Link
                                        href="https://www.oofymart.com/category/babies--toys-upvvx"
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Babies &amp; Toys
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    className="category-nav-element"
                                    data-id="109"
                                >
                                    <Link
                                        href="https://www.oofymart.com/category/babies--toys-upvvx"
                                        className="text-truncate text-reset py-2 px-3 d-block"
                                    >
                                        <img
                                            className="cat-image me-2 opacity-60"
                                            src={catimg}
                                            width="16"
                                            alt=""
                                        />
                                        <span className="cat-name">
                                            Groceries &amp; Pets
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="banner-container shadow-sm">
                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                pagination={{
                                    clickable: true,
                                }}
                                effect={"fade"}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                navigation={{
                                    prevEl: ".button-prev-slide",
                                    nextEl: ".button-next-slide",
                                }}
                                modules={[
                                    EffectFade,
                                    Autoplay,
                                    Pagination,
                                    Navigation,
                                ]}
                                data-swiper-autoplay={1000}
                                className="mySwiper position-relative"
                            >
                                <SwiperSlide>
                                    <img src={banner1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={banner2} alt="" />
                                </SwiperSlide>
                                <div className="button-prev-slide">
                                    <i className="fas fa-arrow-left"></i>
                                </div>
                                <div className="button-next-slide">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
