import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items : [],
    totalItems : 0,
    totalCartPrice : 0
};
const cartSlice = createSlice ({
    name:"cart",
    initialState,
    reducers : {
        replaceCart(state,action){
            state.items = action.payload.map((item,index )=> {
                return {...item,id:index,totalPrice:item.price}
            })
            
            state.totalItems = action.payload.reduce((acc,item)=>acc+item.count,0)
            state.totalCartPrice = action.payload.reduce((acc,item)=>acc+item.price,0)
        },
        addItemToCart(state,action){
            
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if(!existingItem){
                state.items.push(newItem);
            }
            if(existingItem){
                existingItem.count++;
                existingItem.totalPrice += existingItem.price;
            }
            state.totalItems++;
            state.totalCartPrice +=newItem.price;
        },
        removeItemFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            console.log(existingItem.price,id,existingItem.totalPrice)
            if(existingItem){
                if(existingItem.count === 1){
                    state.items = state.items.filter(item=>item.id !== existingItem.id) 
                }else{
                    existingItem.count--;
                    existingItem.totalPrice -=existingItem.price;
                }

                state.totalItems--;
                state.totalCartPrice -= existingItem.price;
                    
                
            }
        },
        checkoutItems(state){
            state.items = [];
            state.totalItems = 0;
            state.totalCartPrice = 0;
        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;