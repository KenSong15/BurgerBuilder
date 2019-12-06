import React, {Component} from "react";
import Auxi from "./../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={...};

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            meat: 1
        }
    };

    render() {
        return (
            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Auxi>
        );
    }
}

export default BurgerBuilder;
