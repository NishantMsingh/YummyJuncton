import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const HeaderCartButton = (props) => {
  const cartCtx=useContext(CartContext);
  const numberOfCartItems=cartCtx.items.reduce((curnum,item)=>{
    return curnum + item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
