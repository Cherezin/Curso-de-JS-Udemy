const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

module.exports = route;

//Rotas da home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.homePage);
