const Sequelize = require('sequelize');
const connection = require('../Database/database');

const Users = connection.define('users', {
    email:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    password:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

Users.sync({force: false});
module.exports = Users;