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

module.exports = pool;
// const sendapi = (apipath, SQL_statements, component) => app.get(apipath, function(req, res, next){
//     req.setTimeout(36000);
//     con.query(SQL_statements, component, function (err, result, fields) {
//         if (err) throw err;
//         //console.log(result);
//         res.json(result);
//     });
// });

// const resetapi = (apipath) => app.get(apipath, function(req, res, next){
//     res.json();
// });

