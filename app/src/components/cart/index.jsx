import React, {Fragment, useState, useEffect} from "react";
import Header from "../structure/header";
import Footer from "../structure/footer";
import Cart from "./cart";
import '../style.css';
import axios from "axios";

const ShowCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000//').then(response => setCart(response.data)).catch(error => console.log(error));
    }, []);

    const cartEmptyOrNot = () => {
        if(cart.length == 0) {
            return(
                <Fragment>
                    <h1 className="mt-4 text-center">Carrinho vazio</h1>
                    <a href="/" className="btn btn-dark mt-5 p-5"><p>Volte a página principal e adicione productos ao carrinho</p></a>
                </Fragment>
            );
        } else {
            return(
                <div className="row">
                    {cart.map(cart => <Cart image={cart.image} title={cart.title} description={cart.description} quanity={cart.quantity}/>)}
                </div>
            );
        }
    }

    return(
        <Fragment>
            <Header />
            <h1 className="text-center mt-4">Productos adicionados ao carrinho</h1>
            <div className='container w-75 my-3'>
                <div className="row">
                {cartEmptyOrNot()}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
}

export default ShowCart;