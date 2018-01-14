const express = require('express');
const expressJWT = require('express-jwt');
const router = express.Router();
const addressCtrl = require('./../controllers/address-ctrl');
const authCtrl = require('./../controllers/auth-ctrl');
const profileCtrl = require('./../controllers/profile-ctrl');
const authJWT = expressJWT({
  secret: 'SECRET_JWT',
  userProperty: 'payload'
})

router.get('/address', addressCtrl.getAddress);

router.post('/address', addressCtrl.addAddress);

router.put('/address', addressCtrl.updateAddress);

router.delete('/address', addressCtrl.deleteAddress);

router.post('/register', authCtrl.register);

router.post('/login', authCtrl.login);

router.get('/profile', authJWT, profileCtrl.retrieveProfile);

module.exports = router;
