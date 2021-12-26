const Sequelize = require('sequelize');
console.log('connessione stabilità?');
console.log(process.env.NODE_DATABASE);
console.log(process.env.NODE_DATABASE_USER);
console.log(process.env.NODE_DATABASE_PW);
console.log(process.env.NODE_DATABASE_URL);
const sequelize = new Sequelize(process.env.NODE_DATABASE,
    process.env.NODE_DATABASE_USER,
    process.env.NODE_DATABASE_PW,
{
    dialect : 'mysql',
    host: process.env.NODE_DATABASE_URL
}
);

module.exports = sequelize;



/*
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    database: 'corso_nodejs',
    user: 'root',
    password: 'root'
});

module.exports = pool.promise();
*/