const mongoose = require('mongoose');
const crypto = require('crypto');
const Address = mongoose.model('Address');

module.exports = {
  addAddress: (req, res) => {
    let address = new Address();
    // let salt = crypto.randomBytes(16).toString('hex');
    // address._id = crypto.pbkdf2Sync(req.body.name, salt, 1000, 64).toString('hex');
    address._id = crypto.randomBytes(16).toString('hex');
    address.name = req.body.name;
    address.wechat = req.body.wechat;
    address.address = req.body.address;

    address.save((err) => {
      if(err) return res.status(500).send(err);

      res.status(200).send({
        message: 'Address of ' + address.name + ' has been successfully created',
        data: address
      });
    });
  },
  getAddress: (req, res) => {
    let wechat = req.query.wechat;
    let name = req.query.name;
    let _id = req.query.id;
    
    let query = {};

    if(wechat) query.wechat = wechat;
    if(name) query.name = name;
    if(_id) query._id = id;

    Address.find(query, (err, results) => {
      if(err) return res.status(500).send(err);

      res.status(200).send(results);
    });
  },
  updateAddress: (req, res) => {
    let _id = req.body._id;

    Address.findById(_id, (err, addr) => {
      if(err) return res.status(500).send(err);

      addr._id = _id;
      addr.wechat = req.body.wechat || addr.wechat;
      addr.name = req.body.name || addr.name;
      addr.address = req.body.address || addr.address;

      addr.save((err) => {
        if(err) res.status(500).send(err);

        res.status(200).send({
          message: 'Address of ' + addr.name + ' has been successfully updated',
          data: addr
        });
      });
    });
  },
  deleteAddress: (req, res) => {
    let _id = req.query.id;

    Address.findByIdAndRemove(_id, (err) => {
      if(err) return res.status(500).send(err);

      res.status(200).send({
        message: `Address with id ${_id} is successfully removed`
      });
    });
  }
}