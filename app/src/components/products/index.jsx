import React, {useState, Fragment, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../structure/header';
import Footer from '../structure/footer';
import ProductRenderized from './product';
import '../style.css';

const Product = (props) => {

    const [purchase, setPurchase] = useState({name: "", email: "", senha: "", paymentMethod: ""});
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    const handleChange = e => setPurchase({...purchase, [e.target.name]: e.target.value});

    useEffect(() => {
        axios.get(`http://localhost:5000/${id}`).then(response => {
            console.log(response.data);
            setProduct(response.data);
        }).catch(error => console.log(error));
    }, []);

    if(product == null) {
        return(
            <div>
                <Header />
                    <h1 className='py-5 mt-5 mb-5 text-center text-dark'>Carregando...</h1>
                    <p className='my-5 text-dark text-center'>Por favor aguarde um momento enquanto carregamos o producto...</p>
                <Footer />
            </div>
        );
    } else {
        return(
            <div>
                <Header />
                <div className='container py-5 w-75 mt-5'>
                    <div className="row">
                        <ProductRenderized image={product.image} title={product.title} description={product.description} price={product.price}/>
                        <div className="col-lg-6 col-sm-12 border py-1">
                            <h3 className='text-center mt-1'>Comprar</h3>
                            <form>
                                <div className='mb-3'>
                                    <label htmlFor='name' className='form-label'>Nome </label>
                                    <input type='text' name='name' id='name' className='form-control' value={purchase.name} onChange={handleChange}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='email' className='form-label'>Email </label>
                                    <input type='text' name='email' id='email' className='form-control' value={purchase.email} onChange={handleChange}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='senha' className='form-label'>Senha </label>
                                    <input type='password' name='senha' id='senha' className='form-control' value={purchase.senha} onChange={handleChange}/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='paymentMethod' className='form-label'>Meio de pagamento </label>
                                    <select className='form-control'>
                                        <option>M-PESA</option>
                                        <option>E-MOLA</option>
                                        <option>M-KESH</option>
                                    </select>
                                </div>
                                <div>
                                    <input type='submit' className='my-3-btn btn btn-primary' value="Comprar"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Product;