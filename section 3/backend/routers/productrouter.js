const express =require('express')

const Router= express.Router();

Router.get('/add', (req, res) => {
    res.send('response from product add')

})  

Router.get('/getall', (req, res) => {
    res.send('response from product getall')

}) 

Router.get('/getbyid', (req, res) => {
    res.send('response from product id get')

})

Router.get('/update', (req, res) => {
    res.send('response from product update')

})  

Router.get('/delete', (req, res) => {
    res.send('response from  product delete')

})  
module.exports=Router;