import React, { useState } from "react";
import "./TopHeader.css";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../../features/Filter/filterSlice";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { userLoggedOut } from "../../../features/Auth/AuthSlice";
const TopHeader = () => {
    const [user] = useAuthState(auth);

    // console.log("user",user);

    const { search } = useSelector((state) => state.filter)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [input, setInput] = useState(search);
    const match = useMatch('/books');

    //handleSearch
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(searched(input));
        if (!match) {
            navigate("/books");
        }
    }


    const handleLogOut = () => {
        signOut(auth);
        dispatch(userLoggedOut());
    };
    const myAccount = () => {
        // <Link></Link>
        // navigate("/books");
        console.log("hello");
    }
    // const navigteLogIn = () => {
    //     navigate("/login");
    // };
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
                    <form onSubmit={handleSearch}>
                        <div className="d-flex position-relative align-items-center">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="search-input form-control"
                                    id="search"
                                    name="search"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
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
                    {user ? (
                        <Link
                            className="login"
                            style={{
                                paddingRight: "0px",
                            }}
                            to="/user-dashboard"
                        >
                            <i
                                className="fas fa-user"
                                style={{
                                    fontSize: "22px",
                                }}
                            ></i>
                            <span className="nav-box-text-logout d-none d-xl-block opacity-100">
                                Account
                            </span>
                        </Link>
                    ) : (
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
                    )}
                    {/* <Link
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
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
