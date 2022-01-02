
const mysql = require('mysql2');


console.log('connessione stabilità?');
console.log(process.env.NODE_DATABASE);
console.log(process.env.NODE_DATABASE_USER);
console.log(process.env.NODE_DATABASE_PW);
console.log(process.env.NODE_DATABASE_URL);
/*
const pool = mysql.createPool({
    host: 'localhost',
    database: 'corso_nodejs',
    user: 'root',
    password: ''
});*/



const pool = mysql.createPool({
    host:process.env.NODE_DATABASE_URL,
    database: process.env.NODE_DATABASE,
    user: process.env.NODE_DATABASE_USER,
    password: process.env.NODE_DATABASE_PW
});

module.exports = pool.promise();
