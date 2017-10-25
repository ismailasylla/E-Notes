if (process.env.NODE_ENV === 'production') {
    module.exports = { mongoURI: 'mongodb://isma:American1@ds229465.mlab.com:29465/e-notes' }
} else {
    module.exports = { mongoURI: 'mongodb://localhost/E-notes' }
}