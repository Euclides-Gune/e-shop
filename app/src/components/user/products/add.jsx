import React, {Fragment, useState} from "react";
import '../style.css';
import axios from "axios";

const AddProduct = (props) => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const add = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('image', image);
        formData.append('description', description);
        formData.append('price', price);

        const headers = {
            'Content-Type': 'multipart/form-data'
        }

        try {
           const result = await axios.post('http://localhost:5000/adicionar-producto', formData, headers);
           console.log(result.data); 
           setSuccess('Producto adicionado a loja, volte a página principal');
        } catch (error) {
            console.log(error);
            setError('Erro ao adicionar producto a loja');
        }

        setTitle('');
        setImage('');
        setDescription('');
        setPrice('');
        
    }

    return(
        <Fragment>
            <h1 className="text-center my-4 text-primary">Adicione um producto a loja</h1>
            <div className="content border py-4">
                <form action="" method="post" onSubmit={add}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Nome do producto</label>
                        <input type="text" name="title" required className="form-control" onChange={e => {
                            setTitle(e.target.value);
                            setError('');
                            setSuccess('');
                        }} maxLength={18}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Imagem do producto</label>
                        <input type="file" name="image" className="form-control" onChange={e => {
                            console.log(e.target.files[0]);
                            setImage(e.target.files[0]);
                            setError('');
                            setSuccess('');
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Descrição do producto</label>
                        <textarea name="description" className="form-control" maxLength={600} required onChange={e => {
                            setDescription(e.target.value);
                            setError('');
                            setSuccess('');
                        }}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Preço</label>
                        <input type="text" name="price"className="form-control" maxLength={600} required onChange={e => {
                            setPrice(e.target.value);
                            setError('');
                            setSuccess('');
                        }}/>
                    </div>
                    <div className="mb-3 w-25 mx-auto text-center">
                        <input type="submit" className="btn btn-primary my-3-btn" value="Adicionar"/>
                    </div>
                    <p className="text-danger mt-2 text-center">{error}</p>
                    <p className="text-success text-center">{success}</p>
                </form>
            </div>
        </Fragment>
    );

};

export default AddProduct;