import React, {Fragment, useState, useEffect} from 'react';
import Card from '../shared/card';
import '../style.css';
import axios from 'axios';

const Body = (props) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/').then(response => setProducts(response.data)).catch(error => {
            if(error.status == 400) {
                setError(true);
            } else {
                setError(false);
            }
        });
    }, []);

    const doesItHaveSomeProduct = () => {
        if(products.length == 0) {
            return(
                <div className='container py-5 mt-5'>
                    <h1 className='text-center text-dark mt-5'>Erro ao carregar productos da base de dados</h1>
                     <p className='mt-5 text-center text-dark'>Verifique a sua conexão à Internet</p>
                </div>
            );
        } else if(error) {
            return(
                <div className='container py-5 mt-5'>
                    <h1 className='text-center text-dark mt-5'>Página sem productos</h1>
                     <p className='mt-5 text-center text-dark'>Crie uma conta e adicione productos a página</p>
                </div>
            );
        } else {
            return(
                <div className="row">
                    {products.map(products => <Card title={products.title} image={products.image} price={products.price}/>)}
                </div>
            );
        }
    }

    return(
        <div className='container w-75 mt-3 mb-5' id='main'>
            {doesItHaveSomeProduct()}
        </div>
    );
}

export default Body;