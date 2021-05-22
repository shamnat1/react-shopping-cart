import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items : [
            {
                "id":1,"name": "item 1", "count": 1, "price": 339.99,"totalPrice": 339.99
            }, 
            {
                "id":2,"name": "item 2", "count": 1, "price": 129.29,"totalPrice": 129.29
            },
            {
                "id":3,"name": "item 3", "count": 1, "price": 669.99,"totalPrice": 669.99
            },
            {
                "id":4,"name": "item 4", "count": 1, "price": 999.99,"totalPrice": 999.99
            }
        ],
    totalItems : 4,
    totalCartPrice : 2139.26
};
const cartSlice = createSlice ({
    name:"cart",
    initialState,
    reducers : {
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
            if(existingItem){
                if(existingItem.count === 1){
                    state.items = state.items.filter(item=>item.id !== existingItem.id) 
                }else{
                    existingItem.count--;
                    state.totalPrice -=existingItem.price;
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