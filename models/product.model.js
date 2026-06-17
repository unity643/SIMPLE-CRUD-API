const mongoose = require('mongoose');
const productschema = mongoose.Schema(






{
name: {
    type: String,
    required: [true, "please enter- product name"]
},

quantity: {
    type: Number,
    required: true,
    default: 0
},

price: {
    type: Number,
    required: true,
    default: 0
},
imageUrl: {
    type: String
},

}, 
{
    timestamps: true
}

);
   


const product =mongoose.model("product", productschema);
module.exports = product;
