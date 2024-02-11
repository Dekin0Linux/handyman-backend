const mongoose = require("mongoose");

const userAuthSchema = mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    fullname: {
      type: String,
      required:[ true,'Fullname is Required']
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 8 characters long"],

    },
    address: {
      type: Object,
      required: true,
    },
    phone_number: {
      type: String,
      minlength: [10, "Phone number must be at least 10 characters long"],
    },
    occupation: {
      type: String,
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
  },
  { timestamps: true }
);

const userAuthModel = mongoose.model("client", userAuthSchema);
module.exports = userAuthModel;
