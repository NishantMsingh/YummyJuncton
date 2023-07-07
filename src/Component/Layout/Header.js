import classes from "./Header.module.css";
import React from 'react'
import mealsImage from "../../Assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton";

const Header=props=>{

    return <React.Fragment>
        <header className={classes.header}>
            <h1> <span className={classes.left}>Yummy</span> <span className={classes.right}>Junction</span></h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="Yummy Junction" />
        </div>
    </React.Fragment>
}
export default Header;