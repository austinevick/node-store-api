const express = require('express');
const db = require('./db/database');
const errorHandler = require('./middleware/error_handler');
const notFound = require('./middleware/not_found');
const router = require('./routes/routes');
require('dotenv').config();
require('express-async-errors');
const app = express();

app.use('/api/v1/products',router);

app.use(express.json());



app.use(notFound);
app.use(errorHandler);

const port = 6000
const start = async ()=>{
    try {
        await db(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log('listening at port '+port);
        });

    } catch (error) {
        console.log(error);
    }    
}    

start()
