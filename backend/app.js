const express = require('express');
const morgan = require('morgan');
const mongoose=require('mongoose')
const bodyParser = require('body-parser');
require('dotenv').config();


const authRoute = require('./api/routes/auth');
const productRoute=require('./api/routes/product')

const app = express();

app.use(morgan('dev'));

//db connection
mongoose.connect(process.env.ConnectionString).then(() => {
  console.log('Connected to Database')
})
.catch((err) => console.log(err))
mongoose.Promise = global.Promise;

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Parsing the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));

app.use('/api/user', authRoute);
app.use('/api/product',productRoute)


// Error Handling

// If no paths matched
app.use((req, res, next) => {
  const error = new Error('No matching paths');
  error.status = 404;
  next(error);
});

// If methods not matched
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
