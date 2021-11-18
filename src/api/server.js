const bodyParser = require('body-parser');
const app = require('./app');
const routes = require('../routes/index');
const confirmData = require('../middlewares/confirmData');
const { validateToken } = require('../middlewares/token');

const PORT = 3000;

app.use(bodyParser.json());

app.post('/users', routes.createUser);

app.post('/login', confirmData, routes.login);

app.post('/recipes', validateToken, routes.createRecipe);

app.use((err, _req, res, _next) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
