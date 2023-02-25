import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const createProduct=createAsyncThunk(
    "fetchproducts",
    async ()=>{
        const {data}= await axios.get(`https://fakestoreapi.com/products`)
        console.log(data)
        return data
    }
)

export const singleProduct=createAsyncThunk(
    "singleProduct",
    async(id)=>{
        try {
            const {data}=await axios.get(`https://fakestoreapi.com/products/${id}`)
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        loading:false,
        error:""
    },
    reducers:{
       setProduct(state,action){
            state.data=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(createProduct.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(createProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        })
        builder.addCase(createProduct.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
        builder.addCase(singleProduct.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(singleProduct.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.error=''
        })
        builder.addCase(singleProduct.rejected,(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=action.error.message
        })
    }
})

export const {setProduct}=productSlice.actions

export default productSlice.reducer