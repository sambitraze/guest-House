const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    time: {
      type: Number,
    },
    customer:{
        type: ObjectId,
        ref: "Customer"
    },
    paymentmethod:{
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", PaymentSchema);
