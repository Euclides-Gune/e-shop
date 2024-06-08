import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../components";
import MainSignUp from "../components/forms/index-1";
import MainSignIn from "../components/forms/index-2";
import ShowCart from "../components/cart";
import UserBody from "../components/user/structure/body";
import MainAddProduct from "../components/user/products";
import AboutUs from "../components/about";
import Product from "../components/products";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/cadastro" element={<MainSignUp />} />
                <Route path="/entrar" element={<MainSignIn />} />
                <Route path="/carrinho" element={<ShowCart />} />
                <Route path="/user/adicionar-produto" element={<MainAddProduct />} />
                <Route path="/user/:id" element={<UserBody />} />
                <Route path="/sobre-nós" element={<AboutUs />} />
                <Route path="/product/:id" element={<Product />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;