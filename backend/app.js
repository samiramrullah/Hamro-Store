const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();


const { initializeFirebaseApp } = require('./firebase');
const authRoute = require('./api/routes/auth');

const app = express();

app.use(morgan('dev'));

// Firebase connection
const firebaseApp = initializeFirebaseApp();
if (firebaseApp === "Error Connecting to Firebase") {
  console.error("Failed to initialize Firebase. Exiting...");
  process.exit(1);
}

// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api/user', authRoute);

// Parsing the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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
