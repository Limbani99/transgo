const mongoose = require('mongoose')

const OTPSchema = new mongoose.Schema({

})
const otp = mongoose.model('otp', OTPSchema)
module.exports = otp