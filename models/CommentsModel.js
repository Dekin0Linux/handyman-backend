const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    freelancer : {
        type : mongoose.SchemaType.ObjectId,
        ref : "freelancer"
    },
    client : {
        type: mongoose.SchemaTypes.ObjectId ,
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