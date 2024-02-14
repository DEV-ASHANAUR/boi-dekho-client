import React, { useEffect, useRef, useState } from "react";
// import './orderdetails.css';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "react-moment";
import { useReactToPrint } from "react-to-print";
import Loading from "../../SharedComponents/Loading/Loading";
import numberWithCommas from "../../../utils/numberFormat";
import tokenAxiosInstance from "../../../utils/tokenAxios";
import { IconButton, Typography } from "@mui/material";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useDispatch, useSelector } from "react-redux";
import { restOrderMessage, updateOrder } from "../../../features/order/OrderSlice";

const ViewOrderDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { orderId } = useParams();
  const componentRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isError, message, isSuccess, error } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    fetchOrder(orderId);
  }, [orderId]);

  const fetchOrder = async (orderId) => {
    try {
      setLoading(true);
      const response = await tokenAxiosInstance.get(`/order/single/${orderId}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Something Went Worng");
      console.log(error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleProcess = (status) => {
    const currDate = new Date();
    const orderData = { ...data };
    orderData.status = status;

    if (status === "confirmed") {
      orderData.confirmedDate = currDate;
    }
    if (status === "processing") {
      orderData.processingDate = currDate;
    }
    if (status === "picked") {
      orderData.pickedDate = currDate;
    }
    if (status === "shipped") {
      orderData.shippedDate = currDate;
    }
    if (status === "delivered") {
      orderData.deliveredDate = currDate;
      orderData.payment = true;
    }
    dispatch(updateOrder({ id: orderId, data: orderData }));
    fetchOrder(orderId);
  };
  if (!isLoading && isSuccess) {
    toast.success(message);
    dispatch(restOrderMessage());
  }

  if (!isLoading && isError) {
    toast.error(error);
    dispatch(restOrderMessage());
  }
  // console.log("order details", data);

  return (
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="address__wrapper shadow-sm">
                <Typography
                  component="div"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5"></Typography>
                  <IconButton
                    sx={{ mr: 1 }}
                    onClick={() => navigate("/dashboard/manage-order")}
                  >
                    <CalendarViewDayIcon />
                  </IconButton>
                </Typography>
                {/* render order details code start */}
                {loading ? (
                  <Loading />
                ) : (
                  <article className="card">
                    <div className="card-body">
                      <article className="card">
                        <div
                          className="card-body row"
                          style={{ padding: "10px" }}
                        >
                          <div className="col-md-5">
                            <strong>Order Id:</strong> <br /> {data?._id}
                          </div>
                          <div className="col-md-3">
                            {" "}
                            <strong>Order Date:</strong> <br />
                            <Moment format="DD-MMM-YYYY">
                              {data?.createdAt}
                            </Moment>{" "}
                          </div>
                          {/* <div className="col-md-5"> <strong>Shipping By: Jishan</strong> <br /> Rangpur,Gaibandha,Sadullapur | <i className="fa fa-phone"></i> 01722260010</div> */}
                          <div className="col-md-2">
                            {" "}
                            <strong>Status:</strong> <br /> {data?.status}{" "}
                          </div>
                          <div className="col-md-2">
                            {" "}
                            <strong>Total: </strong> <br />৳{" "}
                            {numberWithCommas(parseFloat(data?.total))}
                          </div>
                        </div>
                      </article>
                      {data?.status === "pending" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step">
                            <span className="icon ">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">-</small>
                          </div>
                        </div>
                      )}
                      {data?.status === "confirmed" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.confirmedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">-</small>
                          </div>
                        </div>
                      )}
                      {data?.status === "processing" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.confirmedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.processingDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">-</small>
                          </div>
                        </div>
                      )}
                      {data?.status === "picked" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.confirmedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.processingDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.pickedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">-</small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">-</small>
                          </div>
                        </div>
                      )}
                      {data?.status === "shipped" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.confirmedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.processingDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.pickedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.shippedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">-</small>
                          </div>
                        </div>
                      )}
                      {data?.status === "delivered" && (
                        <div className="track">
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-spinner"></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.createdAt}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              <i className="fa fa-check"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.confirmedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-shopping-cart"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.processingDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-truck"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.pickedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-user"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.shippedDate}
                              </Moment>
                            </small>
                          </div>
                          <div className="step active">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-hand-lizard-o"></i>{" "}
                            </span>
                            <span className="text">Delivered</span>
                            <small className="text-danger">
                              <Moment format="DD-MMM-YYYY">
                                {data?.deliveredDate}
                              </Moment>
                            </small>
                          </div>
                        </div>
                      )}
                      {data?.status === "cancelled" && (
                        <div className="track">
                          <div className="cancel done">
                            <span className="icon ">
                              {" "}
                              <i className="fa fa-close "></i>{" "}
                            </span>
                            <span className="text">Pending</span>
                          </div>
                          <div className="cancel done">
                            <span className="icon ">
                              <i className="fa fa-close"></i>{" "}
                            </span>
                            <span className="text">confirmed</span>
                          </div>
                          <div className="cancel done">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-close"></i>{" "}
                            </span>
                            <span className="text">Processing</span>
                          </div>
                          <div className="cancel done">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-close"></i>{" "}
                            </span>
                            <span className="text">Picked</span>
                          </div>

                          <div className="cancel done">
                            <span className="icon">
                              <i className="fa fa-close"></i>{" "}
                            </span>
                            <span className="text">Shipped</span>
                          </div>
                          <div className="cancel done">
                            <span className="icon">
                              {" "}
                              <i className="fa fa-close"></i>
                            </span>
                            <span className="text">Delivered</span>
                          </div>
                        </div>
                      )}
                      {/* </div> */}
                      <div className="empty"></div>
                      <hr />
                      <div className="order__details" ref={componentRef}>
                        {/* <!-- BEGIN INVOICE --> */}
                        <div class="col-xs-12">
                          <div class="grid invoice">
                            <div class="grid-body">
                              <div class="invoice-title">
                                <div class="row">
                                  <div class="col-xs-12">
                                    <img
                                      src="http://vergo-kertas.herokuapp.com/assets/img/logo.png"
                                      alt=""
                                      height="35"
                                    />
                                  </div>
                                </div>
                                <br />
                                <div class="row">
                                  <div class="col-xs-12">
                                    <h2>
                                      invoice
                                      <br />
                                      <span class="small">
                                        order Id: {data?._id}
                                      </span>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <hr />
                              <div class="row">
                                <div class="col-xs-6 col-md-6">
                                  <address>
                                    <strong>Billed By:</strong>
                                    <br />
                                    Boikini.com.
                                    <br />
                                    795 Folsom Ave, Suite 600
                                    <br />
                                    San Francisco, CA 94107
                                    <br />
                                    <abbr title="Phone">P:</abbr> (123) 456-7890
                                  </address>
                                </div>
                                <div class="col-xs-6 col-md-6 text-right">
                                  <address>
                                    <strong>Shipped To:</strong>
                                    <br />
                                    {data.shippingAddress?.fullName}
                                    <br />
                                    Division: {data.shippingAddress?.division}
                                    <br />
                                    District: {data.shippingAddress?.district}
                                    <br />
                                    Upzila: {data.shippingAddress?.upazila},
                                    <br />
                                    PickPoint: {data.shippingAddress?.peakpoint}
                                    ,<br />
                                    <abbr title="Phone">Phone:</abbr>{" "}
                                    {data.shippingAddress?.contactNumber}
                                  </address>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-xs-6 col-md-6">
                                  <address>
                                    <strong>Payment Method:</strong>
                                    <br />
                                    {data?.paymentMethod}
                                    <br />
                                    {data?.shippingAddress?.email}
                                    <br />
                                    <strong>Payment Status: </strong>
                                    {data?.payment === true ? "Paid" : "Upaid"}
                                    <br />
                                  </address>
                                </div>
                                <div class="col-xs-6 col-md-6 text-right">
                                  <address>
                                    <strong>Order Date:</strong>
                                    <br />
                                    <Moment format="DD-MMM-YYYY">
                                      {data?.createdAt}
                                    </Moment>
                                  </address>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12">
                                  <h3>ORDER SUMMARY</h3>
                                  <table class="table table-striped">
                                    <thead>
                                      <tr class="line">
                                        <td>
                                          <strong>#</strong>
                                        </td>
                                        <td class="text-center">
                                          <strong>Book Cover</strong>
                                        </td>
                                        <td class="text-center">
                                          <strong>pcs</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>Price</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>SUBTOTAL</strong>
                                        </td>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {data?.orderDetails?.map((book, i) => (
                                        <tr key={i}>
                                          <td>1</td>
                                          <td className="text-center">
                                            <img
                                              src={book.coverImage}
                                              className="img-fluid img-thumbnail"
                                              width="80px"
                                              height="auto"
                                              alt="coverImage"
                                            />
                                          </td>
                                          <td class="text-center">
                                            {book.cartQuantity}
                                          </td>
                                          <td class="text-right">
                                            ৳{book.price}
                                          </td>
                                          <td class="text-right">
                                            ৳{book.cartQuantity * book.price}
                                          </td>
                                        </tr>
                                      ))}

                                      <tr>
                                        <td colspan="3"></td>
                                        <td class="text-right">
                                          <strong>Taxes</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>N/A</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="3"></td>
                                        <td class="text-right">
                                          <strong>Shipping</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>৳{data.shippingFee}</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="3"></td>
                                        <td class="text-right">
                                          <strong>Discount</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>N/A</strong>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td colspan="3"></td>
                                        <td class="text-right">
                                          <strong>Total</strong>
                                        </td>
                                        <td class="text-right">
                                          <strong>
                                            ৳
                                            {numberWithCommas(
                                              parseFloat(data?.total)
                                            )}
                                          </strong>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-12 text-right identity">
                                  {data?.status === "pending" && (
                                    <button
                                      className="btn btn-success my-3"
                                      onClick={() => handleProcess("confirmed")}
                                    >
                                      confirmed
                                    </button>
                                  )}
                                  {data?.status === "confirmed" && (
                                    <button
                                      className="btn btn-success my-3"
                                      onClick={() =>
                                        handleProcess("processing")
                                      }
                                    >
                                      Processing
                                    </button>
                                  )}
                                  {data?.status === "processing" && (
                                    <button
                                      className="btn btn-success my-3"
                                      onClick={() => handleProcess("picked")}
                                    >
                                      Picked
                                    </button>
                                  )}
                                  {data?.status === "picked" && (
                                    <button
                                      className="btn btn-success my-3"
                                      onClick={() => handleProcess("shipped")}
                                    >
                                      Shipped
                                    </button>
                                  )}
                                  {data?.status === "shipped" && (
                                    <button
                                      className="btn btn-success my-3"
                                      onClick={() => handleProcess("delivered")}
                                    >
                                      Delivered
                                    </button>
                                  )}
                                  {data?.status === "delivered" && (
                                    <p className="text-success">
                                      Order delivered Successfully
                                    </p>
                                  )}
                                </div>
                                <button
                                  className="btn btn-flat btn-primary"
                                  onClick={handlePrint}
                                >
                                  Download
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                )}
                {/* render order details code end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ViewOrderDetails;
