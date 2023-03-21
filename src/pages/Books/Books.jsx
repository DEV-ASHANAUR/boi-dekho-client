import React, { useEffect } from 'react';
// import TopHeader from '../SharedComponents/Topbar/TopHeader';
// import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
// import Footer from './../../components/SharedComponents/SharedComponents/Footer/Footer';
import { Link } from 'react-router-dom';
import "./books.css"
import Filters from '../../components/Books/filter/Filters';
import SingleBook from '../../components/Books/SingleBook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../features/books/BooksSlice';
import Skeleton from '../../components/SharedComponents/skeleton/Skeleton';
import { setPage } from '../../features/Filter/filterSlice';


const Books = () => {
    const dispatch = useDispatch();
    const { books, current_page, total_page, isLoading, isError } = useSelector(state => state.books);
    const { publisher, author, category, subcategory, page } = useSelector(state => state.filter);

    console.log("total_page", total_page);

    useEffect(() => {
        dispatch(fetchBooks({ publisher, category, subcategory, author, page }));
    }, [dispatch, publisher, category, subcategory, author, page]);

    //decide what to render
    let content = null;

    if (isLoading) {
        content = <Skeleton type="books" />
    }
    if (!isLoading && isError) {
        content = <p>Something Went Wrong</p>
    }
    if (!isLoading && !isError && books?.length === 0) {
        content = <p>Books Not found!</p>
    }
    if (!isLoading && !isError && books?.length > 0) {
        content = books.map((book, i) => (
            <SingleBook book={book} key={i} />
        ))
    }

    const total_page_value = () => {
        let countArray = []
        for (let i = 1; i <= total_page; i++) {
            countArray.push(i);
        }
        return countArray
    }

    //handlePagination
    const handlePagination = (page) => {
        dispatch(setPage(page))
    }


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
                                        content
                                    }
                                </div>
                                {
                                    (total_page && total_page > 1) && (
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="mt-4">
                                                    <ul className="pagination justify-content-center">
                                                        {
                                                            current_page !== 1 ? (
                                                                <li className="page-item">
                                                                    <button className="page-link" onClick={() => handlePagination(current_page - 1)}>Prev</button>
                                                                </li>
                                                            ) : (
                                                                <li className="page-item">
                                                                    <button className="page-link" disabled>Prev</button>
                                                                </li>
                                                            )
                                                        }
                                                        {
                                                            total_page_value()?.map((num, i) => (
                                                                current_page == num ? (
                                                                    <li className="page-item">
                                                                        <button className="page-link active" disabled>{num}</button>
                                                                    </li>
                                                                ) : (
                                                                    <li className="page-item">
                                                                        <button className="page-link" onClick={() => handlePagination(num)}>{num}</button>
                                                                    </li>
                                                                )

                                                            ))
                                                        }

                                                        {
                                                            total_page !== current_page ? (
                                                                <li className="page-item">
                                                                    <button className="page-link" onClick={() => handlePagination(current_page+1)}>Next</button>
                                                                </li>
                                                            ) : (
                                                                <li className="page-item">
                                                                    <button className="page-link" disabled>Next</button>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
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