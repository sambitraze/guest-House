const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    roomCode: {
      type: String,
    },
    desc: {
      type: String,
      trim: true,
    },
    isOccupied:{
        type: Boolean,
        default: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
