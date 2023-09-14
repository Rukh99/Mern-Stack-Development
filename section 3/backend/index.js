// import express 
const express = require('express');
const userRouter = require('./routers/userrouter');
const productRouter = require('./routers/productrouter');
// initialize the express

const app = express();
const port = 5000;


// middlewares
app.use('/user', userRouter);
app.use('/product', productRouter);


app.get('/', (req, res) => {
    res.send('response from express');
}
)

app.get('/home', (req, res) => {
    res.send('response from home');
}
)


app.get('/add', (req, res) => {
    res.send('response from add');
}
)

app.listen(port, (req, res) => {
    console.log('express server started');
});