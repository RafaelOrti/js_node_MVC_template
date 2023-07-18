const { expect } = require('chai');
const Post = require('../../app/models/Post');

describe('Post Model', () => {
  describe('Validation', () => {
    it('should be invalid if title is empty', (done) => {
      const post = new Post();

      post.validate((err) => {
        expect(err.errors.title).to.exist;
        done();
      });
    });

    it('should be valid if title is provided', (done) => {
      const post = new Post({ title: 'Example Post' });

      post.validate((err) => {
        expect(err).to.be.null;
        done();
      });
    });
  });

  describe('Methods', () => {
    it('should return a formatted date string', () => {
      const post = new Post({
        title: 'Example Post',
        content: 'Lorem ipsum dolor sit amet',
        createdAt: new Date('2021-01-01'),
      });

      const formattedDate = post.getFormattedDate();
      expect(formattedDate).to.equal('January 1, 2021');
    });
  });
});
