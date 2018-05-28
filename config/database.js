if (process.env.NODE_ENV === 'production') {
	module.exports = { mongoURI:'mongodb://andrewj12763:password@ds37740.mlab.com:/heroku_3fntqx21'}
} else {
	module.exports = { mongoURI: 'mongodb://localhost/mongo' }
}
