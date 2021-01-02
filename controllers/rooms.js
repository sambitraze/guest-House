const Room = require("../models/rooms");

exports.getRoomById = (req, res) => {
  Room.findById(req.params.id).exec((err, booking) => {
    if (err) {
      res.json({ error: err, message: "no records found" });
    } else {
      res.json(booking);
    }
  });
};

exports.getEmptyRooms = (req, res) => {
  Room.find({ occupied: False }).exec((err, rooms) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json(rooms);
    }
  });
};

exports.createRoom = (req, res) => {
  const room = new Room(req.body);
  room.save((err, room) => {
    console.log(err);
    if (err) {
      res.json({ error: err, message: "room creation failed" });
    } else res.json(room);
  });
};
