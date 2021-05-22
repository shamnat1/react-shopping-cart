import {useDispatch,useSelector} from 'react-redux';
import {uiActions} from '../../redux/ui-slice'
import {cartActions} from '../../redux/cart-slice'
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const {items,totalItems,totalCartPrice} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const onCloseHandler = () => {
    dispatch(uiActions.toggle());
  }
  const checkoutHandler = () => {
    dispatch(cartActions.checkoutItems());
  }
  return (
    <Modal onClose={onCloseHandler}>
      <Card className={classes.cart}>
        <div className={classes.cart_list_line}>
          <h2>My Cart</h2>
          <span className={classes.cart_item_count}>{totalItems} items</span>
        </div>
        <ul>
          {items && items.map(item => (
            <CartItem
            item={item} cartPrice={totalCartPrice}
          />
          ))}
          
        </ul>
          <footer>
            <div className={classes.cart_footer}>
              <h4>Total :</h4>
              <span className={classes.price_tag}>${totalCartPrice.toFixed(2)}{' '}</span>
            </div> 
          <button className={classes.checkout_button} onClick={checkoutHandler}>Checkout</button>
          </footer>
      </Card>
      
    </Modal>
  );
};

export default Cart;
