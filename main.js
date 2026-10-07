const express = require('express');
const authRoute = require('./routes/auth.routes');

const APP = express();
APP.use(express.json());
APP.use(authRoute);


const PORT = 3000;
const SERVER = "localhost";
const MSG = `Servidor online em ${SERVER}: ${PORT}`;



























APP.listen( PORT , () => console.log(MSG));