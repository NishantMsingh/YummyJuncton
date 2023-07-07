import Modal from '../UI/Modal';
import React, { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartItemCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartItemCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={() => cartItemCtx.removeItem({...item, amount: 1 })}
          onAdd={() => cartItemCtx.addItem({...item, amount: 1 })}
        />
      ))}
    </ul>
  );

  const totalAmount = cartItemCtx.items.reduce((curnum, item) => {
    return curnum + item.price*item.amount;
  }, 0);

  return (
    <Modal onClick={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)} INR</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
