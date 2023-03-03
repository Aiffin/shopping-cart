
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../features/cartSlice';
import {createProduct} from '../features/productSlice'
import { NavLink,useNavigate } from 'react-router-dom';

function Products() {

    const dispatch=useDispatch()
    const navigate = useNavigate()
    const product=useSelector((state)=>state.product)
   
    useEffect(()=>{
        dispatch(createProduct())
    },[]);

    const handleAdd=(item)=>{
        dispatch(add(item))
        navigate.push("/cart")
    }

  return (
    
        <div className="container">
            <div className="row">
                    
                        {product.loading && <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>}
                        {!product.loading && product.error ? <div>Error:{product.error}</div>:null}
                        {!product.loading && product.data.length ? (
                            product.data.map((item,index)=>{
                                return <div className="col-12 col-md-3 g-5" key={index}>
                                
                                <div className="card h-100 d-flex flex-column">
                                <img src={item.image} style={{width:"100px"}} className="card-img-top h-100 mx-auto mt-3" alt="market" />
    
                                <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                    <p>{item.category}</p>
                                    <div className="card-content"> $ {item.price}</div>
                                    <button onClick={()=>handleAdd(item)} className="btn btn-primary " >Add Cart</button><br></br>
                                    <NavLink to={`/singleProduct/${item.id}`} className="btn btn-primary " >Detail</NavLink>

                                </div>
                            </div>
                        
                        
                        </div>

                        })
                        ):null}
                    
                </div>
        </div>
    
  )
}

export default Products