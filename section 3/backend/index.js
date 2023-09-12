
const express = require('express');
// initialize the express

const app = express();
const port =5000;

app.get('/', (req, res) => {
    res.send('response from express');}
    )

    app.get('/home ', (req, res) => {
        res.send('response from home');}
        )

    app.listen(port, (req, res) => {
        console.log('express server started');
    });