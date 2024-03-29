import React from 'react'
import './skeleton.css';
const Skeleton = ({ type }) => {
    const COUNTER = 6;
    const ProductSkeleton = () => (
        <div className="postSk">
            <div className="postSkImg"></div>
            
            <div className="info1 info_title1"></div>
            <div className="info2 info_title2"></div>
            <div className='info3 info_price'></div>
            <div className='info4 info_button'></div>
        </div>
    )
    const FilterProductSkeleton = () => (
        <div className="postSk1">
            <div className="postSkImg1"></div>
            
            <div className="info1 info_title1"></div>
            <div className="info2 info_title2"></div>
            <div className='info3 info_price'></div>
            <div className='info4 info_button'></div>
        </div>
    )

    const ReserveSkeleton = () => (
        <div className="ReSk">
            <div className="ReLeft">
                <div className="text11 info_basic"></div>
                <div className="text22 info_basic"></div>
                <div className="text33 info_basic"></div>
                <div className="text44 info_basic"></div>
            </div>
            <div className="ReRight">
                <div className="text55 info_basic"></div>
                <div className="text66 info_basic"></div>
                <div className="text77 info_basic"></div>
            </div>
        </div>
    )

    const TableSk = () => (
        <tr className='TableSk'>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    )

    const CatSK = () => (
        <div className='catSk'>
            <div className='cat'></div>
        </div>
    )

    if (type === 'books') return Array(COUNTER).fill(<ProductSkeleton />);
    if (type === 'filterbooks') return Array(8).fill(<FilterProductSkeleton />);
    if (type === 'reserve') return Array(5).fill(<ReserveSkeleton />);
    if (type === 'table') return Array(5).fill(<TableSk />)
    if (type === 'cat') return Array(5).fill(<CatSK />)

}

export default Skeleton