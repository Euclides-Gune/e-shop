import React, {Fragment} from 'react';
import Header from '../structure/header';
import Footer from '../structure/footer';
import SignIn from './sign-in';

export default function MainSignIn() {
    return(
        <Fragment>
            <Header />
            <SignIn />
            <Footer />
        </Fragment>
    );
}