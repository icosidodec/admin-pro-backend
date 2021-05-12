require('dotenv').config();

const express = require('express');
const cors = require('cors');


const { dbConnection } = require('./database/config');

// crear el servidor express
const app = express();

// Configurar CORS
app.use(cors());

// Base de datos
dbConnection();

console.log(process.env);

//rutas
app.get( '/', (req, res) => {
    res.json( {
        ok:true,
        msg: 'hola mundo'
    })
})



app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto', process.env.PORT);
})