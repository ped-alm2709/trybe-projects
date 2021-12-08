const express = require('express');
const userRoutes = require('./routes/userRoutes');
// const loginRoutes = require('./routes/loginRoutes');
// const categoriesRoutes = require('./routes/categoriesRoutes');
// const postRoutes = require('./routes/postRoutes');

require('dotenv').config();

const app = express();

// Fonte: https://pt.stackoverflow.com/questions/402275/o-que-significa-na-pr%C3%A1tica-o-urlencoded-do-expressjs

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoutes);
// app.use('/login', loginRoutes);
// app.use('/categories', categoriesRoutes);
// app.use('/post', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Aplicação rodando na porta 3000!'));
