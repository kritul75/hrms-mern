const express = require("express");
const router = express.Router();
const {Protected} = require("../middleware/auth.middleware");
const {getLeaves, applyLeave, updateLeaveStatus} = require("../controllers/leave.controller");

router.post("/", Protected, applyLeave);
router.get("/", Protected, getLeaves);
router.patch("/:id", Protected, updateLeaveStatus);

module.exports = router;
