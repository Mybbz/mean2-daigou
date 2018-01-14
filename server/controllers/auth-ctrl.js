const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  register: (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.setRole();

    user.save(err => {
      const token = user.generateJWT();
      res.status(200).json({token});
    })
  },
  login: (req, res) => {
    passport.authenticate('local', (err, user, info) => {
      let token;

      if (err) return res.status(404).json(err);

      if (!user) {
        res.status(401).json(info);
      } else {
        token = user.generateJWT();
        res.status(200).json({token});
      }
    })(req, res);
  }
}
