const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  _id: String,
  name: String,
  wechat: String,
  address: [{
    location: String,
    tele: String,
    recipient: String
  }]
});

mongoose.model('Address', addressSchema);
