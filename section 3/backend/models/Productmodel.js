const {Schema,model}=require('../connection');

const mySchema = new Schema({
    title:String,
    price:Number,
    brand:String,
    model:String,
    category:String,

});
module.exports = model('laptop',mySchema);