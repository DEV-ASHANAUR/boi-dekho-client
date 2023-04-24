import React from 'react'
import { FaAddressCard, FaPowerOff } from 'react-icons/fa'
import { AiFillGift } from 'react-icons/ai'
import { MdOutlineFavoriteBorder, MdOutlineDashboardCustomize } from 'react-icons/md'
import damiProfile from '../../../images/avatar/avater1.png';
import { Link, NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className="col-lg-3 col-md-3">
            <div className="profile__wrapper shadow-sm">
                <div className="profile__image">
                    <img src={damiProfile} alt="" />
                </div>
                <div className="profile__name">
                    <p>Hello,</p>
                    <h4>Jone Doe</h4>
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
                        <Link>Manage Account</Link>
                        <Link>Profile Information</Link>
                        <Link>Manage Address</Link>
                        <Link>Change Password</Link>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <AiFillGift />
                    </div>
                    <div className="side__menu">
                        <Link>My Order History</Link>
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
                        <Link>My Wishlist</Link>
                    </div>
                </div>
                <hr />
                <div className="account__wrapper">
                    <div className="side__icon">
                        <FaPowerOff />
                    </div>
                    <div className="side__menu">
                        <Link>Logout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar