const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  hash: String,
  salt: String,
  role: String
});

userSchema.methods.setPassword = (pwd) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(pwd, this.salt, 10000, 64).toString('hex');
}

userSchema.methods.validPassword = (pwd) => {
  const hash = crypto.pbkdf2Sync(pwd, this.salt, 10000, 64).toString('hex');
  return hash === this.hash;
}

userSchema.methods.setRole = () => {
  this.role = (this.email === 'yuanruicong@gmail.com') ? 'admin' : 'indv';
}

userSchema.methods.generateJWT = () => {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000)
  }, 'SECRET_JWT');
}

mongoose.model('User', userSchema);
