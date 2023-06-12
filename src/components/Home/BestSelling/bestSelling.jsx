import React, { useEffect } from "react";
import "./bestSelling.css";


import pimg1 from "../../../images/product/mahfil-192x254.jpg";
import pimg2 from "../../../images/product/Muslim-itihase-utthan-poton-192x254.jpg";
import pimg3 from "../../../images/product/nari192x254.jpg";
import SingleBestSellingBook from "./SingleBestSellingBook";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../../features/books/BooksSlice";
import Skeleton from '../../../components/SharedComponents/skeleton/Skeleton'


const BestSelling = () => {
    const dispatch = useDispatch();
    const { books, isLoading, isError, error } = useSelector((state) => state.books);
    console.log("books", books)
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch])
    const bestSellingBooks = [
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
    //decide what to render
    let content = null;

    if (isLoading) {
        content = <Skeleton type="books" />
    }
    if (!isLoading && isError) {
        content = <p>Something Went Wrong</p>
    }
    if (!isLoading && !isError && books?.length == 0) {
        content = <p>Books Not found!</p>
    }
    if (!isLoading && !isError && books?.length > 0) {
        content = books.map((book, i) => (
            <SingleBestSellingBook book={book} key={i} />
        ))
    }

    return (
        <section>
            <div className="container">
                <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                    <div className="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Best-Selling Books
                            </span>
                        </h3>
                        <div>
                            <button className="btn btn-custom">View All</button>
                        </div>
                    </div>


                    <div className="row">
                        {/* {bestSellingBooks.map((item, index) => (
                            <SingleBestSellingBook item={item} key={index} />
                        ))} */}
                        {
                            content
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BestSelling;
