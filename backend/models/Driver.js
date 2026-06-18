const mongoose = require('mongoose')

const driverSchema = new mongoose.Schema({

})
const driver = mongoose.model('driver', driverSchema)
module.exports = driver