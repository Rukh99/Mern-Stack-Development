const mongoose = require('mongoose');

const url ="mongodb+srv://rukhsarqureshi469:sharukh@cluster0.cjsv2si.mongodb.net/mern11aug?retryWrites=true&w=majority";

//asynchronous  function - return promise object 
mongoose.connect(url)

.then((result) => {
    
    console.log('database connection')
    
}).catch((err) => {

    console.log('error connecting')
    
});


console.log('another statement')

