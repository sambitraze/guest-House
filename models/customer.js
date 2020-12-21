const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    proofType: {
      type: String,
      trim: true,
    },
    proofImage: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      min: 10,
      max: 10,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", CustomerSchema);
