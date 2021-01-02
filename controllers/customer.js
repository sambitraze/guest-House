const Customer = require("../models/customer");

exports.createCustomer = (req, res) => {
  const customer = new Customer(req.body);
  customer.save((err, customer) => {
    console.log(err);
    if (err) {
      res.json({ error: err, message: "customer creation failed" });
    } else res.json(customer);
  });
};

exports.getCustomerById = (req, res) => {
  Customer.findById(req.params.id).exec((err, customer) => {
    if (err) {
      res.json({ error: err, message: "no records found" });
    } else {
      res.json(customer);
    }
  });
};
