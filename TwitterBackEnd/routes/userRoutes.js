const express = require('express');
const { newUserController, getUserController, loginController } = require('../controllers/users');

const userRoutes = express.Router();

//Endpoints
userRoutes.route('/').post(newUserController);
userRoutes.route('/:id').get(getUserController);
userRoutes.route('/login').post(loginController);


module.exports = userRoutes;