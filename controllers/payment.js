const Payment = require("../models/payment");

exports.createPayment = (req, res) => {
  const payment = new Payment(req.body);
  payment.save((err, payment) => {
    console.log(err);
    if (err) {
      res.json({ error: err, message: "payment failed" });
    } else res.json(payment);
  });
};

exports.getPaymentByTime = (req, res) => {
  Payment.find({
    "time": {
      "$gte": req.body.startTime,
      "$lte": req.body.endTime,
    }
  })
  .populate("customer")
  .exec((err, bookings) => {
    if (err) {
      res.json({ error: err, message: "no records found" });
    } else {
      res.json(bookings);
    }
  });
};