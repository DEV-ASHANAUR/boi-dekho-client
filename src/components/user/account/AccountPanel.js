import React from 'react';
import './account.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';
import { useSelector } from 'react-redux';

const AccountPanel = () => {
    const { currentUser } = useSelector(state => state.auth);

    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-9">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="acc__card__wrapper shadow-sm">
                                <div className="acc__title__wrapper">
                                    <h3>Personal profile</h3>
                                    <div className="action__button">
                                        <Link to="/user-profile">edit</Link>
                                    </div>
                                </div>
                                <div className="acc__info">
                                    <h4>{currentUser?.username}</h4>
                                    <p>{currentUser?.email}</p>
                                    <p>{currentUser?.contactNumber || ''}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="acc__card__wrapper shadow-sm">
                                <div className="acc__title__wrapper">
                                    <h3>Shipping Address</h3>
                                    <div className="action__button">
                                        <Link to="/user-address">edit</Link>
                                    </div>
                                </div>
                                <div className="acc__info ">
                                    <p className='text-capitalize'>Division: {currentUser?.division || ''}</p>
                                    <p className='text-capitalize'>District: {currentUser?.district || ''}</p>
                                    <p className='text-capitalize'>Upazila: {currentUser?.upazila || ''}</p>
                                    <p className='text-capitalize'>Pick point: {currentUser?.address || ''}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="acc__card__wrapper shadow-sm">
                                <div className="acc__title__wrapper">
                                    <h3>Personal profile</h3>
                                    <div className="action__button">
                                        <Link>edit</Link>
                                    </div>
                                </div>
                                <div className="acc__info">
                                    <h4>Md Ashanaur Rahman</h4>
                                    <p>example@gmail.com</p>
                                    <p>123 456-789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPanel