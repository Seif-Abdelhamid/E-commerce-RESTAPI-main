const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// importing functions
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');
const subCategoryRoute = require('./routes/subCategoryRoute');

// initiating app
const app = express();
dotenv.config({path: 'config.env'});

//connecting db
dbConnection();

// middlewares
app.use(express.json());
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));
    console.log(`MODE: ${process.env.NODE_ENV}`)
}

app.listen(process.env.PORT, ()=>{
    console.log("running on port", process.env.PORT);
})

//Routes
app.use('/cat', categoryRoute);
app.use('/subcat', subCategoryRoute);