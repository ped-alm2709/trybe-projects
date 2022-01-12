const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use('/images', express.static(path.join(__dirname, '..', '..', 'public')));
app.use(express.json());
app.use(cors());

const user = require('./routes/users');
const products = require('./routes/products');
const sales = require('./routes/sales');

app.use('/', user);
app.use('/products', products);
app.use('/sales', sales);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});

module.exports = app;
////