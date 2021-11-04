const products = require('../../src/models/products')
const express = require('express');
const router = express.Router();
const admincontrollers = require('../app/controllers/Admincontrollers');

router.get('/bills/find',admincontrollers.search2);
router.get('/bills/add/:id',admincontrollers.toCart);
router.get('/v',admincontrollers.view);
router.post('/printbill',admincontrollers.printbill);
router.get('/bills',admincontrollers.bills);
router.get('/edit/:id',admincontrollers.edit);
router.get('/bills/delcart/:id',admincontrollers.delcart);
router.get('/delete/:id',admincontrollers.delete);
router.get('/bills/clear',admincontrollers.clear);
router.get('/',admincontrollers.index);
// bills/find?product_name=

module.exports = router;