import React from 'react';
import SingleReletedProduct from '../../components/ProductView/SingleReletedProduct';


import pimg1 from "../../images/product/mahfil-192x254.jpg";
import pimg2 from "../../images/product/Muslim-itihase-utthan-poton-192x254.jpg";
import pimg3 from "../../images/product/nari192x254.jpg";
const reletedProduct = () => {

    const reletedBooks = [

        {
            img: pimg1,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg2,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg3,
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
            img: pimg2,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
        {
            img: pimg3,
            title: "Mahfil theke Mahfile",
            author: "লাইফ উইথ আল্লাহ টিম",
            orginalPrice: 189,
            discount: 20,
            offeredPrice: 180,
        },
    ];

    return (
        <section className="reletedProduct-main-area">
            <div className="container">
                <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                    <div className="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Releted Product
                            </span>
                        </h3>
                        <div>
                            <button className="btn btn-custom">View All</button>
                        </div>
                    </div>


                    <div className="row">
                        {
                            reletedBooks.map((item, index) => (
                                <SingleReletedProduct item={item} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default reletedProduct;