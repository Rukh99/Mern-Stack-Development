// import express 
const express = require('express');
const userRouter = require('./routers/userrouter');
const productRouter= require('./routers/productrouter');
const cors = require ('cors');
// initialize the express

const app = express();
const port = 5000;


// middlewares
app.use(express.json());
app.use(cors({
    origin:['http://localhost:3000']
}));
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

//step-1 npm init-y
// stem 2 npm i express
// step 3 index.js
// step 4 routers(userRouter.js)
// step 5 connection .js
// step 6 npm i mongoose 
// step 7 models(userModels.js)