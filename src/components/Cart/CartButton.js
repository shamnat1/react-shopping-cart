import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import {uiActions} from '../../redux/ui-slice';
import { Icon } from '@iconify/react';
import shoppingCart from '@iconify-icons/feather/shopping-cart';
const CartButton = (props) => {
  const totalItems = useSelector(state=>state.cart.totalItems)
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <>
      <Icon className={props.iconClass} icon={shoppingCart} onClick={toggleHandler}></Icon>
      <span className={`${classes.badge} ${classes["badge-warning"]}`} id='lblCartCount'> {totalItems} </span>
    </>
  );
};

export default CartButton;