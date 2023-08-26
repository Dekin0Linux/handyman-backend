const mongoose = require("mongoose")


const bookingSchema = mongoose.Schema({
    business : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'request',
        require : true
    },
    bookingNumber : {
        type : String,
        require : true
    },
    bookingStatus : {
        type : String,
        enum : ['pending','completed','cancelled']
    },
    amount:{
        type: Number,
    },
    date : {
        type : Date,
        require : true,
        default : Date()
    }
})

const bookingModel = mongoose.model('booking',bookingSchema)
module.exports = bookingModel;