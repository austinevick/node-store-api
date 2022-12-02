const mongoose = require('mongoose');


const connectDB = (url)=>{
    return mongoose.connect(url,{
            useNewUrlParser:true   
        })
    .then(()=>console.log('database connected'))
    .catch((err)=>console.log(err));
}


module.exports = connectDB;