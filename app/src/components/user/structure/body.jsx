import React, {Fragment} from "react";
import HeaderUser from "./header";
import Body from "../../structure/body";
import Footer from "../../structure/footer";

const UserBody = () => {
    return(
        <Fragment>
            <HeaderUser />
            <Body />
            <Footer />
        </Fragment>
    );
}

export default UserBody;