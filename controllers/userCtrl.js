var fs                  = require('fs');
var path                = require('path');
var nodemailer          = require('nodemailer');
var globalServices      = require('../services/globalService');
var async               = require('async');

var smtpTransport = nodemailer.createTransport({
  host    : configs.emailConfig.smtpServer,
  port    : configs.emailConfig.smtpPort,
  secure  : true,
  auth    : {
    user  : configs.emailConfig.username,
    pass  : configs.emailConfig.password
  }
});

module.exports.sendInvoiceEmail = function(req, res) {
  req.body.receiver = 'admin';
  switch (req.body.receiver) {
    case 'admin':
      sendEmailToAdmin(req, res);
      break;

    case 'user':
      sendEmailToUser();
      break;

    default:
      res.status(409).json({status : 'error', message : 'Please specify the email receiver type'});
  }
}

function sendEmailToAdmin(req, res) {
  async.waterfall([
    function (next) {
      globalServices.generateInvoicePdf(req, res, next);
    },
    function (next) {
      globalServices.generateAdminEmailBody(req, res, next);
    },
    function (adminEmailTemplate, next) {
      sendAdminEmail(adminEmailTemplate, req, res, next);
    }
  ],
  function (err, results) {
    console.log(err);
  });
}

function sendAdminEmail(adminEmailTemplate, req, res, next) {
  let mailOptions = {
    from        : configs.appName + '<' + configs.emailConfig.username  +'>',
    to          : "jaiwas009@gmail.com",
    subject     : 'Jaiwas009' + ", Here's the link to reset your password",
    html        : adminEmailTemplate,
    attachments : [{ filename : 'invoice.pdf', path : 'public/uploads/' + configs.orderSeedData.orderNo + '_invoice.pdf', contentType : 'application/pdf' }]
  }

  smtpTransport.sendMail(mailOptions, function(error, response) {
    if(error) {
      res.status(401).json({status : 'error', message : error});
    } else {
      res.status(200).json({status : 'success', messsage : 'Invoice Email successfully to admin!!'})
    }
  });
}


module.exports.generatePdf = function(req, res) {
  var data = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Admin Invoice </title>
    </head>
    <body>
      <div style="margin:2% 2% 0% 0%;float:left; width:500px; box-shadow:0 0 3px #aaa; height:auto;color:#353232;">
        <hr style="border-top:2px dotted #000000; height:1px;">
        <b>&nbsp;&nbsp;&nbsp;Tax Invoice &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Prepaid (No Amount Due)</b>
          <hr>
          <span style="font-size:14px;float:left;  padding:10px; text-align:right;">
            <img src="http://bardecode.com/images/code128_eg.jpg" style="height:80px; width:300px;">
          </span>
          <br>
          <div style="width:100%; padding:0px 0px;border-bottom:1px solid rgba(0,0,0,0.2);float:left;">
            <div style="width:60%; float:left;padding:8px;">
             <span style="font-size:25px;float:left; width:100%;">
               <b>DELIVERY ADDRESS :</b>
             </span><br><br>
      			 <span style="font-size:25px; fontcolor:#000000; float:left;width:100%;">
               <b>{{address.name}} </b><br>
               <b>{{address.line1}},</b><br>
               <b>{{landmark}},</b><br>
               <b>{{address.line2}},</b><br>
               <b>{{address.city}},{{address.state}}</b>
             </span>
             <span style="font-size:20px; fontcolor:#000000; float:left;width:100%;">
               <b>Pincode:-{{address.pinCode}}</b>
             </span>
             <span style="font-size:22px;fontcolor:#000000; float:left;width:100%;">
               <b>Mobile No:-{{address.phone}}</b>
             </span>
             <br>
          </div>
          <div style="width:30%; float:left;padding:8px;">
            <span style="font-size:15px;fontcolor:black; font-weight:normal;float:left;padding:1px ;width:100%;color:#353232;text-align:right;">
              Ordered Through <br>
              <img src="http://www.pikbuk.in/images/main_logo.1e6b15a1.png" style="height:50px; width:80px;">
            </span>
          </div>
          <!-- <div style="width:40%; float:right;padding:">
          <span style="font-size:14px;float:right;  padding:10px; text-align:right;">
          <img src="http://bardecode.com/images/code128_eg.jpg" style="height:80px; width:230px;">
          </span>
          </div>-->
        </div>
        <div style="width:100%; padding:0px; float:left;">
          <div style="width:100%;float:left;background:#efefef;">
            <span style="font-size:20px;fontcolor:#000000; float:left; text-align:left;padding:1px;width:90%;color:#353232;font-weight:100;">
              &nbsp; <b>Courier Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : DTDC Express Limited</b>
              <br>
              &nbsp;&nbsp;<b>Courier AWB No. : {{trackerNumber}}</b>
              <br>
              &nbsp;&nbsp;<b>Order ID </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :<b> {{serviceNumber}}</b>
            </span>
            <span style="font-size:20px; fontcolor:black; font-weight:100;float:left;padding:1px ;width:40%;color:#353232; text-align:right;">
            </span>
          </div>
          <div style="width:100%;float:left;">
            <span style="font-size:15px;fontcolor:black; float:left; text-align:left;padding:7px;width:30%;color:#353232;">
              &nbsp;<b> Pikbuk Technologies</b>
              <span style="font-size:10px; float:left; width:100%;">
              </span>
            </span>
            <span style="font-size:15px; fontcolor:black; font-weight:normal;float:left;padding:7px ;width:50%;color:#353232;text-align:right;">
              <b>GSTIN NO.</b> 07AALPJ4731A1Z3
              <br>
              <b>PAN</b> : AALPJ4731A
            </span>
          </div>
          <hr style="border-top:2px dotted #000000; height:1px;">
    	  <!--First Col-->
         <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
           <tr>
             <th style="font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Item</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;&nbsp;{{productName}}, HSN 9989</th>
           </tr>
           <tr>
             <th style=" font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Qty</th>
             <th style=" font-size:15px; fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;{{priceDetails.quantity}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Prices</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.singleUnitAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Gross Total</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.subtotalAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Gift Box</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.giftPackAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Discount</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.shipmentAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Shipping</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.taxAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;GST @12%</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{priceDetails.grantAmount}}</th>
           </tr>
           <tr>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;&nbsp;Total</th>
             <th style="font-size:15px;fontcolor:black; border: 2px solid #dddddd; text-align: left; padding: 3px;">&nbsp;Rs.{{priceDetails.grantAmount}}</th>
           </tr>
         </table>
         <hr>
    	   <!--End First Col-->
    	   <!--Second Col-->
    	   <div style="width:100%;float:left;">
           <span style="font-size:20px;fontcolor:black; float:left; text-align:left;padding:1px;width:100%;color:#353232;">
             <b>Order Date </b>: {{orderedOn}}
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </span>
          </div>
          <hr>
          <!--End Second Col-->

          <!--Fourth Start-->
    	   <div style="width:100%;float:left;">
           <span style="font-size:15px;fontcolor:black; float:left; text-align:left;padding:2px;width:40%;color:#353232;">
             &nbsp;<b>Sender Address</b><br>
             &nbsp;M/s Pikbuk Technologies<br>
             &nbsp;A-21, Second Floor<br>
             &nbsp;Green Park Main<br>
             &nbsp;New Delhi-110016
           </span>
         </div>
         <br>
         <br> <br><br>
         <p style=" font-size:15px; fontcolor:black;">&nbsp;&nbsp;<b> Declaration</b>
           The goods sold are intended for end user consumption and not for resale<br><br>
           &nbsp;&nbsp;&nbsp;E. & O.E.</p>
           <!--End Fourth End-->
         </div>
       </div>
     </body>
   </html>`;

  // var page = require(‘webpage’).create();
  // page.viewportSize = { width: 200, height : 200 };
  // page.content =  “This Text will be converted to Image”;
  // page.setContent(page.content,page);
  // window.setTimeout(function () {
  //   page.render(‘newimage.pdf’);
  //   phantom.exit();
  // }, 1000);


  //var fs = require('fs');
  //var pdf = require('html-pdf');
  //var html = fs.readFileSync('./test/businesscard.html', 'utf8');
  var options = { format: 'Tabloid' };

  pdf.create(data, options).toFile('public/uploads/invoice.pdf', function(err, res) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });

  // phantom.create().then(function(ph) {
  //     ph.createPage().then(function(page) {
  //         page.open("http://www.google.com").then(function(status) {
  //             page.render('google.pdf').then(function() {
  //                 console.log('Page Rendered');
  //                 ph.exit();
  //             });
  //         });
  //     });
  // });
}
