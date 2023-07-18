const { expect } = require('chai');
const User = require('../../app/models/User');

describe('User Model', () => {
  describe('Validation', () => {
    it('should be invalid if username is empty', (done) => {
      const user = new User();

      user.validate((err) => {
        expect(err.errors.username).to.exist;
        done();
      });
    });

    it('should be valid if username is provided', (done) => {
      const user = new User({ username: 'john.doe' });

      user.validate((err) => {
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('Methods', () => {
    it('should generate a hashed password', () => {
      const user = new User({ username: 'john.doe', password: 'password' });

      user.generateHashedPassword();

      expect(user.password).to.not.equal('password');
      expect(user.password).to.have.lengthOf(60);
    });

    it('should verify a correct password', () => {
      const user = new User({ username: 'john.doe', password: 'password' });

      user.generateHashedPassword();

      const isPasswordValid = user.verifyPassword('password');
      expect(isPasswordValid).to.be.true;
    });

    it('should not verify an incorrect password', () => {
      const user = new User({ username: 'john.doe', password: 'password' });

      user.generateHashedPassword();

      const isPasswordValid = user.verifyPassword('incorrectPassword');
      expect(isPasswordValid).to.be.false;
    });
  });
});
