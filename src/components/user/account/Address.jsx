import React from 'react';
import './account.css'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';
import damiProfile from '../../../images/avatar/avater1.png';

const Address = () => {
    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-9">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address__wrapper shadow-sm">
                                <h4>Manage Address</h4>
                                <form action="">
                                    <div class="row mt-5">
                                        <div class="col-md-6">
                                            <label htmlFor="">Division</label>
                                            <input type="text" class="form-control mt-2" placeholder="Division" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">District</label>
                                            <input type="email" class="form-control mt-2" placeholder="District" />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Upazila</label>
                                            <input type="text" class="form-control mt-2" placeholder="Upazila Number" />
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Address</label>
                                            <input type="email" class="form-control mt-2" placeholder="Full Address" />
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

export default Address