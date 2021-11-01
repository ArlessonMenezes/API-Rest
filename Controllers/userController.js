const express = require('express');
const Users = require('../Model/Users');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret = 'hsuahsuahsuahsuahsuahsuahsuahs';

router.post('/user', (req, res) => {
    let {email, password} = req.body;

    Users.findOne({
        where:{
            email: email
        }
    }).then(user => {
        if(user == undefined) {

            Users.create({
                email: email,
                password: password
            }).then(() => {
                res.status(200);
                res.send('Usuário cadastrado!')
            }).catch(() => {
                res.status(400);
            })

        } else {
            res.status(404);
            res.json({err: "O email já existe na base de dados"})
        }
    })

})

router.post('/auth', (req, res) => {
    let { email, password } = req.body;
    
        Users.findOne({
            where:{
                email: email
            }
        }).then(user => {
            
            if(user != undefined) {
                     
                if(user.password == password){
    
                    jwt.sign({ id: user.id, email: user.email }, jwtSecret,{expiresIn: '48h'}, (err, token) => {
                        if(err){
                            res.status(401);
                            res.json({ err: "Falha interna" });
                        } else {
                            res.status(200);
                            res.json({token: token})
                        }
                    })
                } else {
                    res.status(401);
                    res.json({err: 'Credenciais inválidas'})
                }
            
            } else {
                res.status(404);
                res.json({err: 'O email enviado não existe na base de dados!'})
            }
        }).catch(() =>{
            res.status(400);
        })
})

module.exports = router;