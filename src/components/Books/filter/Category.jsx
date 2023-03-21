import React from 'react';

const Islamic = ({ item }) => {
    const { _id,category } = item;
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" id={_id} />
                <label for={_id}>{category}</label>
            </div>
            {/* <p>(2)</p> */}
        </div>
    );
};

export default Islamic;