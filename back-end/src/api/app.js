const express = require('express');

const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const user = require('./routes/users');
const products = require('./routes/products');

app.use('/', user);
app.use('/products', products);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta: ${PORT}`);
});

module.exports = app;
