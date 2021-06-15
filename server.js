'use strict';
// can import dependencies
const express = require('express');
const Cat = require('./cat.js');


// initialize
const app = express();

// Routes
app.get('/', (req,res)=>{
  res.status(200).send({'message':'response: thank you'});
});

app.get('/data', (req,res)=>{
  const kitty = new Cat('whiskers','grey');
  res.status(200).send(kitty);
});

// export express server
module.exports = app;
