const mysql = require('mysql');

// mysql://ba4aecff227c7d:b7e715cd@us-cdbr-east-06.cleardb.net/heroku_565295b9785eb69?reconnect=true
const con = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: "ba4aecff227c7d",
    password: 'b7e715cd',
    database: 'heroku_565295b9785eb69'
});

con.query("SELECT * FROM restaurant", [], function (err, result, fields) {
    if (err) throw err;
    else console.log(result);
});

module.exports = {con};