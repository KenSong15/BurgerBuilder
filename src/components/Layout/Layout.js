import React, {Component} from "react";
import Auxi from "../../hoc/Auxi";

import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {showSideDrawer: false};

    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    SideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render() {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
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
