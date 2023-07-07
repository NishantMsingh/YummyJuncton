import React, { useContext, useState } from 'react';
import CartContext from '../../../Store/cart-context';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm(props) {
  const cartCtx = useContext(CartContext);
  const [defValue, setDefValue] = useState('1');

  const onAddItemToCart = (e) => {
    e.preventDefault();
    cartCtx.addItem({ ...props.value, amount: +defValue });
  };

  const inputChangeHandler = (e) => {
    setDefValue(e.target.value);
  };

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: 'amount' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: defValue,
          onChange: inputChangeHandler
        }}
      />

      <button onClick={onAddItemToCart}> + Add</button>
    </form>
  );
}
