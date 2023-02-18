import React from 'react';
import { Link } from 'react-router-dom';
// import TopHeader from '../SharedComponents/Topbar/TopHeader';
// import Header from '../SharedComponents/Navbar/Header';
// import Footer from '../SharedComponents/Footer/Footer';
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
import SingleBookPreOrder from "../../components/PreOrder/SingleBookPreOrder";
import pimg1 from "../../images/product/mahfil-192x254.jpg";
const PreOrder = () => {
    const preOrderBooks = [
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
    ];
    return (
        <>
            {/* <TopHeader />
            <Header /> */}
            <div className='preOrder-main-area'>
                <div className="all-preOrder-books">
                    <div className="container">

                        <div className="row">
                            <div className="d-flex mb-5 p-3 align-items-center justify-content-between border-bottom bg-white">
                                <h3 className="h5 fw-700 mb-0">
                                    <span className="d-inline-block">
                                        All Pre-Order Books
                                    </span>
                                </h3>
                                <div>
                                    <select className="form-select select-custome">
                                        <option defaultValue value="1">Newest</option>
                                        <option value="2">Oldest</option>
                                        <option value="3">Price low to high</option>
                                        <option value="4">Price high to low</option>
                                    </select>
                                </div>
                            </div>

                            {
                                preOrderBooks.map((item, index) => (
                                    <SingleBookPreOrder item={item} key={index} />
                                ))
                            }
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mt-4">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Prev</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link active" to="#">1</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">2</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">...</Link>
                                        </li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default PreOrder;