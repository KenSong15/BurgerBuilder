import React from "react";
import Auxi from "./../../hoc/Auxi";

import classes from "./Layout.css";

const layout = props => {
    return (
        <Auxi>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className={classes.Content}>{props.children}</main>
        </Auxi>
    );
};

export default layout;
