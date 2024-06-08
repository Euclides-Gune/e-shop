import React, {useState} from "react";
import axios from "axios";
import '../style.css';

const Card = (props) => {

    const addToCart = (e) => {
        e.preventDefault();
        axios.get('http://localhost:5000').then(result => {
            result.data.forEach(async data => {
                if(data.title === props.title) {
                    console.log(data);
                    data.cart = true;
                    const response = await axios.post('http://localhost:5000/adicionar-carinho', data);
                    console.log(response.data);
                    alert('Producto adicionado ao carrinho');
                }
            })
        }).catch(error => console.log(error));
    }

    return(
        <div className="col-lg-4 col-md-6">
            <div class="card my-2">
                <img src={props.image} className="card-img-top my-image" alt="Imagens dos productos"></img>
                <div class="card-body">
                    <h3 class="card-title text-center">{props.title}</h3>
                    <div className="row text-center">
                        <div className="col-lg-12">
                            <h4>{props.price} mts</h4>
                        </div>
                        <div className="col-lg-12 mb-2">
                        <button onClick={addToCart} className='btn btn-dark my-4-btn'>Adicionar ao carrinho</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;