const {
  expect
} = require('chai');
const sinon = require('sinon');
const AuthService = require('../../app/services/AuthService');
const User = require('../../app/models/User');

describe('AuthService', () => {
  describe('generateAccessToken', () => {
    it('should generate an access token', () => {
      const user = new User({
        username: 'john.doe'
      });

      const accessToken = AuthService.generateAccessToken(user);

      expect(accessToken).to.be.a('string');
      expect(accessToken).to.have.lengthOf.above(0);
    });
  });

  describe('authenticateUser', () => {
    it('should authenticate a valid user', async () => {
      const username = 'john.doe';
      const password = 'password';

      const user = new User({
        username,
        password
      });
      sinon.stub(User, 'findOne').resolves(user);

      const authenticatedUser = await AuthService.authenticateUser(username,
        password);

      expect(authenticatedUser).to.deep.equal(user);
      expect(User.findOne.calledOnce).to.be.true;

      User.findOne.restore();
    });

    it('should throw an error for an invalid user', async () => {
      const username = 'john.doe';
      const password = 'password';

      sinon.stub(User, 'findOne').resolves(null);

      try {
        await AuthService.authenticateUser(username, password);
      } catch (error) {
        expect(error.message).to.equal('Invalid username or password');
        expect(User.findOne.calledOnce).to.be.true;

        User.findOne.restore();
      }
    });
  });
});
