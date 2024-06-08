import React, {Fragment} from "react";
import Header from "./structure/header";
import Body from "./structure/body";
import Footer from "./structure/footer";

const Main = () => {
    return(
        <Fragment>
            <Header />
            <Body />
            <Footer />
        </Fragment>
    );
}

export default Main;