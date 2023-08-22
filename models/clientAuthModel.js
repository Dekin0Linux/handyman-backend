const mongoose = require("mongoose");

const userAuthSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  fullname: {
    type: String,
    // required:[ true,'Fullname is Required']
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  phone_number: {
    type: String,
    minlength: 10,
  },
  occupation: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["active", "blocked"],
    default: "active",
  },
});

const userAuthModel = mongoose.model("client", userAuthSchema);
module.exports = userAuthModel;
