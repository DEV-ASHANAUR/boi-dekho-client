import React from 'react';
import './account.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';
import damiProfile from '../../../images/avatar/avater1.png';

const Profile = () => {
    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="profile__img__wrapper shadow-sm">
                                <div className="profile__img">
                                    <img src={damiProfile} alt="profile" />
                                    <label htmlFor="profileImg" className='imgLabel'><AiFillCamera /></label>
                                </div>
                                
                                <input type='file' id="profileImg" />
                                <form action="">
                                    <div class="row mt-5">
                                        <div class="col-md-6">
                                            <label htmlFor="">Full Name</label>
                                            <input type="text" class="form-control mt-2" placeholder="Full Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Email</label>
                                            <input type="email" class="form-control mt-2" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <label htmlFor="">Contact Number</label>
                                            <input type="text" class="form-control mt-2" placeholder="Contact Number" />
                                        </div>
                                    </div>
                                    <button type="submit" className='btn btn-flat btn-primary d-block mt-5 w-25 m-auto mb-3'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile