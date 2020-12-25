const router = require("express").Router();
const{createBooking,getBookingByCount,getBookingsByDate,updateBooking,getBookingById} = require("../controllers/bookings");

router.post("/create",createBooking);
router.get("/getByCount",getBookingByCount);
router.get("/getByDate",getBookingsByDate);
router.put("/update",updateBooking);
router.get("/:id", getBookingById);

module.exports = router;