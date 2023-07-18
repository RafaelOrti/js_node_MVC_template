const request = require('supertest');
const app = require('../../../server');
const {
  expect
} = require('chai');

describe('UserController', () => {
  describe('GET /user', () => {
    it('should return status 200 and render the user index view', async () => {
      const res = await request(app).get('/user');
      expect(res.status).to.equal(200);
      expect(res.text).to.include('<h1>User List</h1>');
    });
  });

  describe('GET /user/:id', () => {
    it('should return status 200 and render the user profile view', async () => {
      const userId = '123456789'; // Replace with a valid user ID
      const res = await request(app).get(`/user/${userId}`);
      expect(res.status).to.equal(200);
      expect(res.text).to.include('<h1>User Profile</h1>');
      expect(res.text).to.include(`<p>User ID: ${userId}</p>`);
    });

    it('should return status 404 if user ID is not found', async () => {
      const invalidUserId = '999999999'; // Replace with an invalid user ID
      const res = await request(app).get(`/user/${invalidUserId}`);
      expect(res.status).to.equal(404);
    });
  });
});
