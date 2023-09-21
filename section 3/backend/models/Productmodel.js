const {Schema,models}=require('../connection');

const mySchema = new Schema({
    title:String,
    price:Number,
    brand:String,
    model:String,
    category:String,

});
module.exports = models('laptop',mySchema);