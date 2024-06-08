import React, {useState, Fragment} from 'react';
import { Navigate } from 'react-router-dom';
import '../style.css';
import axios from 'axios';

const SignUp = () => {

    const [user, setUser] = useState({name: "", password: "", confirmPassword: ""});
    const [userSigned, setUserSigned] = useState(null);

    const handleChange = e => {
        setUser({...user, [e.target.name]: e.target.value});
        setError('');
        setAnswerError('');
        setAnswerSuccess('');
    };

    const [error, setError] = useState('');
    const [answerError, setAnswerError] = useState('');
    const [answerSuccess, setAnswerSuccess] = useState('');

    const addUser = (e) => {
        e.preventDefault();
        let passwordConfirmed = user.password === user.confirmPassword ? true : false;
        if(passwordConfirmed){
            let confimedUser = {name :user.name, password: user.password};
            addNewUser(confimedUser);
        } else {
            setError('Senhas diferentes, as senhas dos dois campos devem ser as mesmas');
        }

        setUser({name: "", password: "", confirmPassword: ""});

    }

    const addNewUser = async (user) => {
          
        try {
            const response = await axios.post("http://localhost:5000/cadastro", user, {
                headers: {'Content-Type': 'application/json'}
            });
            setAnswerSuccess('Conta cadastrada com sucesso');
            setTimeout(() => {
                setUserSigned(response.data);
            }, 2000);
        } catch (error) {
            if(error.response.status == 401) {
                setAnswerError('Conta já cadastrada');
            } else {
                setAnswerError('erro a connectar ao servidor');
            }
        }
    }

    if(userSigned == null) {
        return(
            <Fragment>
                <h1 className='text-center mt-4'>Crie a sua conta aqui!</h1>
                <div className="content border py-4">
                    <div className="row">
                        <div className="col-12">
                        <form method='post' onSubmit={addUser} className="row">
                        <div className='mb-4 col-12'>
                            <label htmlFor='name' className='form-label'>Nome: </label>
                            <input type='text' name='name' id='name' value={user.name} onChange={handleChange} required className='form-control' placeholder='Euclides'/>
                        </div>
                        <div className='mb-4 col-12'>
                            <label htmlFor='password' className='form-label'>Senha: </label>
                            <input type='password' name='password' id='password' value={user.password} onChange={handleChange} required maxLength="6" className='form-control' placeholder='123456'/>
                        </div>
                        <div className='mb-4 col-12'>
                            <label htmlFor='confirmPassword' className='form-label'>Confirmar Senha: </label>
                            <input type='password' name='confirmPassword' id='confirmPassword' value={user.confirmPassword} onChange={handleChange} required maxLength="6" className='form-control' placeholder='123456'/>
                        </div>
                        <div className='mt-3 col-12'>
                            <input type='submit' className='btn btn-dark my-4-btn' value="Criar"/>
                        </div>
                        <p className='text-center text-danger mt-2'>{error}</p>
                        <p className='text-center text-danger'>{answerError}</p>
                        <p className='text-center text-success'>{answerSuccess}</p>
                    </form>
                    </div>
                    </div>
                </div>
            </Fragment>
        );
    } else {
        return(
            <Navigate to={`/user/${userSigned._id}`}/>
        );
    }
}

export default SignUp;