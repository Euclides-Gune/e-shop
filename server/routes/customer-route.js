const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');
const { deleteCustomer } = require('../functions/function');

router.post('/entrar', async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const customer = await Customer.find({ name : name});
        const confirmedUser = name == customer[0].name && password == customer[0].password ? true : false;

        if(confirmedUser) {
            res.status(200).json(customer);
        } else {
            res.status(401).json({error: "usuário não encontrado"});
        }

    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/cadastro', async (req, res) => {
    try {

        const name = req.body.name;
        const password = req.body.password;
        const customer = await Customer.find({ name : name });
        const customerPassword = await Customer.find({ password: password });
        
        if(customer.length == 0 && customerPassword.length == 0) {
            const newCustomer = await Customer.create(req.body);
            res.status(200).json(newCustomer);
        } else {
            res.status(401).json({error: 'Conta já cadastrada'});
        }
        
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/remover-conta', async (req, res) => {
    try {
        const name = req.body.name;
        const password = req.body.password;
        const customer = await Customer.find({name: name});

        const confirmedCustomer = name == customer[0].name && password == customer[0].password ? true : false;

        if(confirmedCustomer) {
            const removedCustomer = await deleteCustomer(name);
            res.status(200).json(removedCustomer);
        } else {
            res.status(401).json({error: 'Usuário não encontrado!'});
        }

    } catch(error) {
        res.status(500).json(error);
    }
});

module.exports = router;