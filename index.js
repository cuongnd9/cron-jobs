require('dotenv').config();

const express = require('express');
const cron = require('node-cron');
const nodemailer = require('nodemailer');

const port = process.env.PORT || 8080;

const app = express();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ndc07.it@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

cron.schedule('* * * * 7', () => {
  let mailOptions = {
    from: '"Cuong Duy Nguyen 👻" ndc07.it@gmail.com',
    to: 'cuongw.me@gmail.com',
    subject: 'Just test cron jobs',
    text: 'Just test ............'
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      throw err;
    }

    console.log('Send mail successfully');
  });
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
