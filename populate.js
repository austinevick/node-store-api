const connectDB = require("./db/database");
const  product  = require("./model/product");


require("dotenv").config();



const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
       await product.create(productJson)
        console.log('Success!!!!!');
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }    
}    

start()







const productJson = [
{
    "name":"modern bookshelf",
    "price":30,
    "featured":true,
    "rating":2.5,
    "company":"caressa"
},

{
    "name":"leather sofa",
    "price":50,
    "rating":2.5,
    "featured":false,
    "company":"ikea"
},
{
    "name":"modern poster",
    "price":30,
    "rating":3,
    "featured":true,
    "company":"liddy"
},
{
    "name":"high-black bench",
    "price":10,
    "rating":3.5,
    "featured":false,
    "company":"caressa"
},

]