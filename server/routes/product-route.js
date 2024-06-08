const express = require('express');
const routes = express.Router();
const Product = require('../models/product');
const upload = require('../multer');
const cloudinary = require('../cloudinary');
const fs = require('fs');
const { remove } = require('../functions/function');

routes.get('/', async (req, res) => {
    try {
        const product = await Product.find({});
        if(product.length == 0) {
            res.status(400).json({error: 'Lista de productos vazia'});
        } else {
            res.status(200).json(product);
        }
    } catch(error) {
        res.status(500).json({error: 'Falha ao carregar productos'});
    }
});

routes.post('/adicionar-producto', upload.single("image"), async (req, res) => {
    try {
        const { path } = req.file; 
        const result = await cloudinary.uploader.upload(path);
        const product = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: result.secure_url,
            cloudinary_id: result.public_id
        };
        const newProduct = await Product.create(product);
        fs.unlinkSync(path);
        res.status(200).json(newProduct);
    } catch (error) {
        res.status(500).json(error);
    }
});

routes.post('/remover-producto/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await remove(id);
        if(product) {
            res.status(200).json(product);
        } else {
            res.status(401).json({error: 'Producto não encontrado!'});
        }

    } catch(error) {
        res.status(200).json(error);
    }
});

routes.get('/:id', async (req, res) => {
    try {
        const { id } =  req.params;
        const product = await Product.findById(id);
        if(product) {
            res.status(200).json(product);
        } else {
            res.status(401).json({error: 'Producto não encontrado'});
        }
        
    } catch (error) {
       res.status(500).json(error); 
    }
});

module.exports = routes;