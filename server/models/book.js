const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const Book = sequelize.define('books',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    autore:{
        type:Sequelize.STRING,
        allowNull:false
    },
    images:{
        type:Sequelize.STRING,
        allowNull:false
    },
    pubblicato:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Book;