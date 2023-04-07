const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title : {
        type: String,
        required:true,
        trim:true
    },
    desc: {
        type: String,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    image:{
        type:Object,
        required:true
    },
    categories:{
        type: String,
        required:true,
        trim:true 
    }
},{
    timestamps:true
})
const Product = mongoose.model('product', productSchema);
module.exports Product;