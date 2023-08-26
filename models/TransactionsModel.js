const mongoose = require("mongoose")

const transactionSchema = mongoose.Schema({
    business : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "business",
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
        enum : ['success','pending']
    },
    transactionRef : {
        type : String,
        required : true
    }
})



// creating out model
const transactionModel = mongoose.model('transaction',transactionSchema)


module.exports = transactionModel;