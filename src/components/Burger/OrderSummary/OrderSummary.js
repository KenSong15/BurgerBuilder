import React from "react";
import Auxi from "../../../hoc/Auxi";

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
            {/* <p>Continue to check out</p> */}
            <button>CANCEL</button>
            <button>CONTINUE</button>
        </Auxi>
    );
};

export default OrderSummary;
