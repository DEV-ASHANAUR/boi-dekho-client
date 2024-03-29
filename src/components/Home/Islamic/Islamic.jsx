import React,{useEffect, useState} from "react";
import BookCard from "../../BookCard";
import Skeleton from "../../SharedComponents/skeleton/Skeleton";
import axois from "../../../utils/axois";
import { useDispatch, useSelector } from "react-redux";
import { categoryRemoved, categorySelected, resetFilter } from "../../../features/Filter/filterSlice";
import { useNavigate } from "react-router-dom";

const Islamic = () => {
    const [books,setBooks] = useState([]);
    const [isLoading,setIsloading] = useState(false);
    const [isError,setIsError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {category:selected} = useSelector(state=>state.filter);
    
    // console.log("books",books)
    useEffect(()=>{
        fetchData("islamic");
    },[])

    const fetchData = async(type)=>{
        try {
            setIsloading(true);
            const res = await axois.get(`/book/${type}`);
            setBooks(res.data);
            setIsloading(false);
            // return res.data;
        } catch (error) {
            setIsloading(false);
            console.log("error occur");
            setIsError(true);
        }
    }
    //
    const isSelected = selected.includes('Islamic') ? true : false;

    const handleCheck = (category) => {
        dispatch(resetFilter());
        if(isSelected){
            // dispatch(categoryRemoved(category));
            navigate(`/books?categories=${category}`);
        }else{
            dispatch(categorySelected(category));
            navigate(`/books?categories=${category}`);
        }
    }

    //decide what to render
    let content = null;

    if(isLoading){
        content = <Skeleton type="books" />
    }
    if(!isLoading && isError){
        content = <p>Something Went Wrong</p>
    }
    if(!isLoading && !isError && books?.length === 0){
        content = <p>Books Not found!</p>
    }
    if(!isLoading && !isError && books?.length > 0){
        content = books.map((book,i)=>(
            <BookCard book={book} key={i} />
        ))
    }
    return (
        <section>
            <div className="container">
                <div className="px-2 py-4 px-md-4 py-md-3 bg-white box-shadow">
                    <div className="d-flex mb-3 align-items-baseline justify-content-between border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Relegious (Isalm)
                            </span>
                        </h3>
                        <div>
                            <button className="btn btn-custom" onClick={()=>handleCheck('Islamic')}>View All</button>
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

export default Islamic;
