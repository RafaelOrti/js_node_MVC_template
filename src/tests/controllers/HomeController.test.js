const request = require('supertest');
const app = require('../../../server');
const {
  expect
} = require('chai');

describe('HomeController', () => {
  describe('GET /', () => {
    it('should return status 200 and render the index view', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.include('<h1>Welcome to the Home Page</h1>');
    });
  });

  describe('GET /about', () => {
    it('should return status 200 and render the about view', async () => {
      const res = await request(app).get('/about');
      expect(res.status).to.equal(200);
      expect(res.text).to.include('<h1>About Us</h1>');
    });
  });
});
