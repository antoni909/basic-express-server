'use strict';

module.exports = (req,res,next) => {
  res.status(404).send({ message: '404: Not Found'});
  next();
};
