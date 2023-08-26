const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    business : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "business"
    },
    client : {
        type: mongoose.Schema.Types.ObjectId ,
        ref:"client",
    },
    comment : {
        type : String,
        required : true,
    },
    date:{
        type: Date,
        default:Date()
    }
})


module.exports = mongoose.model('comment',commentSchema)