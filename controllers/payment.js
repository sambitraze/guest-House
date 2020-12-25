const Payment = require("../models/payment");
exports.createBooking = (req, res) => {
  const payment = new Payment(req.body);
  payment.save((err, payment) => {
    console.log(err);
    if (err) {
      res.json({ error: err, message: "payment failed" });
    } else res.json(payment);
  });
};