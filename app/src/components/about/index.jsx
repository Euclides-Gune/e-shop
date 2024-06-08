import React, {Fragment} from "react";
import Header from "../structure/header";
import Footer from "../structure/footer";

const AboutUs = () => {
    return(
        <Fragment>
            <Header />
            <div className="container mb-5 mt-5 p-5">
                <h1>A AE é uma empresa especializada em construção de websites de todos os tipos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum vitae maxime perspiciatis modi porro sit, aliquam, illo rerum odio voluptas voluptate quo a quisquam reprehenderit! Alias iusto earum quisquam.</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, sit! Nam impedit nihil dicta necessitatibus, non ducimus nobis, repudiandae accusamus deserunt eius maiores iusto autem odio facere provident totam. Expedita!
                </p>
            </div>
            <Footer />
        </Fragment>
    );
}

export default AboutUs;