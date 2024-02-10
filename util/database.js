const Sequelize = require('sequelize');                 // requiring contructror Sequelize

const sequelize = new Sequelize('node-complete', 'root', 'mysql@50', {
    dialect: 'mysql', 
    host:'localhost'
});

module.exports = sequelize;