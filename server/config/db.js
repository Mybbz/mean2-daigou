const mongoose = require('mongoose');
const DEFAULT_MONGO_SANDBOX_URL = 'mongodb://rui:12345abcde@ds157682.mlab.com:57682/mybestvv';

let shutdown;
let mongoDbURI = process.env.MONGO_URI || DEFAULT_MONGO_SANDBOX_URL;

mongoose.connect(mongoDbURI);

/** mongoose connection status */
mongoose.connection.on('connected', () => {
  console.log('MongoDb is connected to ' + mongoDbURI);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDb is disconnected');
});

mongoose.connection.on('error', (err) => {
  console.log('MongoDb connection is getting error due to ' + err);
});

/** app restart & terminate */
shutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log('MongoDb disconnected thru ' + msg);
    callback();
  });
}

// For nodemon restarts
process.once('SIGUSR2', () => {
  shutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', () => {
  shutdown('app termination', () => {
    process.exit(0);
  });
});
