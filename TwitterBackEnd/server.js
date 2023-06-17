require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const userRoutes = require('./routes/userRoutes');
const tweetsRoutes = require('./routes/tweetsRoutes');

const app = express();

app.use(fileUpload()); //Con este paquete subimos los ficheros
app.use(express.json()); //Con este leemos formatos JSON
app.use(morgan('dev')); //Sirve para generar registro de acceso en terminal
app.use('uploads', express.static('./uploads')); //Sirve para subir ficheros

//Ruta del user
app.use('/user', userRoutes);

//Rutas de tweets
app.use('/tweets', tweetsRoutes);

//Middleware de 404
app.use((req, res) => {
    res.status(404).send({
        status: 'error',
        message: 'Not Found',
    });
});

//Middleware de gestion de errores
app.use((error, res, next) => {
    console.error(error);

    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
    });
});

//Lanzamos el servidor
app.listen(3000, () => {
    console.log('Servidor funcionando!! 😊');
})