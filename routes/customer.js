const router = require("express").Router();
const{createCustomer,getCustomerById} = require("../controllers/customer");

router.post("/create",createCustomer);
router.get("/:id",getCustomerById);

module.exports = router;