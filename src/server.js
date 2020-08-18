const express = require('express');
const cors = require('cors');
const routes = require('./routes');

// instancia o framework
const app = express();

// habilita o cors na aplicação
app.use(cors());
// habilita a interpretação de json no express
app.use(express.json());
// delega o roteamento para o arquivo routes.js
app.use(routes);

// faz a aplicação escutar a porta 5000
app.listen(5000);