// import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useNavigate } from "react-router-dom";
// import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import logo from "../../../images/banner/BoiDekho-PNG.png";
import "./Header.css";

const Header = () => {
    // const navigate = useNavigate();
    // const [user] = useAuthState(auth);

    // const handleLogOut = () => {
    //     signOut(auth);
    // };
    // const navigteLogIn = () => {
    //     navigate("/login");
    // };

    return (
        <Navbar
            className="border-bottom bg-white"
            collapseOnSelect
            expand="lg"
            sticky="top"
        >
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} width="120" alt="Organic" />
                </Navbar.Brand>
                <div className="search-box d-lg-none d-sm-block d-none col-md-6 col-sm-8">
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
                                <div className="input-group-append d-block d-lg-none">
                                    <button className="btn" type="submit">
                                        <i className="fab fa-searchengin"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <CustomLink className="nav-link" to="/">
                            Home
                        </CustomLink>
                        <CustomLink className="nav-link" to="/books">
                            Books
                        </CustomLink>
                        <CustomLink className="nav-link" to="/book">
                            Book
                        </CustomLink>
                        <CustomLink className="nav-link" to="/pre-order">
                            Pre-Order
                        </CustomLink>
                        {/* <CustomLink className="nav-link" to="/blog">
                            Blog
                        </CustomLink> */}

                        <CustomLink className="nav-link" to="/contact-us">
                            Contact-us
                        </CustomLink>
                    </Nav>
                    <Nav>
                        <CustomLink className="nav-link wishlist" to="/">
                            <span className="num-area">3</span>
                            <i
                                className="far fa-heart"
                                style={{
                                    fontSize: "22px",
                                }}
                            ></i>
                            <span className="nav-box-text d-none d-xl-block opacity-100">
                                Wishlist
                            </span>
                        </CustomLink>

                        <CustomLink
                            className="nav-link shoppingCart"
                            to="/shopping-cart"
                        >
                            <span className="num-area">3</span>
                            <i
                                className="fas fa-cart-arrow-down"
                                style={{
                                    fontSize: "22px",
                                }}
                            ></i>
                            <span className="nav-box-text d-none d-xl-block opacity-100">
                                Cart
                            </span>
                        </CustomLink>
                        <div className="search-box d-sm-none d-block col-10 mb-3">
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
                                        <div className="input-group-append">
                                            <button
                                                className="btn"
                                                type="submit"
                                            >
                                                <i className="fab fa-searchengin"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
