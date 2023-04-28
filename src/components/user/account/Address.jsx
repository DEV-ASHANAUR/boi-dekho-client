import React from 'react';
import './account.css'
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import axoisInstance from '../../../utils/axois';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { updateAddress } from '../../../features/Auth/AuthSlice';

const Address = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { register, watch, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            division: currentUser?.division || '',
            district: currentUser?.district || '',
            upazila: currentUser?.upazila || '',
            address: currentUser?.address || '',
        }
    });
    const dispatch = useDispatch();
    //handleAddressUpdate
    const handleAddressUpdate = async (data) => {
        // console.log("data", data);
        try {
            const response = await axoisInstance.put(`/user/${currentUser._id}`, data);
            console.log("response", response.data);
            if(response.data){
                dispatch(updateAddress(data));
                toast.success("Address updated!");
            }else{
                toast.error("someting went worng!");
            }
        } catch (error) {
            console.log(error);
            toast.error("someting went worng!");
        }

    }
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
                                <form onSubmit={handleSubmit(handleAddressUpdate)}>
                                    <div class="row mt-5">
                                        <div class="col-md-6">
                                            <label htmlFor="">Division</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='division' placeholder='Enter division' {...register("division", {
                                                required: "Division is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.division && <span className='error_message' role="alert">{errors.division?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">District</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='district' placeholder='Enter district' {...register("district", {
                                                required: "District is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.district && <span className='error_message' role="alert">{errors.district?.message}</span>}
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-md-6">
                                            <label htmlFor="">Upazila</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='upazila' placeholder='Enter district' {...register("upazila", {
                                                required: "Upazila is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 3!"
                                                }
                                            })} />
                                            {errors.upazila && <span className='error_message' role="alert">{errors.upazila?.message}</span>}
                                        </div>
                                        <div class="col-md-6">
                                            <label htmlFor="">Address</label>
                                            <input type="text" className='form-control mt-2 text-capitalize' name='address' placeholder='Enter Specific address' {...register("address", {
                                                required: "Address is required!",
                                                minLength: {
                                                    value: 3,
                                                    message: "Min length is 5!"
                                                }
                                            })} />
                                            {errors.address && <span className='error_message' role="alert">{errors.address?.message}</span>}
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

export default Address