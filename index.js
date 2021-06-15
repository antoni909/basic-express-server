'use strict';
// index.js serves as an entry point 

const server = require('./server.js');
// allows for the use of env vars to be read by index.js
require('dotenv').config();

// set port to whatever HEROKU wants or 3000
const PORT = process.env.PORT || 3000;

server.listen(PORT, ()=>{
  console.log(`server is running at PORT:${PORT}`);
});
