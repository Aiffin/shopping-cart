import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { add, remove } from '../features/cartSlice'
import {clearCart} from '../features/cartSlice'
import {decrement,getTotals} from '../features/cartSlice'

function Cart() {
    //const cartItem=useSelector(state=>state.cart.cartItems)
    const cart=useSelector(state=>state.cart)
    //const {quantity}=useSelector(state=>state.cart.cartItems)
    const dispatch=useDispatch()

    const handleRemove=(index)=>{
        dispatch(remove(index))
    }

    useEffect(()=>{
        dispatch(getTotals())
    },[cart,dispatch])

  return (
<>
   
    <div className="card">
        {
            cart.cartItems.map((item,index)=>(
                <div className='card border-0' key={index}>

                    <div className='card-body'>
                    <img src={item.image} style={{width:"100px"}} className="card-img-top h-100 mx-auto mt-3" alt="market" />

                        <h2 className="card-title">{item.title}</h2>
                        <div className="card-content"> $ {item.price}</div>
                        <button className="btn btn-primary" onClick={()=>dispatch(add(item))}>+</button>
                        <h2>{item.cartQuantity}</h2>
                        <button className="btn btn-primary" onClick={()=>dispatch(decrement(item))}>-</button>
                        <button className="btn btn-warning" onClick={()=>handleRemove(index)}>delete</button>
                    </div>
                </div>
            ))
        }
        
        <div className="row">
                <div className="subtotal">
                    <span>SubTotal</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <button className="btn btn-outline-danger" onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </div>
    </div>

    </>

  )

}

export default Cart