const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema({})



// creating out model
const transactionModel = mongoose.model('transaction',transactionSchema)


module.exports = transactionModel;