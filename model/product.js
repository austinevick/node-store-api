const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
name:{
    type: String,
    required:true
},
price:{
    type: Number,
    required:true
},
featured:{
    type: Boolean,
    default:false
},
rating:{
    type: Number,
    required:3.5
},
createdAt:{
    type: Date,
    default:Date.now()
},
company: {
    type: String,
    enum:['ikea','liddy','caressa','marcos']
}
});



module.exports = mongoose.model('products',productSchema);
