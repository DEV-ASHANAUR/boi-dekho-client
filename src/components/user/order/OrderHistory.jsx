import React, { useEffect } from 'react';
import './orderhistory.css';
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import Sidebar from '../sidebar/Sidebar';


import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from 'react-icons/tb';
import Loading from '../../SharedComponents/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../../features/order/OrderSlice';
import Moment from 'react-moment';
import numberWithCommas from '../../../utils/numberFormat';

const OrderHistory = () => {
    const { currentUser } = useSelector(state => state.auth);
    const { orders, isLoading, isError } = useSelector(state => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOrders(currentUser._id));
    }, [dispatch, currentUser._id]);

    //decide what to render
    let content = null;

    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = (<tr>
            <td colSpan={6} className="bg-info text-white text-center p-2 d-block mt-5">Something Went Wrong!</td>
        </tr>)
    }
    if (!isLoading && !isError && orders?.length === 0) {
        content = (<tr>
            <td colSpan={6} className="bg-info text-white text-center p-2 d-block mt-5">Your Order List is empty!</td>
        </tr>)
    }
    if (!isLoading && !isError && orders?.length > 0) {
        content = orders.map((order, i) => (
            <tr key={i}>
                <td>{order._id}</td>
                <td><Moment format="DD-MMM-YYYY">{order.createdAt}</Moment></td>
                <td>{order.paymentMethod}</td>
                <td><TbCurrencyTaka />{numberWithCommas(order.total)}</td>
                <td><span class="badge bg-success">{order.status}</span></td>
                <td>
                    <Link className='btn btn-primary'>view</Link>
                </td>
            </tr>
        ))
    }
    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address__wrapper shadow-sm">
                                <h4 className='text-center mb-3'>All Orders</h4>
                                <div class="table-responsive">
                                    <table className='table text-center table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Order Id</th>
                                                <th>Order Date</th>
                                                <th>Payment</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {content}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Order Id</th>
                                                <th>Order Date</th>
                                                <th>Payment</th>
                                                <th>Total</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )
}

export default OrderHistory