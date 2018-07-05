'use strict'

var moongose = require ('mongoose');
var port = 3000;
var app = require('./app');

moongose.Promise = global.Promise;
moongose.connect('mongodb://localhost:27017/zoo')
    .then(() =>{
        console.log('la conexion  ha mongo a sido exitosa');
        app.listen(port,()=>{
            console.log('el servidor de node y express esta corriendo');
        });
    })
    .catch(err=> console.log(err));