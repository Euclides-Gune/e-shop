const {ObjectId} = require('mongodb');
const Product = require('../models/product');
const Customer = require('../models/customer');
const Cart = require('../models/cart');
require('dotenv').config();
const db = require('../db');

function remove(id) {
    console.log(id);
    return Product.deleteOne( { _id: new ObjectId(id) } )
}

function deleteCustomer(name) {
    return Customer.deleteOne({ name: name });
}

function removeCart(id) {
    return Cart.deleteOne( { _id: new ObjectId(id) } );
}

module.exports = {remove, deleteCustomer, removeCart};