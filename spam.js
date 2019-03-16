var nodemailer = require('nodemailer');
var emails = require('./emails.json');
var login= (mail,password)=>{
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mail,
      pass: password
    }
  });
  return transporter;
}
/*
var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };*/
var send = (transport,mailOptions)=>{
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
/*options={
mail:'eg@gmail.com',
to:"mymail@gmail.com
password:'password',
subject:"subject",
text:"text",
html:"html",
number:10000,//defalut=1};
*/
function sendSpamMail(options){
  var number = isNaN(Number(options.number)) ? 1 : Number(options.number);
  for(var i=0:i<number;i++){
    send(login(options.mail,options.password),{
      from:options.mail,
      to:options.to,
      subject:options.subject,
      text:options.text||null,
      html:options.html||(options.text||null),
    });
  }
}
var http=require('http')
