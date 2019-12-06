import React from "react";
import Auxi from "../../../hoc/Auxi";
import Button from "./../../UI/Button/Button";

const OrderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransform: "capitalize"}}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Auxi>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientSummary}</ul>
            <p>
                <strong>Total comes to: {props.prices.toFixed(2)}</strong>
            </p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>
                CANCEL
            </Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>
                CONTINUE
            </Button>
        </Auxi>
    );
};

export default OrderSummary;
