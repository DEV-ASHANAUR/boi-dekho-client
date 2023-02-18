import React from 'react';
import Fiction from './Fiction';
import NonFiction from './NonFiction';
import Childish from './Childish';
import Author from './Author';
import Islamic from './Islamic';
import Publisher from './Publisher';

const Filters = () => {

    const publishers = [
        {
            id: 1,
            name: "Lecture",
            totalCount: 6,
        },
        {
            id: 2,
            name: "Jupitar",
            totalCount: 4,
        },
        {
            id: 3,
            name: "Panjere",
            totalCount: 7,
        },
        {
            id: 4,
            name: "OkkhorPotro",
            totalCount: 2,
        },
        {
            id: 5,
            name: "Technical",
            totalCount: 9,
        },
    ];

    const islamic = [
        {
            id: 6,
            name: "Serat and Sunnah",
            totalCount: 1,
        },
        {
            id: 7,
            name: "Sahih Hadis",
            totalCount: 6,
        },
        {
            id: 8,
            name: "Sistacar",
            totalCount: 7,
        },
        {
            id: 9,
            name: "Dua and Jikir",
            totalCount: 3,
        },
        {
            id: 10,
            name: "Lifestyle of Sahabi",
            totalCount: 5,
        },
    ];

    const fiction = [
        {
            id: 11,
            name: "Lecture",
            totalCount: 6,
        },
        {
            id: 12,
            name: "Jupitar",
            totalCount: 4,
        },
        {
            id: 13,
            name: "Panjere",
            totalCount: 7,
        },
        {
            id: 14,
            name: "OkkhorPotro",
            totalCount: 2,
        },
        {
            id: 15,
            name: "Technical",
            totalCount: 9,
        },
    ];

    const nonFiction = [
        {
            id: 16,
            name: "Serat and Sunnah",
            totalCount: 1,
        },
        {
            id: 17,
            name: "Sahih Hadis",
            totalCount: 6,
        },
        {
            id: 18,
            name: "Sistacar",
            totalCount: 7,
        },
        {
            id: 19,
            name: "Dua and Jikir",
            totalCount: 3,
        },
        {
            id: 20,
            name: "Lifestyle of Sahabi",
            totalCount: 5,
        },
    ];

    const childish = [
        {
            id: 21,
            name: "Lecture",
            totalCount: 6,
        },
        {
            id: 22,
            name: "Jupitar",
            totalCount: 4,
        },
        {
            id: 23,
            name: "Panjere",
            totalCount: 7,
        },
        {
            id: 24,
            name: "OkkhorPotro",
            totalCount: 2,
        },
        {
            id: 25,
            name: "Technical",
            totalCount: 9,
        },
    ];

    const author = [
        {
            id: 26,
            name: "Serat and Sunnah",
            totalCount: 1,
        },
        {
            id: 27,
            name: "Sahih Hadis",
            totalCount: 6,
        },
        {
            id: 28,
            name: "Sistacar",
            totalCount: 7,
        },
        {
            id: 29,
            name: "Dua and Jikir",
            totalCount: 3,
        },
        {
            id: 30,
            name: "Lifestyle of Sahabi",
            totalCount: 5,
        },
    ];


    return (
        <div className="col-lg-3 col-md-4 col-sm-5 col-12">

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
                    publishers.map((item, index) => (

                        <Publisher item={item} key={index} />
                    ))
                }
            </div>


            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Islamic Categories
                            </span>
                        </h3>
                    </div>
                </div>
                {
                    islamic.map((item, index) => (

                        <Islamic item={item} key={index} />
                    ))
                }

            </div>



            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Fiction Categories
                            </span>
                        </h3>
                    </div>
                </div>

                {
                    fiction.map((item, index) => (

                        <Fiction item={item} key={index} />
                    ))
                }
            </div>



            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Non-Fcction Categories
                            </span>
                        </h3>
                    </div>
                </div>

                {
                    nonFiction.map((item, index) => (

                        <NonFiction item={item} key={index} />
                    ))
                }
            </div>


            <div className="bg-white rounded shadow-sm mt-3 books-side-cat-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                Childish Categories
                            </span>
                        </h3>
                    </div>
                </div>

                {
                    childish.map((item, index) => (

                        <Childish item={item} key={index} />
                    ))
                }
            </div>



            <div className="bg-white rounded shadow-sm mt-3 books-side-author-list">
                <div className="px-3 pt-3 books-filter text-start">
                    <div className="mb-3 border-bottom">
                        <h3 className="h5 fw-700 mb-0">
                            <span className="border-bottom border-primary pb-3 d-inline-block">
                                All Authors
                            </span>
                        </h3>
                    </div>
                </div>



                {
                    author.map((item, index) => (

                        <Author item={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default Filters;