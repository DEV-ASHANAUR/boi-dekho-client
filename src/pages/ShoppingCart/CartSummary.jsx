import React, { useEffect } from 'react'
import numberWithCommas from '../../utils/numberFormat';
import { useDispatch, useSelector } from 'react-redux';
import { TbCurrencyTaka } from 'react-icons/tb';
import { getTotals } from '../../features/Cart/CartSlice';
const CartSummary = () => {
    const { cartTotalAmount,shippingFee,grandTotal } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getTotals());
    },[dispatch])
    return (
        <>
            <div className="b-1">
                <div className="order-total sm-box d-flex justify-content-between">
                    <p className='text-capitalize m-0'>subTotal :</p>
                    <span><b><TbCurrencyTaka />{numberWithCommas(cartTotalAmount)}</b></span>
                </div>
                <div className="shipping-item sm-box d-flex justify-content-between">
                    <p className='text-capitalize m-0'>Shipping :</p>
                    <span><b><TbCurrencyTaka />{shippingFee}</b></span>
                </div>
                <div className="shipping-item sm-box d-flex justify-content-between">
                    <p className='text-capitalize m-0'>Discount :</p>
                    <span><b>-</b></span>
                </div>
            </div>
            <div className="subtotal-box sm-box d-flex justify-content-between">
                <p className='text-capitalize m-0'><b>Grandtotal :</b></p>
                <span><b><TbCurrencyTaka />{numberWithCommas(grandTotal)}</b></span>
            </div>
        </>
    )
}

export default CartSummary