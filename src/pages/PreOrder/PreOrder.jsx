import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
// import TopHeader from '../SharedComponents/Topbar/TopHeader';
// import Header from '../SharedComponents/Navbar/Header';
import SubscriptionArea from "./../../components/SharedComponents/SubscriptionArea/subscriptionArea";
// import Footer from './../../components/SharedComponents/SharedComponents/Footer/Footer';
import Filters from '../../components/Books/filter/Filters';
import SingleBook from '../../components/Books/SingleBook';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../features/books/BooksSlice';
import Skeleton from '../../components/SharedComponents/skeleton/Skeleton';
import { authorRemoved, categoryRemoved, publisherRemoved, setLimit, setPage, setQueryString, sortBy, subcategoryRemoved } from '../../features/Filter/filterSlice';
import { Toaster } from 'react-hot-toast';
import SingleBookPreOrder from '../../components/PreOrder/SingleBookPreOrder';

const PreOrder = () => {
    let [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { books, current_page, total_page, isLoading, isError } = useSelector(state => state.books);
    const { publisher, author, category, subcategory, search, sort, page, limit, trigger } = useSelector(state => state.filter);

    // console.log("books",books)

    const params = [];

    searchParams.forEach((value, key) => {
        params.push([key, value]);
    });

    let query = '';
    let keys = [];

    //handlePagination
    const handlePagination = (page) => {
        // console.log('hello');
        dispatch(setPage(page))

        setSearchParams({ page: page })
    }

    params.map(([key, value]) => {
        keys.push(key);
        query += `${key}=${value}&`
    })


    if (keys.indexOf('sort') === -1) {
        query += `sort=${sort}&`
    }
    // else if(keys.includes('sort')){
    //     dispatch(sortBy(searchParams.get('sort')))
    // }
    if (keys.indexOf('page') === -1) {
        // console.log("page");
        query += `page=${page}&`;
    }
    // else if (keys.includes('page')) {
    //     dispatch(setPage(parseInt(searchParams.get('page'))))
    // }
    if (keys.indexOf('limit') === -1) {
        query += `limit=${limit}`
    }
    else if (keys.includes('limit')) {
        dispatch(setLimit(parseInt(searchParams.get('limit'))))
    }

    useEffect(() => {
        dispatch(setQueryString(query))
    }, [searchParams, dispatch,query]);

    useEffect(() => {

        if (trigger) {

            // dispatch(setPage(1))
            // setSearchParams({ page: page })
            let querystring = "";

            if (publisher?.length > 0) {
                let pub = publisher.join(",");
                querystring += `publisher=${pub}&`
            }

            if (category?.length > 0) {
                let cat = category.join(",");
                querystring += `categories=${cat}&`
            }

            if (subcategory?.length > 0) {
                let subcat = subcategory.join(",");
                querystring += `subCategories=${subcat}&`
            }

            if (author?.length > 0) {
                let auth = author.join(",");
                querystring += `authors=${auth}&`
            }

            if (search !== "") {
                querystring += `search=${search}&`
            }
            if (sort !== "") {
                querystring += `sort=${sort}&`
            }
            if (page !== "") {
                querystring += `page=${page}&`

            }
            if (limit !== "") {
                querystring += `limit=${limit}`
            }

            const query = `?${querystring}`;

            console.log("genarate", query);

            navigate(query);
        }


        // console.log("call create query string",querystring);
    }, [navigate, publisher, category, subcategory, author, page, limit, search, sort, trigger])


    //fetch the data from server
    useEffect(() => {
        dispatch(fetchBooks({ query }));
    }, [dispatch, searchParams, query]);


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
        content = books.filter((item)=>item.preOrder === true).map((book, i) => (
            <SingleBookPreOrder book={book} key={i} />
        ))
    }

    const total_page_value = () => {
        let countArray = []
        for (let i = 1; i <= total_page; i++) {
            countArray.push(i);
        }
        return countArray
    }



    //handleChange
    const handleChange = (e) => {
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
                            {/* <Filters /> */}
                            <div className="col-lg-12 col-md-12 col-sm-7 col-12">
                                <div className="d-flex p-3 align-items-center justify-content-between border-bottom bg-white mb-3">
                                    <h3 className="h5 fw-700 mb-0">
                                        <span className="d-inline-block">
                                            All Pre Order Books
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
                                <div className="row gy-3">
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
            <Toaster />
            <SubscriptionArea />
            {/* <Footer /> */}
        </>
    );
};

export default PreOrder;