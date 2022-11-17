const express = require('express');
const mysql = require('mysql');

const app = express();

const connection = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
})

const sql = `INSERT INTO people(name) VALUES ('Julio')`;
connection.query(sql);
connection.end()

app.get('/', (req, res) => {
    res.send('full cycle')
})

app.listen(3000, () => {
    console.log('Running...');
})