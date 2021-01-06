const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const BookingSchema = new mongoose.Schema(
  {
    checkIn: {
      type: Number,
    },
    checkOut: {
        type: Number,
      },
    name: {
      type: String,
      trim: true,
    },
    room:{
        type: ObjectId,
        ref: "Room"
    },
    customer:{
        type: ObjectId,
        ref: "Customer"
    },
    amount:{
      type: Number,
    },
    payment:{
      type: ObjectId,
      ref: "Payement"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
