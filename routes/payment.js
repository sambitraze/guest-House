const router = require("express").Router();
const{createPayment,getPaymentByTime} = require("../controllers/payment");

router.post("/create",createPayment);
router.post("/getByTime",getPaymentByTime);

module.exports = router;