const express = require('express');
const router = express.Router();
const addressCtrl = require('./../controllers/addressCtrl');

router.get('/address', addressCtrl.getAddress);

router.post('/address', addressCtrl.addAddress);

router.put('/address', addressCtrl.updateAddress);

router.delete('/address', addressCtrl.deleteAddress);

module.exports = router;