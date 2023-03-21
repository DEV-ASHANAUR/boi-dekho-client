import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subcategoryRemoved, subcategorySelected } from '../../../features/Filter/filterSlice';

const Fiction = ({ item }) => {
    const { _id,subCategory } = item;
    const dispatch = useDispatch();
    const {subcategory:selected} = useSelector(state=>state.filter);
    
    const isSelected = selected.includes(subCategory) ? true : false;

    const handleCheck = () => {
        if(isSelected){
            dispatch(subcategoryRemoved(subCategory));
        }else{
            dispatch(subcategorySelected(subCategory));
        }
    }
    return (
        <div className="check-inner">
            <div className="check-group">
                <input type="checkbox" checked={isSelected} id={_id} onClick={handleCheck} />
                <label for={_id}>{subCategory}</label>
            </div>
            {/* <p>(0)</p> */}
        </div>
    );
};

export default Fiction;