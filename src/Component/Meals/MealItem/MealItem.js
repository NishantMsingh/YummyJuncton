import React from 'react'
import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm';

export default function MealItem(props) {
  const price =`$${props.price.toFixed(2)}`;
  return (
   <li className={classes.meal}> 
    <div> 
    <h5>{props.name}</h5>
    <div className={classes.description}>{props.description}</div>
    <div className={classes.price}>{price}</div>
    </div>
    <MealItemForm id={props.id} value={props}/>
   </li>
  )
}
