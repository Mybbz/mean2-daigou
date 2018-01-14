const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const passport = require('passport');
const http = require('http');
const app = express();

let port = process.env.PORT || '3000';
require('./config/db');
require('./models/users');
require('./models/address');
require('./config/passport');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


const apiRoute = require('./routes/api');
app.use(passport.initialize());
app.use('/api', apiRoute);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  if (err.name = 'UnauthorizedError') {
    res.status(401).json({
      message: err.name + ': ' + err.message
    });
  }
})

// if request is not found then redirect to homepage
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './../dist/index.html'));
});

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
server.on('error', (err) => {
  console.error('Serve is on error due to ' + err.message);
});
server.on('listening', () => {
  console.log('Server is listening on ' + server.address().port);
});
