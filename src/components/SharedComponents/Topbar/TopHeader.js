import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faFacebook,
//     faTwitter,
//     faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
import "./TopHeader.css";
import { Link } from "react-router-dom";
const TopHeader = () => {
    return (
        <div className="border-bottom bg-white">
            <div
                className="container topheader text-center"
                style={{ width: "100%" }}
            >
                <div className="topleft col-md-3">
                    <span className="phone">
                        <i
                            className="fas fa-phone rotate"
                            style={{ marginRight: "8px" }}
                        ></i>
                        Help line +8801770000000
                    </span>
                </div>

                <div className="search-box d-lg-block d-none col-md-6">
                    <form action="">
                        <div className="d-flex position-relative align-items-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="search-input form-control"
                                    id="search"
                                    name="keyword"
                                    placeholder="I am shopping for..."
                                    autoComplete="off"
                                />
                                <div className="input-group-append d-none d-lg-block">
                                    <button className="btn" type="submit">
                                        <i className="fab fa-searchengin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="topright col-md-3">
                    {/* <Link to="/">
                        <FontAwesomeIcon
                            style={{ fontSize: "18px" }}
                            icon={faFacebook}
                        ></FontAwesomeIcon>
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon
                            style={{ fontSize: "18px" }}
                            icon={faTwitter}
                        ></FontAwesomeIcon>
                    </Link>
                    <Link to="/">
                        <FontAwesomeIcon
                            style={{ fontSize: "18px" }}
                            icon={faInstagram}
                        ></FontAwesomeIcon>
                    </Link> */}
                    <Link
                        className="login"
                        style={{
                            paddingRight: "0px",
                        }}
                        to="/login"
                    >
                        <i
                            className="fas fa-user"
                            style={{
                                fontSize: "22px",
                            }}
                        ></i>
                        <span className="nav-box-text d-none d-xl-block opacity-100">
                            Login
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
