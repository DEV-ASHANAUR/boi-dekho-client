import React from 'react';
// import TopHeader from '../SharedComponents/Topbar/TopHeader';
// import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
// import Footer from './../../components/SharedComponents/SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
import pimg1 from "../../images/product/mahfil-192x254.jpg";
import "./books.css"
import Filters from '../../components/Books/filter/Filters';
import SingleBook from '../../components/Books/SingleBook';
const Books = () => {


    const allBooks = [

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
            <div className='books-main-area'>
                <div className="all-books">
                    <div className="container">
                        <div className="row">
                            <Filters />
                            <div className="col-lg-9 col-md-8 col-sm-7 col-12">
                                <div className="d-flex mb-5 p-3 align-items-center justify-content-between border-bottom bg-white">
                                    <h3 className="h5 fw-700 mb-0">
                                        <span className="d-inline-block">
                                            All Books
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
                                <div className="row">
                                    {
                                        allBooks.map((item, index) => (

                                            <SingleBook item={item} key={index} />
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
                </div>
            </div>
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default Books;