const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({

})
const notification = mongoose.model('notification', notificationSchema)
module.exports = notification