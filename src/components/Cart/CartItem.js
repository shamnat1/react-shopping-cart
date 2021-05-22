import {useDispatch} from 'react-redux';
import {cartActions} from '../../redux/cart-slice'
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { id, name, count, totalPrice, price } = props.item;
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(cartActions.addItemToCart(props.item))
  }
  const removeHandler = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item} key={classes.item.id}>
      <header>
        <h3>{name}</h3>
        <div className={classes.actions}>
          <button onClick={removeHandler}>-</button>
          <span>{count}</span>
          <button onClick={addHandler}>+</button>
        </div>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
     
      
    </li>
  );
};

export default CartItem;
