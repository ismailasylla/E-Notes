if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://isma:enote12345@ds163984.mlab.com:63984/e-note'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/E-notes' };
}
