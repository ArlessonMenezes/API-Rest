const express = require('express');
const app = express();
const port = 3000;

const gamesController = require('./Controllers/gameController');
const connection = require('./Database/database');

connection.authenticate()
    .then(() => console.log('Conexão realizado com o banco de dados!'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.use('/', gamesController);


app.listen(port, () => console.log('API ON!'));