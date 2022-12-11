const mysql = require("mysql");
const express = require("express");
const app = express();

const pool = mysql.createPool({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bdabc0fc04da4b",
  password: "c2707441",
  database: "heroku_26e0bd1dccba19b",
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
