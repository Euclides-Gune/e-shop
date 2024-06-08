import React, {Fragment, useState} from "react";
import '../style.css';
import axios from "axios";
import { Navigate } from "react-router-dom";

const SignIn = (props) => {

    const [user, setUser] = useState({name: "", password: ""});
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [userConfirmed, setUserConfirmed] = useState(null);

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
        setError('');
        setSuccess('');
    };

    const findUser = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:5000/entrar", user, {
            headers: {'Content-Type': 'application/json'}
            });
            setSuccess('Login efectuado com sucesso');
            setTimeout(() => {
                setUserConfirmed(response.data[0]);
            }, 2000);
        } catch(error) {
            if(error.response.status == 401) {
                setError('Senha ou nome incorrectos');
            } else {
                setError('Erro ao connectar à base de dados');
            }
        }

        setUser({name: "", password: ""});
    }
        
    if(userConfirmed == null) {
        return(
            <Fragment>
                <h1 className="text-center mt-4">Entre na sua conta</h1>
                <div className="content py-4 border">
                    <form onSubmit={findUser}>
                        <div className='mb-4 col-12'>
                            <label htmlFor='name' className='form-label'>Nome </label>
                            <input type='text' name='name' id='name' value={user.name} onChange={handleChange} required className='form-control' placeholder='Euclides'/>
                        </div>
                        <div className='mb-4 col-12'>
                            <label htmlFor='password' className='form-label'>Senha </label>
                            <input type='password' name='password' id='password' value={user.password} onChange={handleChange} required maxLength="6" className='form-control' placeholder='123456'/>
                        </div>
                        <div className='mt-3 col-12'>
                            <input type='submit' className='btn btn-dark my-4-btn' value="Entrar"/>
                        </div>
                    </form>
                <p className="text-danger my-3 text-center">{error}</p>
                <p className="text-success my-1 text-center">{success}</p>
                </div>
                <div className="container w-50 mx-auto">
                <a href="/cadastro" className="btn btn-primary"><p>Não tem uma conta? Cadastre-se</p></a>
            </div>
        </Fragment>
        );
    } else {
        return(
                <Navigate to={`/user/${userConfirmed._id}`} />
        );
    }
}

export default SignIn;