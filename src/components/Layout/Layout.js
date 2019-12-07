import React, {Component} from "react";
import Auxi from "./../../hoc/Auxi";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "./../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {showSideDrawer: true};

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (
            <Auxi>
                <Toolbar />
                <SideDrawer
                    closed={this.SideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <main className={classes.Content}>{this.props.children}</main>
            </Auxi>
        );
    }
}

export default Layout;
