import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryRemoved, categorySelected } from '../../../features/Filter/filterSlice';

const Islamic = ({ item }) => {
    const { _id,category } = item;
    const dispatch = useDispatch();
    const {category:selected} = useSelector(state=>state.filter);
    
    const isSelected = selected.includes(category) ? true : false;

    const handleCheck = () => {
        if(isSelected){
            dispatch(categoryRemoved(category));
        }else{
            dispatch(categorySelected(category));
        }
    }
    return (
        <div className="check-inner">
            <div className="check-group" >
                <input type="checkbox" checked={isSelected} id={_id} onClick={handleCheck} />
                <label for={_id}>{category}</label>
            </div>
            {/* <p>(2)</p> */}
        </div>
    );
};

export default Islamic;