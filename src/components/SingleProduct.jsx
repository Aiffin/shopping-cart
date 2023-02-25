import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleProduct } from '../features/productSlice'

function SingleProduct() {
    const dispatch=useDispatch()

    const {id} =useParams()

    const product=useSelector((state)=>state.product.data)

    console.log(product)

    useEffect(()=>{
        dispatch(singleProduct(id))
    },[dispatch,id])

  return (
    <div className="container">
        <div className="row">
            <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                    <div className="card-title">{product.title}</div>
                        <div className="card-content">price:{product.price}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct