var express          = require('express');
var router           = express.Router();
var invoiceCtrl      = require('../controllers/invoiceCtrl');

/**
* API end points for invoice email
*/
router.post('/emails/send',  invoiceCtrl.sendInvoiceEmail);

module.exports = router;
