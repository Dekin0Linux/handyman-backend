const mongoose = require("mongoose")

const freelancerSchema = mongoose.Schema({
    firstname : {
        type:String,
        required:[true,"Please enter your First Name"]
    },
    lastname : {
        type :  String,
        required : [true,"Please enter you lastname"]
    },
    email : {
        type:String,
        required : true,
        unique : true
    },
    password : {
        type : String ,
        minlength :6,
        maxlength :1024,
        trim : true,
        required :[true,'Password is Required'],
    },
    phone : {
        type : String,
        required : true,
    },
    address:{
        type : Object,
        required: true,
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    bio:{
        type : String,
        required : true
    },
    isActive:{
        type : Boolean,
        default : true
    }
})



// creating out model
const freelancerModel = mongoose.model('freelancer',freelancerSchema)


module.exports = freelancerModel;