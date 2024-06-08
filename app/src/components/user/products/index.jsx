import React, {Fragment} from "react";
import AddProduct from "./add";
import HeaderUser from "../structure/header";
import Footer from "../../structure/footer";

const MainAddProduct = () => {
    return(
        <Fragment>
            <HeaderUser />
            <AddProduct />
            <Footer />
        </Fragment>
    );
};

export default MainAddProduct;