if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://isma:enote12345@ds111065.mlab.com:11065/e-note'
  };
} else {
  module.exports = { mongoURI: 'mongodb://localhost/E-notes' };
}
