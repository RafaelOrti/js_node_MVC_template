const {
  expect
} = require('chai');
const sinon = require('sinon');
const EmailService = require('../../app/services/EmailService');
const nodemailer = require('nodemailer');

describe('EmailService', () => {
  describe('sendEmail', () => {
    it('should send an email successfully', async () => {
      const transporterStub = sinon.stub(nodemailer, 'createTransport').returns({
        sendMail: sinon.stub().resolves('Email sent successfully'),
      });

      const email = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email',
      };

      const result = await EmailService.sendEmail(email);

      expect(result).to.equal('Email sent successfully');
      expect(transporterStub.calledOnce).to.be.true;

      nodemailer.createTransport.restore();
    });

    it('should throw an error when sending an email fails', async () => {
      const transporterStub = sinon.stub(nodemailer, 'createTransport').returns({
        sendMail: sinon.stub().rejects(new Error('Failed to send email')),
      });

      const email = {
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email',
      };

      try {
        await EmailService.sendEmail(email);
      } catch (error) {
        expect(error.message).to.equal('Failed to send email');
        expect(transporterStub.calledOnce).to.be.true;

        nodemailer.createTransport.restore();
      }
    });
  });
});
