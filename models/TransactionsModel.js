const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema({
    request : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "request",
        required : true
    },
    client : {
        type: mongoose.Schema.Types.ObjectId ,
        ref:"client",
        required : true
    },
    amount : {
        type : Number,
        required : true,
    },
    date:{
        type: Date,
        default:Date()
    },
    status:{
        type: String,  //pending or completed
        enum : ['success','pending'],
        default:'success'
    },
    transactionRef : {
        type : String,
        required : true
    }
})



// creating out model
const transactionModel = mongoose.model('transaction',transactionSchema)


module.exports = transactionModel;