const express = require('express');
const routerHelloWorld = express.Router();
const {controllerHelloWorld} = require('../controllers/controller');

routerHelloWorld.get('/', controllerHelloWorld);

module.exports = {routerHelloWorld};