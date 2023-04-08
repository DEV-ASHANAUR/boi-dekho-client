import React, { useEffect } from 'react';
import SingleReletedProduct from '../../components/ProductView/SingleReletedProduct';

import { useDispatch, useSelector } from 'react-redux';
import { fetchReletedBooks } from '../../features/reletedBooks/reletedBooksSlice';
import Skeleton from '../../components/SharedComponents/skeleton/Skeleton';
const ReletedProduct = ({categories,bookId}) => {
    const {reletedBooks,isLoading,isError} = useSelector(state=>state.reletedBooks);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchReletedBooks({categories,bookId}));
    },[dispatch,categories,bookId])

    // console.log("releted book",reletedBooks);

    let content = null;

    if(isLoading){
        content = <Skeleton type="books" />
    }
    if(!isLoading && isError){
        content = <p>Something Went Wrong</p>
    }
    if(!isLoading && !isError && reletedBooks?.length === 0){
        content = <p>Books Not found!</p>
    }
    if(!isLoading && !isError && reletedBooks?.length > 0){
        content = reletedBooks.map((book,i)=>(
            <SingleReletedProduct book={book} key={i} />
        ))
    }



    return (
        <section className="reletedProduct-main-area">
            <div className="container">
                <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                    <div className="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Releted Books
                            </span>
                        </h3>
                        <div>
                            <button className="btn btn-custom">View All</button>
                        </div>
                    </div>


                    <div className="row">
                        {
                            content
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReletedProduct;