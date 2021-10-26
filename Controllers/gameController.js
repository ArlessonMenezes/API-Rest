const express = require('express');
const router = express.Router();
const Game = require('../Model/Game');

//Criar dados
router.post('/game', (req, res) => {
    let { title, price, year } = req.body;
    if(title != undefined && price != undefined && year != undefined){
        Game.create({
            title,
            price,
            year
        }).then(() => {
            res.sendStatus(200);
        })
    } else {
        res.sendStatus(400);
    }
})

//Listar todos os dados
router.get('/games', (req, res) => {
    res.statusCode = 200;
    Game.findAll({
        order:[
            ['id', 'DESC']
        ]   
    }).then(result => res.json(result))
})

//Listar dados filtrados através do id
router.get('/game/:id', (req, res) => {
    
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        let id = parseInt(req.params.id);
        
        Game.findOne({
            where:{
                id: id,
            }
        }).then(result => {
            if(result != undefined){
                res.statusCode = 200;
                res.json(result);     
            } else {
                res.sendStatus(404);
            }
        })
    }
})

//Deletando dados
router.delete('/game/:id', (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {

        let id = parseInt(req.params.id);
        Game.destroy({
            where:{
                id: id
            }
        }).then(() => {
            res.sendStatus(200)
        }).catch(() => {
            res.sendStatus(400);
        })  
    }
})

//Editar dados
router.put('/game/:id', (req, res) => {
    
    if(isNaN(req.params.id)) {
        req.sendStatus(400);
    } else {

        let id = parseInt(req.params.id);

        let {title, price, year} = req.body;

        Game.update({title: title, price: price, year: year}, {
            where:{
                id: id
            }
        }).then(() => {
            res.sendStatus(200);
        }).catch(() => {
            res.sendStatus(400);        
        })
    }
})

module.exports = router;