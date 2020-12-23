const Booking = require("../models/bookings");
exports.createBooking = (req, res) => {
  const booking = new Booking(req.body);
  booking.save((err, book) => {
    console.log(err);
    if (err) {
      res.json({ error: err, message: "booking failed" });
    } else res.json(book);
  });
};

exports.getBookingsByDate = (req, res) => {
  Booking.find({
    checkIn: { $gte: req.body.checkIn },
    CheckOut: { $lte: req.body.CheckOut },
  }).exec((err, bookings) => {
    if (err) {
      res.json({ error: err, message: "no records found" });
    } else {
      res.json(bookings);
    }
  });
};

exports.updateBooking = (req, res) => {
  Booking.findByIdAndUpdate(
    { _id: req.body._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, booking) => {
      if (err) {
        res.json({ error: err, message: "booking update failed" });
      } else res.json(booking);
    }
  );
};

exports.getBookingByCount = (req, res) => {
    Booking.find({ 
      }).sort({createdAt:-1}).limit(req.body.limit).exec((err, bookings) => {
        if (err) {
          res.json({ error: err, message: "no records found" });
        } else {
          res.json(bookings);
        }
      });
};
