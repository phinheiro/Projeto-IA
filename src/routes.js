const express = require('express');
const vision = require('@google-cloud/vision');
const LocationController = require('./controllers/LocationController')

const routes = express.Router();

routes.post('/send', LocationController.sendImage);

module.exports = routes;