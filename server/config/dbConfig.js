const mysql = require('mysql');

const db = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    username: 'root',
    password: '1111',
    database: 'blog'
})

module.exports=db;
