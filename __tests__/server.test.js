'use strict';
// HOW TO CREATE TESTS USING JEST and mockapi call using supertest

// import server file
const server = require('../server.js');

// feed server into supertest
const supertest = require('supertest');
const { expect } = require('@jest/globals');

// returns function able to make req against server being passed
// mockRequest has similar methods as express
const mockRequest = supertest(server);

// create describe / test blocks

describe('Express server', ()=>{
  // it or test
  // test for /
  test('expect return: thanks on GET to /', async () => {
    //
    const response = await mockRequest.get('/');
    // expect is JEST, when want to make test assertion that status must be 200
    expect(response.status).toEqual(200);
    // will mostly use resonse.body to send json data not .text data
    expect(response.body).toEqual({'message':'response: thank you'});
  });

  // test for /data endpoint
  test('expext return: cat obj on GET to /data', async () => {
    const response = await mockRequest.get('/data');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('whiskers');
    expect(response.body.color).toEqual('grey');

  });

});


// npm can run JEST tests, change package.json 'test': 'jest --coverage --verbose' adds two flags along with test
// run test script in server.test file using: npm test
