const express = require('express');
const Model = require('../models/Productmodel');


const router =express.Router();
router.post("/add", (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
            res.json(err);
        });
})


router.get("/getall" ,(req,res)=>
{
    Model.find({})
    .then((result) => {
        res.json(result);
        
    }).catch((err) => {
        res.json(err);
        
    });
})


module.exports =router;