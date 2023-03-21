import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorRemoved, authorSelected } from '../../../features/Filter/filterSlice';

const Author = ({ item }) => {
    const { _id:id,author } = item;

    const dispatch = useDispatch();
    const {author:selected} = useSelector(state=>state.filter);
    
    const isSelected = selected.includes(author) ? true : false;

    const handleCheck = () => {
        if(isSelected){
            dispatch(authorRemoved(author));
        }else{
            dispatch(authorSelected(author));
        }
    }
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" checked={isSelected} id={id} onClick={handleCheck} />
                <label for={id}>{author}</label>
            </div>
            {/* <p>(0)</p> */}
        </div>
    );
};

export default Author;