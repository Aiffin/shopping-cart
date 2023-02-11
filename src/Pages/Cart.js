import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { remove } from '../features/cartSlice'

function Cart() {
    const CartItem=useSelector(state=>state.cart)
    const dispatch=useDispatch()

    const handleRemove=(index)=>{
        dispatch(remove(index))
    }

  return (
    <>
    <div className="card">
        {
            CartItem.map((item,index)=>(
                <div className='card' key={index}>

                    <div className='card-body'>
                    <img src={item.image} style={{width:"100px"}} className="card-img-top h-100 mx-auto mt-3" alt="market" />

                        <h2 className="card-title">{item.title}</h2>
                        <div className="card-content"> $ {item.price}</div>
                        <button className="btn btn-warning" onClick={()=>handleRemove(index)}>delete</button>
                    </div>
                </div>
            ))
        }
    </div>
    </>
  )

}

export default Cart