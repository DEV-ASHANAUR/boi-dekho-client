import React from 'react';

const Author = ({ item }) => {
    const { _id:id,author } = item;
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" id={id} />
                <label for={id}>{author}</label>
            </div>
            {/* <p>(0)</p> */}
        </div>
    );
};

export default Author;