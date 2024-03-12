const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const port = 8081

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee'
})

app.get('/', (req, res) => {
    return res.json("From Backend")
})
app.get('/employee', (req, res) => {
    const sql = "SELECT * from employee"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(port, () => {
    console.log(`Listening on post number &{port}`);
})