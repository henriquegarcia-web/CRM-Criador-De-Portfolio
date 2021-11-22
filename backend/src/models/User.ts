const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  token: String
})

const modelName = 'User'

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]
  throw new Error("Don't have connection")
}

module.exports = mongoose.model(modelName, modelSchema)
