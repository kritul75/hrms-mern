const express = require("express");
const router = express.Router();
const {Protected} = require("../middleware/auth.middleware");
const {restrictTo} = require("../middleware/role.middleware");
const {getLeaves, applyLeave, updateLeaveStatus} = require("../controllers/leave.controller");

//making routes protected and restricting some routes to HR only using middle wares
router.use(Protected);
router.use(restrictTo("hr"));

router.post("/", applyLeave);
router.get("/", getLeaves);
router.patch("/:id", updateLeaveStatus);

module.exports = router;
