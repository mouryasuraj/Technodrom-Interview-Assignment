require('dotenv').config();

const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
})

app.get('/', (req, res) => {
    return res.json("From Backend")
})

// Get the data from database
app.get('/employee', (req, res) => {
    const sql = "SELECT * from employee"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// Add the data to the database
app.post('/newEmployee', (req, res) => {
    const sql = "INSERT INTO employee (`employeeId`, `firstName`, `lastName`, `dateOfBirth`, `gender`, `nationality`,`addressStreet` , `addressCity`, `addressState`, `addressPostalCode`, `contactNumber`,`department`,`position`) VALUES (?)"
    const values = [
        Number(req.body.employeeId),
        req.body.firstName,
        req.body.lastName,
        req.body.dateOfBirth,
        req.body.gender,
        req.body.nationality,
        req.body.addressStreet,
        req.body.addressCity,
        req.body.addressState,
        req.body.addressPostalCode,
        req.body.contactNumber,
        req.body.department,
        req.body.position
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// update data to database
app.put('/update', (req, res) => {
    const sql = "UPDATE employee SET firstName = ?, lastName = ?, dateOfBirth = ?, gender = ?, nationality = ?, addressStreet = ?, addressCity = ?, addressState = ?, addressPostalCode = ?, contactNumber = ?, department = ?, position = ? WHERE employeeId = ?"

    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.dateOfBirth,
        req.body.gender,
        req.body.nationality,
        req.body.addressStreet,
        req.body.addressCity,
        req.body.addressState,
        req.body.addressPostalCode,
        req.body.contactNumber,
        req.body.department,
        req.body.position
    ]
    db.query(sql, [...values, Number(req.body.employeeId)], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// Delete the data from the database
app.delete('/delete', (req, res) => {
    const sql = 'DELETE FROM employee WHERE employeeId = ?'
    db.query(sql, [Number(req.body.id)], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(process.env.MYSQLPORT, () => {
    console.log(`Listening on post number ${process.env.MYSQLPORT}`);
})