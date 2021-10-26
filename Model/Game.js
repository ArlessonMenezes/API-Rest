const Sequelize = require('sequelize');
const connection = require('../Database/database');

const Game = connection.define('games', {
        title: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        },
    
        year: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
})

Game.sync({force: false});

module.exports = Game;