const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  _id: String,
  name: String,
  wechat: String,
  address: [{
    location: String,
    tele: Number,
    recipient: String
  }]
});

mongoose.model('Address', addressSchema);