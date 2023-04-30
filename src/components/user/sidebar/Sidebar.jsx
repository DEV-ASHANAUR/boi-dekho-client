import React from 'react'
import { FaAddressCard, FaPowerOff } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { MdOutlineFavoriteBorder, MdOutlineDashboardCustomize } from 'react-icons/md'
import damiProfile from '../../../images/avatar/avater1.png';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.config';
import { userLoggedOut } from '../../../features/Auth/AuthSlice';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
const Sidebar = () => {
    const [user] = useAuthState(auth);
    const {currentUser} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const handleLogOut = () => {
        // console.log("hello");
        signOut(auth);
        dispatch(userLoggedOut());
    };
    return (
        <div className="col-lg-3 col-md-12 mb-3">
            <div className="profile__wrapper shadow-sm">
                <div className="profile__image">
                    <img src={currentUser.avater ? currentUser.avater : damiProfile} alt="" />
                </div>
                <div className="profile__name">
                    <p>Hello,</p>
                    <h4 className='text-capitalize'>{currentUser.username}</h4>
                </div>
            </div>
            <div className="sidebar__wrapper shadow-sm mt-4">
                <div className="account__wrapper">
                    <div className="side__icon">
                        <MdOutlineDashboardCustomize />
                    </div>
                    <div className="side__menu">
                        <NavLink to="/user-dashboard" className={({ isActive }) => isActive ? "active" : ""
                        }>Dashboard</NavLink>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <FaAddressCard />
                    </div>
                    <div className="side__menu">
                        <NavLink to="/manage-account" className={({ isActive }) => isActive ? "active" : ""
                        }>Manage Account</NavLink>
                        <NavLink to="/user-profile" className={({ isActive }) => isActive ? "active" : ""
                        }>Profile Information</NavLink>
                        <NavLink to="/user-address" className={({ isActive }) => isActive ? "active" : ""
                        }>Manage Address</NavLink>
                        <NavLink to="/user-change-password" className={({ isActive }) => isActive ? "active" : ""
                        }>Change Password</NavLink>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <AiFillGift />
                    </div>
                    <div className="side__menu">
                        <NavLink to="/user-order-history" className={({ isActive }) => isActive ? "active" : ""
                        }>My Order History</NavLink>
                        <Link>My Returns</Link>
                        <Link>My Cancellations</Link>
                        <Link>My Reviews</Link>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <MdOutlineFavoriteBorder />
                    </div>
                    <div className="side__menu">
                        <NavLink to="/wishlist" className={({ isActive }) => isActive ? "active" : ""
                        }>My Wishlist</NavLink>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <FaPowerOff />
                    </div>
                    <div className="side__menu">
                        <Link onClick={handleLogOut}>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar