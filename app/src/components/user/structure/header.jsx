import React, {Fragment} from "react";

const HeaderUser = (props) => {
    return(
        <Fragment>
            <nav className="navbar bg-dark navbar-dark navbar-expand-sm py-4 sticky-top">
                <div className="container-fluid">
                    <h5 className="navbar-brand">E-Shop</h5>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavBar" > <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="menuNavBar">
                        <div className="navbar-nav ms-auto">
                            <a href="/" className="nav-link"><i className="bi bi-house"></i> Casa</a>
                            <a href="/carrinho" className="nav-link">
                            <i className="bi bi-cart4"></i>
                                Carrinho</a>
                            <a href="/user/adicionar-produto" className="nav-link"><i className="bi bi-bag-plus-fill"></i> Adicionar producto</a>
                            <a href="/sobre-nós" className="nav-link">Sobre nós</a>
                            <div className="dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="bi bi-person"></i>
                                    Conta</a>
                                <ul className="dropdown-menu dropdown-menu-end p-2">
                                    <li className="drpodown-item">
                                        <a href="/" className="link-css">Sair</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default HeaderUser;