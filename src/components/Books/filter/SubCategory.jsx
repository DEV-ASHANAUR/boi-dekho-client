import React from 'react';

const Fiction = ({ item }) => {
    const { _id,subCategory } = item;
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" id={_id} />
                <label for={_id}>{subCategory}</label>
            </div>
            {/* <p>(0)</p> */}
        </div>
    );
};

export default Fiction;