const mysql = require('mysql');
const express = require('express');
const app = express()

// mysql://ba4aecff227c7d:b7e715cd@us-cdbr-east-06.cleardb.net/heroku_565295b9785eb69?reconnect=true
const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: "ba4aecff227c7d",
    password: 'b7e715cd',
    database: 'heroku_565295b9785eb69'
});

/*
const pool = mysql.createPool({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'modhiw'
});
*/

module.exports = pool;