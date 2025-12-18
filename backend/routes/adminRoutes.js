const express = require("express");
const router = express.Router();

const { protect, adminOnly } = require("../middleware/authMiddleware");
const { adminDashboard } = require("../controllers/adminController");

router.get("/dashboard", protect, adminOnly, adminDashboard);

module.exports = router;
