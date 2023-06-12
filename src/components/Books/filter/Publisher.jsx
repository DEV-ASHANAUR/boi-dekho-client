import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { publisherRemoved, publisherSelected } from '../../../features/Filter/filterSlice';

const Publisher = ({ item }) => {
    const { _id:id,publisher } = item;
    const dispatch = useDispatch();
    const {publisher:selected} = useSelector(state=>state.filter);
    
    const isSelected = selected.includes(publisher) ? true : false;

    const handleCheck = () => {
        if(isSelected){
            dispatch(publisherRemoved(publisher));
        }else{
            dispatch(publisherSelected(publisher));
        }
    }
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" checked={isSelected} id={id} onClick={handleCheck} />
                <label for={id}>{publisher}</label>
            </div>
        </div>
    );
};

export default Publisher;