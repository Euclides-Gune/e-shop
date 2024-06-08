import React, {Fragment, useState, useEffect} from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import '../style.css';

const Cart = (props) => { 

    const [product, setProduct] = useState(null);

    const removeProduct = () => {
        axios.get('http://localhost:5000//').then(response => {
            response.data.forEach(data => {
                if(data.title == props.title) {
                    axios.post(`http://localhost:5000/remover-carrinho/${data._id}`, data).then(response => {
                        console.log(response);
                        alert('Producto removido do carrinho, recarregue a página');
                    }).catch(error => {
                        console.log(error);
                        alert('Erro ao remover producto do carrinho');
                    });
                }
            });
        }).catch(error => console.log(error));
    }

    const buyProduct = () => {
        axios.get('http://localhost:5000//').then(response => {
            response.data.forEach(data => {
                if(data.title == props.title) {
                    setProduct(data);
                }
            });
        }).catch(error => console.log(error));
    }

    if(product == null) {
        return(
            <div className="col-lg-4 col-md-6">
                <div class="card my-2">
                    <img src={props.image} class="card-img-top my-image" alt="Imagens dos productos"></img>
                    <div class="card-body">
                        <h3 class="card-title text-center">{props.title}</h3>
                        <div className="row text-center">
                            <div className="col-lg-12 mb-2">
                                <button onClick={buyProduct} className='btn btn-dark my-4-btn'>Comprar</button>
                            </div>
                            <div className="col-lg-12">
                                <input type='button' onClick={removeProduct} className='btn btn-dark my-4-btn' value='Remover do carrinho' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <Navigate to={`/product/${product._id}`} />
        );
    }
}

export default Cart;