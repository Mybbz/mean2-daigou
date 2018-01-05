const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const http = require('http');
const app = express();

let port = process.env.PORT || '3000';
require('./config/db');
require('./models/address');

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


const apiRoute = require('./routes/api');
app.use('/api', apiRoute);

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
