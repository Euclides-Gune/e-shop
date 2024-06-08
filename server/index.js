require('./db');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/customer-route');
const routes = require('./routes/product-route');
const routerCart = require('./routes/cart-route');

app.use(express.json()); 
app.use(cors());
app.use('/', router);
app.use('/', routes);
app.use('/', routerCart);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Servidor rodando na porta http://localhost:${port}`));