'use strict';

module.exports = (req,res,next) => {
  console.log('from logger mw','req.method: ',req.method,'req.header: ', req.headers);
  // use next() to move to next route handler function
  next();
};
