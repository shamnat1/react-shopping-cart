import {cartActions} from './cart-slice';

export const fetchCartData = () => {
    return async(dispatch) => {
        console.log("fetchCartData")
        const fetchData = async() => {
                const response = await fetch('./assets/shopping_cart_items.json');
                if(!response.ok){
                    return new Error("fetching Failed")
                }
                const data = response.json();
                return data;
            }
        try{
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData.shopping_cart_items||[]));
        }catch(error){
            console.log(error)
        }    
        
        
    }
}