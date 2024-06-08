const express = require('express');
const Cart = require('../models/cart');
const { removeCart } = require('../functions/function');
const routerCart = express.Router();
const upload = require('../multer');
const cloudinary = require('../cloudinary');
const fs = require('fs');

routerCart.get('//', async (req, res) => {
    try {
        const cart = await Cart.find({});
        res.status(200).json(cart);
    } catch(error) {
        res.status(500).json(error);
    }
});

routerCart.post('/adicionar-carinho', upload.single('image'), async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.status(200).json(cart);
    } catch(error) {
        res.status(200).json(error);
    }
});

routerCart.post('/remover-carrinho/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const cart = await removeCart(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
}); 

module.exports = routerCart;