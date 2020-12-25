const mongoose = require("mongoose");
const RoomSchema = new mongoose.Schema(
  {
    roomcode: String,
    description: String,
    isOccupied: {
        type:Boolean,
        default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);