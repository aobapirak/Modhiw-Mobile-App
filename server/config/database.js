const axios = require('axios');
const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express()

// mysql://ba4aecff227c7d:b7e715cd@us-cdbr-east-06.cleardb.net/heroku_565295b9785eb69?reconnect=true
const con = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: "ba4aecff227c7d",
    password: 'b7e715cd',
    database: 'heroku_565295b9785eb69'
});

app.use(cors());
app.listen(5000, function() {
    console.log('listening on port 5000');
});

const sendapi = (apipath, SQL_statements, component) => app.get(apipath, function(req, res, next){
    req.setTimeout(36000);
    con.query(SQL_statements, component, function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
        res.json(result);
    });
});

const resetapi = (apipath) => app.get(apipath, function(req, res, next){
    res.json();
});

const insertToSql = (SQL_statements, component) => con.query(SQL_statements, component, function (err, result, fields) {
    if (err) throw err;
});

module.exports = {con, sendapi, resetapi};