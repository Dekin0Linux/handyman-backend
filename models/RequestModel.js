const mongoose = require("mongoose");

const requestSchema = mongoose.Schema(
  {
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "business",
      require: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "client",
      require: true,
    },
    requestDate: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      default: null,
    },
    description: {
      type: String,
      required: true,
    },
    refNumber: {
      type: String,
      require: true,
    },
    requestStatus: {
      type: String,
      default: "pending",
      // enum : ['accepted','pending','cancelled','paid','completed'],
    },
    status: {
      type: String,
      default: "pend",
    },
  },
  { timestamps: true }
);

const requestModel = mongoose.model("request", requestSchema);
module.exports = requestModel;
