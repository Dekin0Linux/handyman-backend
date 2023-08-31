const mongoose = require("mongoose")

const businessSchema = mongoose.Schema({
    freelancer : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "freelancer"
    },
    workers : {
        type : Number,
        required : true,
        default : 1,
    },
    businessName : {
        type : String,
        required : true
    },
    image:{
        type : String,
    },
    yearsOfExpr : {
        type:Number,
        default : 0,
        required : true
    },
    category:{
        type:String,
        required: true
    },
    bio :{
        type : String,
        required:[true,"Description Is Required"],  
    },
    isVerified :{
        type : Boolean,
        default : false
    },
    status:{
        type : String,
        enum : ["active","inactive"] ,
        default:"active",
    },
    ratings : {
        type : Number,
        default : 50,
    },
    comments : {
        type:mongoose.Schema.ObjectId,
        ref :"comment"
    },
    charge:{
        type:Number,
        default:0
    },
    balance : {
        type : Number,
        default: 0
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comment' }]
},{timestamps: true})

const businessModel = mongoose.model('business',businessSchema)
module.exports = businessModel;