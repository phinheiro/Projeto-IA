// importa pacotes/arquivos que serão utilizados
const express = require('express');
const LocationController = require('./controllers/LocationController')

// instancia a função de roteamento do express
const routes = express.Router();

//define o metodo http e o path para acessar essa rota
routes.post('/send', LocationController.sendImage);

// exporta a classe
module.exports = routes;