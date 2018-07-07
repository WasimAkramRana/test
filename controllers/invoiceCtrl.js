var nodemailer     = require('nodemailer');
var async          = require('async');
var emailServices  = require('../services/emailInvoiceService');
var dummyData      = require('../configs/default.json');

/**
* This block of code is use for to configure the SMTP settings
*/
var smtpTransport = nodemailer.createTransport({
  host    : configs.emailConfig.smtpServer,
  port    : configs.emailConfig.smtpPort,
  secureConnection: true,
  auth    : {
    user  : configs.emailConfig.username,
    pass  : configs.emailConfig.password
  }
});

/**
* This method is use for operate invoice email operation
*/
module.exports.sendInvoiceEmail = function(req, res) {
  //req.body.receiver = 'admin';
  switch (req.body.receiver) {
    case 'admin':
      sendEmailToAdmin(req, res);
      break;

    case 'user':
      sendEmailToUser(req, res);
      break;

    default:
      res.status(409).json({status : 'error', message : 'Please specify the email receiver type'});
  }
}

/**
* This function is use for send invoice email process to admin
*/
function sendEmailToAdmin(req, res) {
  async.waterfall([
    function (next) {
      emailServices.generateInvoicePdf(req, res, next);
    },
    function (next) {
      emailServices.generateAdminEmailBody(req, res, next);
    },
    function (adminEmailTemplate, next) {
      sendAdminInvoiceEmail(adminEmailTemplate, req, res, next);
    }
  ],
  function (err, results) {
    console.log(err);
  });
}

/**
* This function is use for send invoice email process to user
*/
function sendEmailToUser(req, res) {
  async.waterfall([
    function (next) {
      emailServices.generateUserEmailBody(req, res, next);
    },
    function (userEmailTemplate, next) {
      sendUserInvoiceEmail(userEmailTemplate, req, res, next);
    }
  ],
  function (err, results) {
    console.log(err);
  });
}

/**
* This function is use for send invoice email to admin
*/
function sendAdminInvoiceEmail(adminEmailTemplate, req, res, next) {
  let mailOptions = {
    from        : configs.appName + '<' + configs.emailConfig.username  +'>',
    to          : req.body.adminEmail,
    subject     : req.body.adminEmail + ", Here's the link to reset your password",
    html        : adminEmailTemplate,
    attachments : [{ filename : 'invoice.pdf', path : 'public/uploads/' + dummyData.orderDetails.orderNo + '_invoice.pdf', contentType : 'application/pdf' }]
  }
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if(error) {
      res.status(401).json({status : 'error', message : error});
    } else {
      res.status(200).json({status : 'success', messsage : 'Invoice Email successfully to admin!!'})
    }
  });
}

/**
* This function is use for send invoice email to user
*/
function sendUserInvoiceEmail(userEmailTemplate, req, res, next) {
  let mailOptions = {
    from        : configs.appName + '<' + configs.emailConfig.username  +'>',
    to          : req.body.userEmail,
    subject     : req.body.userEmail + ", Here's the your invoice details",
    html        : userEmailTemplate
  }

  smtpTransport.sendMail(mailOptions, function(error, response) {
    if(error) {
      res.status(401).json({status : 'error', message : error});
    } else {
      res.status(200).json({status : 'success', messsage : 'Invoice Email successfully to admin!!'})
    }
  });
}
