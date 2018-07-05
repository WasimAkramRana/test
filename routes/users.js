var express          = require('express');
var router           = express.Router();
var userCtrl         = require('../controllers/userCtrl');

/**
* API end points for documents actions
*/
router.get('/generatePdf',  userCtrl.generatePdf);
router.get('/emails/send',  userCtrl.sendInvoiceEmail);

module.exports = router;
