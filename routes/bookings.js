const router = require("express").Router();
const{createBooking,getBookingByCount,getBookingsByDate,updateBooking,getBookingById,getBookingsByDateRoomId} = require("../controllers/bookings");

router.post("/create",createBooking);
router.post("/getByCount",getBookingByCount);
router.post("/getByRoomDate",getBookingsByDateRoomId);
router.post("/getByDate",getBookingsByDate);
router.put("/update",updateBooking);
router.get("/:id", getBookingById);

module.exports = router;