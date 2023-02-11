
import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../features/cartSlice';

function Products() {

    const dispatch=useDispatch()
    const [product,setProduct]=useState([]);

    const datafetch=async()=>{
       const data = await axios.get(`https://fakestoreapi.com/products`).then((res)=>res.data)
       console.log(data)
        setProduct(data)
    }


    useEffect(()=>{
       datafetch()
    },[]);

    const handleAdd=(item)=>{
        dispatch(add(item))
    }

  return (
    
        <div className="container">
            <div className="row">
                    {
                        product.map((item,index)=>{
                            return <div className="col-12 col-md-3 g-5" key={index}>
                            
                            <div className="card h-100 d-flex flex-column">
                            <img src={item.image} style={{width:"100px"}} className="card-img-top h-100 mx-auto mt-3" alt="market" />

                            <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                                <p>{item.category}</p>
                                <div className="card-content"> $ {item.price}</div>
                                <button onClick={()=>handleAdd(item)} className="btn btn-primary " >Add Cart</button>
                            </div>
                        </div>
                        
                        </div>

                        })
                    
                    }
                </div>
        </div>
    
  )
}

export default Products