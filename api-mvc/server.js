const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const router = require('./routes/authroutes');

app.use(cors());
app.use(express.json());


// Rotas
app.use('/', router);


// App
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
