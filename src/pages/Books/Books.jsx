import React, { useEffect } from 'react';
// import TopHeader from '../SharedComponents/Topbar/TopHeader';
// import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
// import Footer from './../../components/SharedComponents/SharedComponents/Footer/Footer';
import "./books.css"
import Filters from '../../components/Books/filter/Filters';
import SingleBook from '../../components/Books/SingleBook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../features/books/BooksSlice';
import Skeleton from '../../components/SharedComponents/skeleton/Skeleton';
import { authorRemoved, categoryRemoved, publisherRemoved, setPage, sortBy, subcategoryRemoved } from '../../features/Filter/filterSlice';


const Books = () => {
    const dispatch = useDispatch();
    const { books, current_page, total_page, isLoading, isError } = useSelector(state => state.books);
    const { publisher, author, category, subcategory,search,sort,page } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchBooks({ publisher, category, subcategory, author, page,search,sort }));
    }, [dispatch, publisher, category, subcategory, author, page,search,sort]);

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

    //handleChange
    const handleChange = (e) =>{
        dispatch(sortBy(e.target.value));
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
                                <div className="d-flex p-3 align-items-center justify-content-between border-bottom bg-white">
                                    <h3 className="h5 fw-700 mb-0">
                                        <span className="d-inline-block">
                                            All Books
                                        </span>
                                    </h3>
                                    <div>
                                        <select className="form-select select-custome" onChange={handleChange}>
                                            <option defaultValue value="-createdAt">Newest</option>
                                            <option value="createdAt" >Oldest</option>
                                            <option value="price">Price low to high</option>
                                            <option value="-price">Price high to low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='my-3'>
                                    {
                                        (publisher?.length > 0 || author?.length > 0 || category?.length > 0 || subcategory?.length) > 0 && (
                                            <>
                                                <span className='filterdata pe-2'>
                                                    Filtered by :
                                                </span>
                                                {/* publisher */}
                                                {
                                                    publisher.length > 0 && (
                                                        publisher.map((item,i)=>(
                                                            <span class="badge rounded-pill filteritem mx-2" key={i} onClick={()=>{dispatch(publisherRemoved(item))}}>{item} <span className='text-danger'>x</span> </span>
                                                        ))
                                                    )
                                                }
                                                {/* category */}
                                                {
                                                    category.length > 0 && (
                                                        category.map((item,i)=>(
                                                            <span class="badge rounded-pill filteritem mx-2" key={i} onClick={()=>{dispatch(categoryRemoved(item))}}>{item} <span className='text-danger'>x</span> </span>
                                                        ))
                                                    )
                                                }
                                                {/* subcategory */}
                                                {
                                                    subcategory.length > 0 && (
                                                        subcategory.map((item,i)=>(
                                                            <span class="badge rounded-pill filteritem mx-2" key={i} onClick={()=>{dispatch(subcategoryRemoved(item))}}>{item} <span className='text-danger'>x</span> </span>
                                                        ))
                                                    )
                                                }

                                                {/* author */}
                                                {
                                                    author.length > 0 && (
                                                        author.map((item,i)=>(
                                                            <span class="badge rounded-pill filteritem mx-2" key={i} onClick={()=>{dispatch(authorRemoved(item))}}>{item} <span className='text-danger'>x</span> </span>
                                                        ))
                                                    )
                                                }
                                                
                                            </>
                                        )
                                    }

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
                                                                current_page === num ? (
                                                                    <li className="page-item" key={i}>
                                                                        <button className="page-link active" disabled>{num}</button>
                                                                    </li>
                                                                ) : (
                                                                    <li className="page-item" key={i}>
                                                                        <button className="page-link" onClick={() => handlePagination(num)}>{num}</button>
                                                                    </li>
                                                                )

                                                            ))
                                                        }

                                                        {
                                                            total_page !== current_page ? (
                                                                <li className="page-item">
                                                                    <button className="page-link" onClick={() => handlePagination(current_page + 1)}>Next</button>
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