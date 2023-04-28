import React, { useState } from 'react';
import './account.css'
import axios from 'axios';
import { FaHome } from 'react-icons/fa'
import { AiFillCamera } from 'react-icons/ai'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';
import damiProfile from '../../../images/avatar/avater1.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvater, updateUserInfo } from '../../../features/Auth/AuthSlice';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import tokenaAxiosInstance from '../../../utils/tokenAxios';

const Profile = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { register, watch, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            username: currentUser?.username,
            contactNumber: currentUser?.contactNumber || '',
        }
    });

    const dispatch = useDispatch();
    //onImageChange
    const onImageChange = async (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            if (img) {
                const data = new FormData();
                data.append("file", img);
                data.append("upload_preset", "waeorw8w");
                try {
                    const res = await axios.post("https://api.cloudinary.com/v1_1/dmgagw7ec/image/upload", data);
                    const imageUrl = res.data.url;
                    const imgdata = { avater: res.data.url };
                    try {
                        const response = await tokenaAxiosInstance.put(`/user/${currentUser._id}`, imgdata);
                        
                        dispatch(updateAvater(imageUrl));
                        toast.success("Profile updated!")
                    } catch (error) {
                        toast.error("someting went worng!");
                        console.log(" server image error", error);
                    }
                } catch (error) {
                    console.log(error);
                    toast.error("someting went worng!");
                }
            }
        }

    }
    //handle update profile data
    const handleProfielUpdate = async (data) => {
        console.log("data", data);
        // const { username, contactNumber } = data;
        try {
            const response = await tokenaAxiosInstance.put(`/user/${currentUser._id}`, data);
            console.log("response", response.data);
            if(response.data){
                dispatch(updateUserInfo(data));
                toast.success("Info updated!");
            }else{
                toast.error("someting went worng!");
            }
        } catch (error) {
            console.log(error);
            toast.error("someting went worng!");
        }

    }

    const phoneNumberRegex = /^\d{11}$/; // Regular expression to match a 10-digit phone number

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
                                    <img src={currentUser.avater ? currentUser.avater : damiProfile} alt="profile" />
                                    <label htmlFor="profileImg" className='imgLabel'><AiFillCamera /></label>
                                </div>
                                <input type="file" name='profileImage' id="profileImg" onChange={onImageChange} />
                                <form onSubmit={handleSubmit(handleProfielUpdate)}>
                                    <div class="row mt-5">
                                        <div class="col-md-6">
                                            <label htmlFor="">Username</label>
                                            <input type="text" className='form-control mt-2' name='username' placeholder='Enter Name' {...register("username", {
                                                required: "Name is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.username && <span className='error_message' role="alert">{errors.username?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Email</label>
                                            <input type="email" class="form-control mt-2" value={currentUser?.email} placeholder="Email" readOnly />
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col">
                                            <label htmlFor="">Contact Number</label>
                                            <input type="text" className='form-control mt-2' name='username' placeholder='Enter contact number' {...register("contactNumber", { required: true, pattern: phoneNumberRegex })} />
                                            {errors.contactNumber && <span className='error_message' role="alert">Enter a valid 11-digit phone number.</span>}
                                        </div>
                                    </div>
                                    <button type="submit" className='btn btn-flat btn-primary d-block mt-5 w-25 m-auto mb-3'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default Profile