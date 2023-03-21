import React from 'react';

const Publisher = ({ item }) => {
    const { _id:id,publisher } = item;
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" id={id} />
                <label for={id}>{publisher}</label>
            </div>
            {/* <p>({totalCount})</p> */}
        </div>
    );
};

export default Publisher;