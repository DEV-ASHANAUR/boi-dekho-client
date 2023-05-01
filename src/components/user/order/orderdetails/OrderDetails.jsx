import React, { useEffect, useState } from 'react';
import './orderdetails.css';
import { FaHome } from 'react-icons/fa'
import { RiArrowRightSLine } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast';
import { TbCurrencyTaka } from 'react-icons/tb';
import Sidebar from '../../sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import axios from '../../../../utils/tokenAxios';
import Loading from '../../../SharedComponents/Loading/Loading';
import Moment from 'react-moment';
import numberWithCommas from '../../../../utils/numberFormat';

const OrderDetails = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { orderId } = useParams();

    useEffect(() => {
        fetchOrder(orderId);
    }, [orderId]);

    const fetchOrder = async (orderId) => {
        try {
            setLoading(true);
            const response = await axios.get(`/order/single/${orderId}`);
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error("Something Went Worng");
            console.log(error);
        }
    }

    console.log("order details", data);

    return (
        <div className="container">
            <div className="breadcrum"><FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} /> <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} /><span className='account'>Account</span></div>
            <div className="row pt-4 pb-4">
                <Sidebar />
                <div className="col-lg-9 col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="address__wrapper shadow-sm">
                                {/* render order details code start */}
                                {
                                    loading ? (
                                        <Loading />
                                    ) : (
                                        <article className="card">
                                            <div className="card-body">
                                                <article className="card">
                                                    <div className="card-body row" style={{ padding: "10px" }}>
                                                        <div className="col-md-5">
                                                            <strong>Order Id:</strong> <br /> {data?._id}
                                                        </div>
                                                        <div className="col-md-3"> <strong>Order Date:</strong> <br /><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment> </div>
                                                        {/* <div className="col-md-5"> <strong>Shipping By: Jishan</strong> <br /> Rangpur,Gaibandha,Sadullapur | <i className="fa fa-phone"></i> 01722260010</div> */}
                                                        <div className="col-md-2"> <strong>Status:</strong> <br /> {data?.status} </div>
                                                        <div className="col-md-2"> <strong>Total: </strong> <br />৳ {numberWithCommas(parseFloat(data.total))}</div>
                                                    </div>
                                                </article>
                                                {
                                                    data?.status === 'pending' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon "><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'confirmed' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.confirmedDate}</Moment></small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'processing' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.confirmedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.processingDate}</Moment></small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'picked' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.confirmedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.processingDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.pickedDate}</Moment></small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'shipped' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.confirmedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.processingDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.pickedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.shippedDate}</Moment></small>
                                                            </div>
                                                            <div className="step">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger">-</small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'delivered' && (
                                                        <div className="track">
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-spinner"></i> </span>
                                                                <span className="text">Pending</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.createdAt}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"><i className="fa fa-check"></i> </span>
                                                                <span className="text">confirmed</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.confirmedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-shopping-cart"></i> </span>
                                                                <span className="text">Processing</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.processingDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-truck"></i> </span>
                                                                <span className="text">Picked</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.pickedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-user"></i> </span>
                                                                <span className="text">Shipped</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.shippedDate}</Moment></small>
                                                            </div>
                                                            <div className="step active">
                                                                <span className="icon"> <i className="fa fa-hand-lizard-o"></i> </span>
                                                                <span className="text">Delivered</span>
                                                                <small className="text-danger"><Moment format="DD-MMM-YYYY">{data?.deliveredDate}</Moment></small>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {
                                                    data?.status === 'cancelled' && (
                                                        <div className="track">
                                                            <div className="cancel done">
                                                                <span className="icon "> <i className="fa fa-close "></i> </span>
                                                                <span className="text">Pending</span>
                                                            </div>
                                                            <div className="cancel done">
                                                                <span className="icon "><i className="fa fa-close"></i> </span>
                                                                <span className="text">confirmed</span>
                                                            </div>
                                                            <div className="cancel done">
                                                                <span className="icon"> <i className="fa fa-close"></i> </span>
                                                                <span className="text">Processing</span>

                                                            </div>
                                                            <div className="cancel done">
                                                                <span className="icon"> <i className="fa fa-close"></i> </span>
                                                                <span className="text">Picked</span>

                                                            </div>

                                                            <div className="cancel done">
                                                                <span className="icon"><i className="fa fa-close"></i> </span>
                                                                <span className="text">Shipped</span>

                                                            </div>
                                                            <div className="cancel done">
                                                                <span className="icon"> <i className="fa fa-close"></i></span>
                                                                <span className="text">Delivered</span>

                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                {/* </div> */}
                                                <div className="empty"></div>
                                                <hr />
                                                <div className='order__details'>
                                                    <h2>hello order</h2>
                                                </div>

                                            </div>
                                        </article>
                                    )
                                }
                                {/* render order details code end */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    )


}

export default OrderDetails