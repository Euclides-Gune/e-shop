import React from "react";
import '../style.css';

const Footer = (props) => {
    return(
        <div className="footer bg-dark text-white">
            <div className="row">
                <div className="col-lg-12 text-center mb-3">
                    <a href="/" data-bs-target="#main" className="turn-h5"><h5>Voltar para o início</h5></a>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-2">
                    <h5>Productos do site</h5>
                    <p> Os produtos acima não estão realmente a venda, este site foi feito para demonstração</p>
                </div>
                <div className="col-lg-6">
                    <h5>O site</h5>
                    <p>Este site foi feito pela AE-Services, cujas redes sociais são:</p>
                    <ul>
                        <li><a href="https://www.instagram.com/euclidesgune?igsh=Y2IsOW9keXo5cHZr&utm_source=qr" target="blank" className="link-media">Instagram</a></li>
                        <li><a href="https://github.com/" target="blank" className="link-media">Github</a></li>
                        <li><a href="mailto:es7.comercial@gmail.com" target="blank" className="link-media">Email</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;