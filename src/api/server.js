const bodyParser = require('body-parser');
const app = require('./app');
const routes = require('../routes/index');

const PORT = 3000;

app.use(bodyParser.json());
app.post('/users', routes.createUser);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
