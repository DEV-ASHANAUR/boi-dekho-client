import React from 'react';

const Publisher = ({ item }) => {
    const { name, totalCount, id } = item;
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" id={id} />
                <label for={id}>{name}</label>
            </div>
            <p>({totalCount})</p>
        </div>
    );
};

export default Publisher;