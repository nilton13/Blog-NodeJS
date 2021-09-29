const Sequelize = require('sequelize');

const connection = new Sequelize('blogNode', 'niltondev','nilton13',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = connection;