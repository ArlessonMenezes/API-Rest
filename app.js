const express = require('express');
const app = express();
const port = 3000;
const cors  = require('cors');

const gamesController = require('./Controllers/gameController');
const connection = require('./Database/database');

connection.authenticate()
    .then(() => console.log('Conexão realizada com o banco de dados!'))
    .catch(err => console.log(err));

app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.use('/', gamesController);


app.listen(port, () => console.log('API ON!'));