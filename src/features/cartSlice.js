import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"

const initialState={
    cartItems:localStorage.getItem("cartItems") 
    ? JSON.parse(localStorage.getItem("cartItems"))
    :[],
    cartTotalQuantity:0,
    cartTotalAmount:0,
    isLoading:true
};

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{

        add(state,action){
            const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)

            if(itemIndex >=0 )
            {
                state.cartItems[itemIndex].cartQuantity +=1;
                toast.info(`increase ${state.cartItems[itemIndex].title} quantity`,{position:"bottom-left"})
            }
            else{
                const tempProduct = {...action.payload,cartQuantity:1};
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.title} to cart`,{position:"bottom-left"})   
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        remove(state,action){
           state.cartItems.splice(action.payload,1)
           toast.error(`${action.payload.title} to remove`,{position:"bottom-left"})   
           localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        clearCart(state){
            state.cartItems=[]
            toast.error("clear cart",{position:"bottom-left"})   
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
      
        decrement(state,action){
            const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id);

            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity -=1
                toast.info(`decrease ${state.cartItems[itemIndex].title} quantity`,{position:"bottom-left"})

            }
            else if(state.cartItems[itemIndex].cartQuantity===1){
                const nextCartItems=state.cartItems.filter((item)=>(item.id)!==action.payload.id)
                state.cartItems=nextCartItems
                toast.error(`${action.payload.title} to remove`,{position:"bottom-left"})   

            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

            },

        getTotals(state,action){
            let {total,quantity}=state.cartItems.reduce((cartTotal,cartItem)=>{
                const {price,cartQuantity}=cartItem;
                const itemTotal=price*cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity;

                return cartTotal;
            },
            {
                total:0,
                quantity:0
            });

            state.cartTotalQuantity=quantity;
            state.cartTotalAmount=total;
        }


        }
    
})

export const {add,remove,clearCart,decrement,getTotals}=cartSlice.actions

export default cartSlice.reducer