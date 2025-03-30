// To understand the code below please see https://www.w3schools.com/nodejs/nodejs_email.asp

// currently not working
// to do: set-up new gmail account w/ 2 factor auth
// https://stackoverflow.com/questions/59188483/error-invalid-login-535-5-7-8-username-and-password-not-accepted

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rmbmarinas2003@yahoo.com',
    pass: 'm0rph3us1'
  }
});

var mailOptions = {
  from: 'rmbmarinas2003@gmail.com',
  to: 'rmbmarinas2003@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});