const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  retrieveProfile: (req, res) => {
    if (!req.payload._id) {
      res.status(401).json({
        message: 'UnauthorizedError: no access to profile'
      });
    } else {
      User.findById(req.payload._id)
        .exec((err, user) => {
          if (err) return res.status(500).send(err);

          res.status(200).json(user);
        });
    }
  }
}
