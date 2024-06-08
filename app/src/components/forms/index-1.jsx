import React from "react";
import Header from "../structure/header";
import Footer from "../structure/footer";
import SignUp from "./sign-up";

export default function MainSignUp() {

    return(
        <div>
            <Header />
            <SignUp/>
            <Footer />
        </div>
    );
}