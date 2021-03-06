import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/Burgeringredient";

const burger = props => {
    let transfomedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transfomedIngredients.length === 0) {
        transfomedIngredients = <p>Please start adding ingredients~</p>;
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transfomedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;
