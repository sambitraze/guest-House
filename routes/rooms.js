const router = require("express").Router();
const{createRoom,getEmptyRooms,getRoomById} = require("../controllers/rooms");


router.post("/create",createRoom);
router.post("/getEmnpty",getEmptyRooms);
router.get("/:id",getRoomById);

module.exports = router;
