const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')
const {middlewareGlobal} = require('./src/middlewares/middleware')

module.exports = route;

//Rotas da home
route.get('/', middlewareGlobal, homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.homePage);
