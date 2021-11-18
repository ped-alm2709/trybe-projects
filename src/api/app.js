const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRoutes = require('../routes/users');
const loginRoute = require('../routes/login');
const recipesRoutes = require('../routes/recipes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/teste', (req, res) => res.send('funfando'));
// app.use('/users', usersRoutes);
// app.use('/login', loginRoute);
// app.use('/recipes', recipesRoutes);
// // ajuda de Anderson Silva - Turma 11
// app.use('/images', express.static(path.join(__dirname, '..', 'uploads')));

// middleware para tratamento de erros
app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

module.exports = app;
