const Room = require("../models/rooms");

exports.getEmptyRooms = (req, res) => {
  Room.find({ occupied: False }).exec((err, rooms) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(rooms);
    }
  });
};
