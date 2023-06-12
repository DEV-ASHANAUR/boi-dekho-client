import React, { useEffect } from 'react';
import SubCategory from './SubCategory';
import Author from './Author';
import Category from './Category';
import Publisher from './Publisher';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../features/Category/CategorySlice';
import Skeleton from '../../SharedComponents/skeleton/Skeleton';
import { fetchSubCategories } from '../../../features/SubCategory/SubCategorySlice';
import { fetchAuthors } from '../../../features/Author/AuthorSlice';
import { fetchPublishers } from '../../../features/Publisher/PublisherSlice';

const Filters = () => {
    const {category} = useSelector(state => state.filter);
    const {categories,isLoading,isError} = useSelector((state)=>state.category)
    const {publishers,isLoading:pubLoading,isError:pubError} = useSelector((state)=>state.publisher)
    const {subcategories,isLoading:subLoading,isError:subError} = useSelector((state)=>state.subCategory)
    const {authors,isLoading:authorLoading,isError:authorError} = useSelector((state)=>state.author)
    const dispatch = useDispatch();
    // console.log("subcategory",subcategories);

    useEffect(()=>{
        dispatch(fetchCategories());
    },[dispatch])

    useEffect(()=>{
        dispatch(fetchPublishers());
    },[dispatch])

    useEffect(()=>{
        dispatch(fetchSubCategories());
    },[dispatch])

    useEffect(()=>{
        dispatch(fetchAuthors());
    },[dispatch])

    //what to render in cetegory section
    let publisherContent;

    if (pubLoading) {
        publisherContent = <Skeleton type="cat" />
    }

    if (!pubLoading && !pubError && publishers?.length === 0) {
        publisherContent = <div className="col-span-12">No content found!</div>
    }

    if (!pubError && !pubLoading && publishers?.length > 0) {
        publisherContent = publishers.map((item,index) => (
            <Publisher item={item} key={index} />
        ))
    }

    //what to render in cetegory section
    let categoryContent;

    if (isLoading) {
        categoryContent = <Skeleton type="cat" />
    }

    if (!isLoading && !isError && categories?.length === 0) {
        categoryContent = <div className="col-span-12">No content found!</div>
    }

    if (!isError && !isLoading && categories?.length > 0) {
        categoryContent = categories.map((item,index) => (
            <Category item={item} key={index} />
        ))
    }

    //filterByCategory

    const filterByCategory = (subCat) =>{
        if(category.length > 0){
            return category.includes(subCat?.category);
        }
        return true;
    }

    //what to render in subcetegory section
    let subcategoryContent;

    if (subLoading) {
        subcategoryContent = <Skeleton type="cat" />
    }

    if (!subLoading && !subError && subcategories?.length === 0) {
        subcategoryContent = <div className="col-span-12">No content found!</div>
    }

    if (!subError && !subLoading && subcategories?.length > 0) {
        subcategoryContent = subcategories
        .filter(filterByCategory)
        .map((item,index) => (
            <SubCategory item={item} key={index} />
        ))
    }

    //what to render in author section
    let authorContent;

    if (authorLoading) {
        authorContent = <Skeleton type="cat" />
    }

    if (!authorLoading && !authorError && authors?.length === 0) {
        authorContent = <div className="col-span-12">No content found!</div>
    }

    if (!authorError && !authorLoading && authors?.length > 0) {
        authorContent = authors.map((item,index) => (
            <Author item={item} key={index} />
        ))
    }

    

    

    


    return (
        <div className="col-lg-3 col-md-4 col-sm-5 col-12 books-side-list">

            <div className="bg-white rounded shadow-sm books-side-pub-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                All Publishers
                            </span>
                        </h3>
                    </div>
                </div>

                {   
                    publisherContent
                }
            </div>

            <div className="bg-white rounded shadow-sm mt-3 books-side-author-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                All Author
                            </span>
                        </h3>
                    </div>
                </div>
                {
                    authorContent
                }
            </div>


            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                All Category
                            </span>
                        </h3>
                    </div>
                </div>
                {
                    categoryContent
                }

            </div>



            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                All Sub-Category
                            </span>
                        </h3>
                    </div>
                </div>

                {
                    subcategoryContent
                }
            </div>



            
        </div>
    );
};

export default Filters;