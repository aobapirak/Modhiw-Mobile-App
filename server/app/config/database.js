const mysql = require('mysql');
const express = require('express');
const app = express()


// mysql://bdabc0fc04da4b:c2707441@us-cdbr-east-06.cleardb.net/heroku_26e0bd1dccba19b?reconnect=true
const pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: "bdabc0fc04da4b",
    password: 'c2707441',
    database: 'heroku_26e0bd1dccba19b'
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