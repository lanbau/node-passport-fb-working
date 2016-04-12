var mongoose = require('mongoose')

module.exports = mongoose.model('User', {
  fb: {
    id: String,
    access_token: String,
    firstName: String,
    lastName: String,
    email: String
  }
  // oauthID: Number,
  // name: String,
  // avatar_url: String,
  // created: Date
})
